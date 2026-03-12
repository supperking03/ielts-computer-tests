const SUPPORTED_TYPES = new Set([
  'fill-in-blanks',
  'sentence-completion',
  'true-false-not-given',
  'yes-no-not-given',
  'multiple-choice',
  'multiple-select',
  'matching',
  'paragraph-matching',
  'paragraph-headings',
  'summary-completion',
  'table-completion',
]);

function countQuestionsInGroup(group) {
  if (typeof group.totalQuestions === 'number') return group.totalQuestions;
  if (group.type === 'multiple-select') return group.selectCount || 0;
  if (Array.isArray(group.items)) return group.items.length;
  return 0;
}

function hasValidOptions(options) {
  return Array.isArray(options) && options.length > 0 && options.every((option) => option && option.value && (option.text || option.label));
}

function validateTestObject(test) {
  const errors = [];

  if (!test || typeof test !== 'object') {
    return ['Generated payload is not an object.'];
  }

  if (!Array.isArray(test.passages) || test.passages.length !== 3) {
    errors.push(`Expected exactly 3 passages, got ${Array.isArray(test.passages) ? test.passages.length : 'invalid'}.`);
  }

  if (!Array.isArray(test.correctAnswers) || test.correctAnswers.length !== 40) {
    errors.push(`Expected correctAnswers length 40, got ${Array.isArray(test.correctAnswers) ? test.correctAnswers.length : 'invalid'}.`);
  }

  let totalQuestions = 0;

  for (const [passageIndex, passage] of (test.passages || []).entries()) {
    if (!passage || typeof passage !== 'object') {
      errors.push(`Passage ${passageIndex + 1} is invalid.`);
      continue;
    }

    if (!passage.title || !passage.content || !Array.isArray(passage.questions)) {
      errors.push(`Passage ${passageIndex + 1} must include title, content, and questions.`);
      continue;
    }

    let expectedQuestionNumber = null;

    for (const [groupIndex, group] of passage.questions.entries()) {
      if (!group || typeof group !== 'object') {
        errors.push(`Passage ${passageIndex + 1} question group ${groupIndex + 1} is invalid.`);
        continue;
      }

      if (!SUPPORTED_TYPES.has(group.type)) {
        errors.push(`Unsupported question type "${group.type}" in passage ${passageIndex + 1}.`);
      }

      if (typeof group.startQuestionNumber !== 'number') {
        errors.push(`Missing startQuestionNumber in passage ${passageIndex + 1} group ${groupIndex + 1}.`);
      } else if (expectedQuestionNumber !== null && group.startQuestionNumber !== expectedQuestionNumber) {
        errors.push(`Passage ${passageIndex + 1} group ${groupIndex + 1} should start at question ${expectedQuestionNumber}, got ${group.startQuestionNumber}.`);
      }

      if (group.type === 'paragraph-headings') {
        if (!hasValidOptions(group.options)) {
          errors.push(`paragraph-headings group ${groupIndex + 1} in passage ${passageIndex + 1} needs group-level options with value/text.`);
        }
        if (!Array.isArray(group.items) || !group.items.every((item) => item && item.paragraph)) {
          errors.push(`paragraph-headings group ${groupIndex + 1} in passage ${passageIndex + 1} needs items[].paragraph.`);
        }
      }

      if (group.type === 'true-false-not-given' || group.type === 'yes-no-not-given') {
        if (!Array.isArray(group.items) || !group.items.every((item) => item && item.statement)) {
          errors.push(`${group.type} group ${groupIndex + 1} in passage ${passageIndex + 1} needs items[].statement.`);
        }
      }

      if (group.type === 'matching' || group.type === 'paragraph-matching') {
        if (!Array.isArray(group.items) || !group.items.every((item) => item && item.description)) {
          errors.push(`${group.type} group ${groupIndex + 1} in passage ${passageIndex + 1} needs items[].description.`);
        }
        if (group.type === 'matching' && !hasValidOptions(group.options)) {
          errors.push(`matching group ${groupIndex + 1} in passage ${passageIndex + 1} needs group-level options with value/label.`);
        }
      }

      if (group.type === 'multiple-choice' || group.type === 'multiple-select') {
        if (!Array.isArray(group.items) || !group.items.every((item) => item && item.question)) {
          errors.push(`${group.type} group ${groupIndex + 1} in passage ${passageIndex + 1} needs items[].question.`);
        }

        if (!Array.isArray(group.items) || !group.items.every((item) => hasValidOptions(item.options))) {
          errors.push(`${group.type} group ${groupIndex + 1} in passage ${passageIndex + 1} needs items[].options with value/text.`);
        }
      }

      if (group.type === 'fill-in-blanks' || group.type === 'sentence-completion' || group.type === 'summary-completion') {
        if (!Array.isArray(group.items) || !group.items.every((item) => item && item.prefix !== undefined && item.suffix !== undefined)) {
          errors.push(`${group.type} group ${groupIndex + 1} in passage ${passageIndex + 1} needs items[].prefix and items[].suffix.`);
        }
      }

      if (group.type === 'table-completion') {
        const inputCells = (group.table?.rows || [])
          .flatMap((row) => row.cells || [])
          .filter((cell) => cell && typeof cell === 'object' && cell.type === 'input');

        if (!inputCells.length || inputCells.some((cell) => typeof cell.questionIndex !== 'number')) {
          errors.push(`table-completion group ${groupIndex + 1} in passage ${passageIndex + 1} needs input cells with questionIndex.`);
        }
      }

      const groupCount = countQuestionsInGroup(group);
      if (groupCount <= 0) {
        errors.push(`Could not count questions in passage ${passageIndex + 1} group ${groupIndex + 1}.`);
      }
      totalQuestions += groupCount;

      if (typeof group.startQuestionNumber === 'number') {
        expectedQuestionNumber = group.startQuestionNumber + groupCount;
      }
    }
  }

  if (totalQuestions !== 40) {
    errors.push(`Expected 40 total question slots, got ${totalQuestions}.`);
  }

  return errors;
}

module.exports = { validateTestObject };
