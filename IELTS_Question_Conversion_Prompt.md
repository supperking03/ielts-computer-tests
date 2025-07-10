# IELTS Reading Test Conversion Prompt

You are an expert in converting IELTS Reading tests from raw HTML/text format into a structured JSON format for a web application. Please convert the provided IELTS reading test data into the following standardized structure.

## Supported Question Types

The system supports these question types with their specific structures:

### 1. Fill-in-Blanks (`fill-in-blanks`)
For completion tasks, notes completion, sentence completion
```json
{
    "type": "fill-in-blanks",
    "startQuestionNumber": 1,
    "title": "Questions 1-4",
    "instruction": "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
    "wordLimit": "Write your answers in boxes 1-4 on your answer sheet.",
    "sectionTitle": "Optional section title",
    "items": [
        {
            "text": "the leaves of the tree are _____ in shape",
            "questionNumber": 1
        }
    ]
}
```

### 2. True/False/Not Given (`true-false-not-given`)
```json
{
    "type": "true-false-not-given",
    "startQuestionNumber": 5,
    "title": "Questions 5-7",
    "instruction": "Do the following statements agree with the information given in Reading Passage 1?",
    "items": [
        {
            "statement": "In the Middle Ages, most Europeans knew where nutmeg was grown."
        }
    ]
}
```

### 3. Yes/No/Not Given (`yes-no-not-given`)
Same structure as true-false-not-given but for author's opinions

### 4. Multiple Choice Single Answer (`multiple-choice`)
```json
{
    "type": "multiple-choice",
    "startQuestionNumber": 27,
    "title": "Questions 27-32",
    "instruction": "Choose the correct letter, A, B, C or D.",
    "items": [
        {
            "question": "The writer refers to visitors to New York to illustrate the point that",
            "options": [
                { "value": "A", "text": "exploration is an intrinsic element of being human." },
                { "value": "B", "text": "most people are enthusiastic about exploring." }
            ]
        }
    ]
}
```

### 5. Multiple Select (`multiple-select`)
For "Choose TWO letters" type questions
```json
{
    "type": "multiple-select",
    "startQuestionNumber": 23,
    "title": "Questions 23 and 24",
    "instruction": "Which TWO benefits of automated vehicles does the writer mention?",
    "selectCount": 2,
    "items": [
        {
            "question": "Which TWO benefits of automated vehicles does the writer mention?",
            "options": [
                { "value": "A", "text": "Car travellers could enjoy considerable cost savings." }
            ]
        }
    ]
}
```

### 6. Matching (`matching`)
For matching statements with options
```json
{
    "type": "matching",
    "startQuestionNumber": 33,
    "title": "Questions 33-37",
    "instruction": "Match each statement with the correct explorer, A-E.",
    "note": "You may use any letter more than once.",
    "items": [
        {
            "description": "He referred to the relevance of the form of transport used."
        }
    ],
    "options": [
        { "value": "A", "label": "Peter Fleming" },
        { "value": "B", "label": "Ran Fiennes" }
    ]
}
```

### 7. Paragraph Matching (`paragraph-matching`)
For "Which paragraph contains..." questions
```json
{
    "type": "paragraph-matching",
    "startQuestionNumber": 14,
    "title": "Questions 14-18",
    "instruction": "Reading Passage 2 has seven paragraphs, A-G. Which section contains the following information?",
    "items": [
        {
            "description": "reference to the amount of time when a car is not in use"
        }
    ],
    "options": [
        { "value": "A", "label": "Paragraph A" },
        { "value": "B", "label": "Paragraph B" }
    ]
}
```

### 8. Paragraph Headings (`paragraph-headings`)
For matching headings to paragraphs
```json
{
    "type": "paragraph-headings",
    "startQuestionNumber": 1,
    "title": "Questions 1-5",
    "instruction": "Choose the correct heading for paragraphs A-E from the list of headings below.",
    "items": [
        {
            "paragraph": "A"
        }
    ],
    "options": [
        { "value": "i", "text": "The need for renewable energy" }
    ]
}
```

### 9. Summary Completion (`summary-completion`)
For summary/passage completion with word limits
```json
{
    "type": "summary-completion",
    "startQuestionNumber": 19,
    "title": "Questions 19-22",
    "instruction": "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
    "wordLimit": "Write your answers in boxes 19-22 on your answer sheet.",
    "sectionTitle": "The impact of driverless cars",
    "items": [
        {
            "text": "most motor accidents are partly due to _____",
            "questionNumber": 19
        }
    ]
}
```

### 10. Table Completion (`table-completion`)
For completing tables, charts, diagrams
```json
{
    "type": "table-completion",
    "startQuestionNumber": 8,
    "title": "Questions 8-13",
    "instruction": "Complete the table below. Choose ONE WORD ONLY from the passage for each answer.",
    "totalQuestions": 6,
    "table": {
        "rows": [
            {
                "cells": [
                    { "type": "text", "content": "Middle Ages", "header": true },
                    { "type": "text", "content": "Nutmeg was brought to Europe by the" },
                    { "type": "input", "questionIndex": 0 }
                ]
            }
        ]
    }
}
```

## Main Structure

Convert the test into this main structure:
```json
{
    "id": 13,
    "title": "Reading CAM 15 Test 1",
    "explanation": "URL to explanation if available",
    "image": "URL to test image if available", 
    "results": ["answer1", "answer2", "answer3", ...],
    "passages": [
        {
            "title": "Reading Passage 1",
            "content": "Clean HTML content of the reading passage",
            "questionsData": [
                // Array of question objects using the types above
            ]
        }
    ]
}
```

## Conversion Instructions

1. **Clean the passage content**: Remove excessive HTML, keep only essential formatting like `<p>`, `<h2>`, `<h3>`, `<em>`, `<strong>`

2. **Identify question types**: Based on the instruction text, determine which question type to use:
   - "Complete the..." → `fill-in-blanks` or `summary-completion`
   - "True/False/Not Given" → `true-false-not-given`
   - "Yes/No/Not Given" → `yes-no-not-given`
   - "Choose the correct letter" → `multiple-choice`
   - "Choose TWO/THREE letters" → `multiple-select`
   - "Match..." → `matching`
   - "Which paragraph/section..." → `paragraph-matching`
   - "Choose the correct heading" → `paragraph-headings`
   - Tables/charts → `table-completion`

3. **Extract answers**: Create the results array with correct answers in order (questions 1-40)

4. **Structure questions**: Group questions by type and create appropriate objects

5. **Number questions correctly**: Ensure `startQuestionNumber` matches the actual question numbers

## Important Notes

- Use `___` for blanks in fill-in-blanks questions
- Keep original question numbering
- Include word limits and instructions exactly as shown
- For table completion, map input cells to question indices correctly
- Clean up HTML but preserve essential formatting
- Ensure all answers in results array match question order

Please convert the provided IELTS reading test following this structure exactly. 