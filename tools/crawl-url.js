const { crawlUrl } = require('./lib/url-crawler');

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node crawl-url.js <url>');
    process.exit(1);
  }

  const crawled = await crawlUrl(url);
  const result = {
    ...crawled,
    sampleParagraphs: crawled.paragraphs.slice(0, 5)
  };

  console.log(JSON.stringify(result, null, 2));
}

main().catch((error) => {
  console.error(error.stack || String(error));
  process.exit(1);
});
