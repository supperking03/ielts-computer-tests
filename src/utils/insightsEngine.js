import { isAnswerMatch } from './answerMatching';
import { loadTestProgress } from './testProgress';

export const SKILL_LABELS = {
  'fill-in-blanks': 'Fill in Blanks',
  'table-completion': 'Table Completion',
  'sentence-completion': 'Sentence Completion',
  'true-false-not-given': 'True / False / Not Given',
  'yes-no-not-given': 'Yes / No / Not Given',
  'multiple-choice': 'Multiple Choice',
  'multiple-select': 'Multiple Answer',
  'matching': 'Matching',
  'paragraph-headings': 'Heading Matching',
  'paragraph-matching': 'Information Location',
};

export const WEAKNESS_EXPLANATIONS = {
  'true-false-not-given':
    'You frequently confuse FALSE (directly contradicted by the passage) with NOT GIVEN (not mentioned at all). Try to find direct textual evidence before answering — if you cannot point to a specific sentence, it is likely NOT GIVEN.',
  'yes-no-not-given':
    "You often mix up NO (contradicts the writer's opinion) with NOT GIVEN (the writer does not address it). Focus on what the writer explicitly states, not what is implied.",
  'fill-in-blanks':
    'Your answers suggest difficulty with precise vocabulary retrieval. Look for synonyms in the question stem that lead to the exact word in the passage — the answer word is almost always there verbatim.',
  'table-completion':
    'The exact answer word is usually in the passage. Use the table structure to understand what category of information fits each gap, then scan for it.',
  'sentence-completion':
    'Check grammatical fit: the completed sentence must read naturally. This constraint helps eliminate distractor words and confirms the correct word form.',
  'paragraph-headings':
    'Headings reflect the main idea of a paragraph, not a specific detail. Read only the opening and closing sentences of each paragraph — do not get drawn into examples or statistics.',
  'matching':
    'Use proper names, dates, or unique key terms in the question as anchor points to locate the correct section quickly. Avoid reading linearly.',
  'paragraph-matching':
    "Use keywords from each statement to skim paragraph opening lines. You don't need to re-read the whole passage — locate the anchor, then verify with one or two surrounding sentences.",
  'multiple-choice':
    'Multiple choice often includes plausible distractors. After choosing your answer, locate the specific sentence in the passage that confirms it — never rely on feeling alone.',
  'multiple-select':
    'With multiple correct answers, avoid stopping at the first plausible option. Systematically check each option against the passage text before confirming your selections.',
};

function buildQuestionTypeMap(passages) {
  const map = {};
  if (!passages) return map;
  passages.forEach(passage => {
    if (!passage.questions) return;
    passage.questions.forEach(qGroup => {
      const { type, startQuestionNumber, items } = qGroup;
      if (!items || startQuestionNumber == null) return;
      items.forEach((_, idx) => {
        map[startQuestionNumber + idx] = type;
      });
    });
  });
  return map;
}

export function analyzeHistory(testCollections) {
  const completedTests = [];
  const skillStats = {};
  const bandHistory = [];

  for (const collection of testCollections) {
    for (const test of collection.tests) {
      const progress = loadTestProgress(collection.scope, test.id);
      if (!progress || !progress.hasViewedResults || !progress.answers) continue;

      completedTests.push({
        testId: test.id,
        title: test.title,
        scope: collection.scope,
        collectionLabel: collection.label,
        band: progress.lastBandScore,
        score: progress.lastScore,
        completedAt: progress.completedAt || progress.updatedAt,
      });

      if (progress.lastBandScore != null) {
        bandHistory.push({
          date: progress.completedAt || progress.updatedAt,
          band: progress.lastBandScore,
        });
      }

      if (!test.correctAnswers || !test.passages) continue;

      const qTypeMap = buildQuestionTypeMap(test.passages);

      test.correctAnswers.forEach((correctAnswer, idx) => {
        const qNum = idx + 1;
        const userAnswer = (progress.answers[idx] || '').trim();
        const qType = qTypeMap[qNum];
        if (!qType) return;

        if (!skillStats[qType]) skillStats[qType] = { correct: 0, total: 0 };
        skillStats[qType].total++;
        if (userAnswer && isAnswerMatch(userAnswer, correctAnswer)) {
          skillStats[qType].correct++;
        }
      });
    }
  }

  bandHistory.sort((a, b) => new Date(a.date) - new Date(b.date));

  return { completedTests, skillStats, bandHistory };
}

export function generateInsights(analysisData) {
  const { completedTests, skillStats, bandHistory } = analysisData;
  const count = completedTests.length;
  if (count === 0) return null;

  const completedWithBand = completedTests.filter(t => t.band != null);
  const avgBand =
    completedWithBand.length > 0
      ? completedWithBand.reduce((s, t) => s + t.band, 0) / completedWithBand.length
      : null;

  const skillBreakdown = Object.entries(skillStats)
    .map(([type, stats]) => ({
      type,
      label: SKILL_LABELS[type] || type,
      accuracy: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      correct: stats.correct,
      total: stats.total,
    }))
    .filter(s => s.total >= 2)
    .sort((a, b) => a.accuracy - b.accuracy);

  const weaknesses = skillBreakdown.filter(s => s.accuracy < 70);
  const strengths = skillBreakdown.filter(s => s.accuracy >= 80);

  // Progress trend — compare first half vs second half of band history
  let trend = null;
  if (bandHistory.length >= 3) {
    const mid = Math.ceil(bandHistory.length / 2);
    const firstHalf = bandHistory.slice(0, mid);
    const secondHalf = bandHistory.slice(-mid);
    const avgFirst = firstHalf.reduce((s, b) => s + b.band, 0) / firstHalf.length;
    const avgRecent = secondHalf.reduce((s, b) => s + b.band, 0) / secondHalf.length;
    const delta = avgRecent - avgFirst;
    trend = {
      direction: delta >= 0.4 ? 'improving' : delta <= -0.4 ? 'declining' : 'steady',
      delta: Math.round(delta * 10) / 10,
      firstAvg: Math.round(avgFirst * 10) / 10,
      recentAvg: Math.round(avgRecent * 10) / 10,
    };
  }

  // Actionable suggestions
  const suggestions = [];
  const weakTypes = new Set(weaknesses.map(w => w.type));

  if (weakTypes.has('true-false-not-given') || weakTypes.has('yes-no-not-given')) {
    suggestions.push({
      priority: 'high',
      focus: 'Paraphrase Recognition',
      icon: '🔍',
      tip: 'The core skill in T/F/NG is detecting paraphrase — not matching keywords. Before answering, confirm you can point to a specific sentence. If you cannot, the answer is likely NOT GIVEN.',
    });
  }

  if (
    weakTypes.has('fill-in-blanks') ||
    weakTypes.has('table-completion') ||
    weakTypes.has('sentence-completion')
  ) {
    suggestions.push({
      priority: 'high',
      focus: 'Vocabulary & Word Forms',
      icon: '📖',
      tip: 'Identify the synonym in the question that signals the answer location. Then check your answer matches the word limit and fits grammatically in the sentence.',
    });
  }

  if (weakTypes.has('paragraph-headings')) {
    suggestions.push({
      priority: 'medium',
      focus: 'Main Idea Identification',
      icon: '🗂️',
      tip: 'Skim the opening and closing sentences of each paragraph to capture its main point. Eliminate heading options that only match a supporting detail, not the overall topic.',
    });
  }

  if (weakTypes.has('matching') || weakTypes.has('paragraph-matching')) {
    suggestions.push({
      priority: 'medium',
      focus: 'Scanning Speed',
      icon: '⚡',
      tip: 'Use key nouns, proper names, and numbers as scanning anchors. Move your eyes quickly down the text until you spot the anchor, then slow down to verify.',
    });
  }

  if (weakTypes.has('multiple-choice') || weakTypes.has('multiple-select')) {
    suggestions.push({
      priority: 'medium',
      focus: 'Eliminating Distractors',
      icon: '🎯',
      tip: 'Distractors usually match the topic but contradict or overgeneralize the text. Locate the exact sentence that supports your answer before committing.',
    });
  }

  if (suggestions.length === 0 && count >= 3) {
    suggestions.push({
      priority: 'positive',
      focus: 'Time Management',
      icon: '⏱️',
      tip: 'Your question accuracy is strong. The next barrier is speed — aim to complete each passage in under 20 minutes. Timed drills help close the gap between Band 7 and Band 8+.',
    });
  }

  return {
    testCount: count,
    dataQuality: count >= 5 ? 'deep' : count >= 3 ? 'moderate' : 'light',
    overview: {
      totalCompleted: count,
      averageBand: avgBand != null ? Math.round(avgBand * 10) / 10 : null,
      latestBand: bandHistory.length > 0 ? bandHistory[bandHistory.length - 1].band : null,
    },
    skillBreakdown,
    weaknesses,
    strengths,
    suggestions,
    trend,
  };
}
