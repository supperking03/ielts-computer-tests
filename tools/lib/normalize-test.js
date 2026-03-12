function parseOptionString(raw) {
  const match = String(raw).trim().match(/^([A-Ha-h]|\d{1,2}|[ivxIVX]{1,4})[.)]?\s+(.*)$/);
  if (!match) return null;
  return { value: match[1], text: match[2], label: match[2] };
}

function splitBlankText(text) {
  const raw = String(text || '').trim();
  const parts = raw.split(/_{3,}|\[BLANK\]/i);
  if (parts.length >= 2) {
    return {
      prefix: parts[0].trimEnd() + ' ',
      suffix: ' ' + parts.slice(1).join(' ').trimStart(),
    };
  }
  return { prefix: raw, suffix: '' };
}

function normalizeOptions(options = []) {
  return options.map((option) => {
    if (typeof option === 'string') {
      const parsed = parseOptionString(option);
      if (parsed) {
        return {
          value: parsed.value,
          text: parsed.text,
          label: parsed.label,
        };
      }
      return { value: option, text: option, label: option };
    }
    return {
      ...option,
      text: option.text || option.label || '',
      label: option.label || option.text || '',
    };
  });
}

function normalizeHeadingGroup(group) {
  let options = normalizeOptions(group.options || []);
  if (!options.length && Array.isArray(group.items) && group.items[0]?.options) {
    options = normalizeOptions(group.items[0].options);
  }

  const items = (group.items || []).map((item) => {
    if (item.paragraph) return { paragraph: item.paragraph };
    const match = String(item.question || item.description || '').match(/Paragraph\s+([A-Z])/i);
    return { paragraph: match ? match[1].toUpperCase() : String(item.question || '').trim() };
  });

  return {
    ...group,
    options: options.map((option) => ({ value: option.value, text: option.text })),
    items,
  };
}

function normalizeTfngGroup(group) {
  return {
    ...group,
    items: (group.items || []).map((item) => ({
      statement: item.statement || item.question || item.description || '',
    })),
  };
}

function normalizeMatchingGroup(group) {
  let options = normalizeOptions(group.options || []);
  if (!options.length && Array.isArray(group.items) && group.items[0]?.options) {
    options = normalizeOptions(group.items[0].options);
  }

  return {
    ...group,
    options: options.map((option) => ({ value: option.value, label: option.label || option.text })),
    items: (group.items || []).map((item) => ({
      description: item.description || item.question || '',
    })),
  };
}

function normalizeCompletionGroup(group) {
  const items = (group.items || []).map((item) => {
    if (item.prefix !== undefined || item.suffix !== undefined) return item;
    const blank = splitBlankText(item.question || item.text || item.description || '');
    return {
      prefix: blank.prefix,
      suffix: blank.suffix,
    };
  });

  if (group.type === 'summary-completion' && (!Array.isArray(group.options) || !group.options.length)) {
    return {
      ...group,
      type: 'fill-in-blanks',
      items,
    };
  }

  return {
    ...group,
    items,
    options: group.options ? normalizeOptions(group.options).map((option) => ({ value: option.value, text: option.text })) : group.options,
  };
}

function normalizeParagraphMatchingGroup(group) {
  return {
    ...group,
    items: (group.items || []).map((item) => ({
      description: item.description || item.question || '',
    })),
  };
}

function normalizeMultipleChoiceGroup(group) {
  const groupOptions = normalizeOptions(group.options || []);

  return {
    ...group,
    items: (group.items || []).map((item) => {
      if (typeof item === 'string') {
        return {
          question: item,
          options: groupOptions.map((option) => ({ value: option.value, text: option.text })),
        };
      }

      return {
        ...item,
        question: item.question || item.text || '',
        options: normalizeOptions(item.options || group.options || []).map((option) => ({
          value: option.value,
          text: option.text,
        })),
      };
    }),
  };
}

function normalizeTableCompletionGroup(group) {
  return {
    ...group,
    table: {
      ...group.table,
      rows: (group.table?.rows || []).map((row) => ({
        ...row,
        cells: (row.cells || []).map((cell) => {
          if (typeof cell === 'string') {
            return { content: cell };
          }

          if (cell && typeof cell === 'object' && typeof cell.questionIndex === 'number' && !cell.type) {
            return { ...cell, type: 'input' };
          }

          return cell;
        }),
      })),
    },
  };
}

function normalizeTestObject(test) {
  return {
    ...test,
    passages: (test.passages || []).map((passage) => ({
      ...passage,
      questions: (passage.questions || []).map((group) => {
        switch (group.type) {
          case 'paragraph-headings':
            return normalizeHeadingGroup(group);
          case 'true-false-not-given':
          case 'yes-no-not-given':
            return normalizeTfngGroup(group);
          case 'matching':
            return normalizeMatchingGroup(group);
          case 'paragraph-matching':
            return normalizeParagraphMatchingGroup(group);
          case 'multiple-choice':
          case 'multiple-select':
            return normalizeMultipleChoiceGroup(group);
          case 'fill-in-blanks':
          case 'sentence-completion':
          case 'summary-completion':
            return normalizeCompletionGroup(group);
          case 'table-completion':
            return normalizeTableCompletionGroup(group);
          default:
            return group;
        }
      }),
    })),
  };
}

module.exports = { normalizeTestObject };
