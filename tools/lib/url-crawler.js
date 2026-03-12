const cheerio = require('cheerio');

const DEFAULT_HEADERS = {
  'user-agent': 'Mozilla/5.0 (compatible; IELTSPoC/1.0; +https://example.com/bot)'
};

function decodeHtml(html) {
  return cheerio.load(`<div id="root">${html}</div>`)('#root').text().trim();
}

function cleanText(text) {
  return text
    .replace(/\r/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractPreloadedState(html) {
  const marker = 'window.__PRELOADED_STATE__=';
  const start = html.indexOf(marker);
  if (start === -1) return null;

  const from = start + marker.length;
  const end = html.indexOf(';</script>', from);
  if (end === -1) return null;

  const raw = html.slice(from, end).trim();
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function collectBodies(node, bodies = []) {
  if (!node || typeof node !== 'object') return bodies;

  if (Array.isArray(node)) {
    for (const item of node) collectBodies(item, bodies);
    return bodies;
  }

  for (const [key, value] of Object.entries(node)) {
    if (key === 'body' && typeof value === 'string' && value.trim()) {
      bodies.push(value.trim());
      continue;
    }
    collectBodies(value, bodies);
  }

  return bodies;
}

function splitParagraphsFromBodies(bodies) {
  const paragraphs = [];

  for (const body of bodies) {
    const normalized = body
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<p[^>]*>/gi, '')
      .replace(/<\/?i>/gi, '')
      .replace(/<\/?b>/gi, '')
      .replace(/<\/?strong>/gi, '')
      .replace(/<\/?em>/gi, '')
      .replace(/<\/?[^>]+>/g, '');

    for (const part of normalized.split(/\n+/)) {
      const text = decodeHtml(part);
      if (text && text.length > 40) {
        paragraphs.push(cleanText(text));
      }
    }
  }

  return [...new Set(paragraphs)];
}

function extractVisibleParagraphs($) {
  const seen = new Set();
  const paragraphs = [];

  $('article p, main p').each((_, el) => {
    const text = cleanText($(el).text());
    if (text.length > 40 && !seen.has(text)) {
      seen.add(text);
      paragraphs.push(text);
    }
  });

  return paragraphs;
}

function scoreParagraphs(paragraphs) {
  return paragraphs.filter((text) => text.length >= 100 && text.length <= 1400);
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: DEFAULT_HEADERS
  });

  if (!response.ok) {
    throw new Error(`Fetch failed for ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

function isLikelyArticleUrl(url) {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/+$/, '');
    if (!path || path === '') return false;
    if (/\.(jpg|jpeg|png|gif|webp|svg|pdf)$/i.test(path)) return false;
    if (/(video|search|tag|topic|newsletter|account|subscribe|newsletters)(\/|$)/i.test(path)) return false;

    const segments = path.split('/').filter(Boolean);
    if (segments.length < 2) return false;

    const slug = segments[segments.length - 1];
    if (!slug || slug.length < 8) return false;
    if (!slug.includes('-')) return false;

    return true;
  } catch {
    return false;
  }
}

function absolutizeUrl(baseUrl, href) {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return null;
  }
}

async function discoverArticleUrls(homepageUrl, { limit = 30 } = {}) {
  const html = await fetchHtml(homepageUrl);
  const $ = cheerio.load(html);
  const base = new URL(homepageUrl);
  const seen = new Set();
  const discovered = [];

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    const absoluteUrl = absolutizeUrl(homepageUrl, href);
    if (!absoluteUrl) return;

    let parsed;
    try {
      parsed = new URL(absoluteUrl);
    } catch {
      return;
    }

    if (parsed.origin !== base.origin) return;
    if (!isLikelyArticleUrl(absoluteUrl)) return;

    const canonicalUrl = absoluteUrl.split('#')[0];
    if (seen.has(canonicalUrl)) return;
    seen.add(canonicalUrl);

    const anchorText = cleanText($(el).text());
    discovered.push({
      url: canonicalUrl,
      anchorText,
    });
  });

  return discovered.slice(0, limit);
}

async function crawlUrl(url) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);
  const preloaded = extractPreloadedState(html);

  const title = $('meta[property="og:title"]').attr('content') || $('title').text().trim();
  const description = $('meta[name="description"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || url;

  const preloadedParagraphs = splitParagraphsFromBodies(collectBodies(preloaded));
  const visibleParagraphs = extractVisibleParagraphs($);
  const paragraphs = scoreParagraphs(
    preloadedParagraphs.length >= visibleParagraphs.length ? preloadedParagraphs : visibleParagraphs
  );

  return {
    sourceUrl: canonical,
    title,
    description,
    paragraphCount: paragraphs.length,
    textLength: paragraphs.join('\n\n').length,
    paragraphs,
    articleText: paragraphs.join('\n\n')
  };
}

module.exports = {
  crawlUrl,
  cleanText,
  discoverArticleUrls,
};
