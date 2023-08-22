// 1. Select all elements with the class "et_pb_text_inner"
var elements = document.querySelectorAll('.et_pb_text_inner');

elements.forEach(function(element) {
    // 2. For each of these elements, find the child <div> elements 
    // with the class "google-auto-placed ap_container" and remove them
    var divsToRemove = element.querySelectorAll('.google-auto-placed.ap_container');
    divsToRemove.forEach(function(div) {
        div.remove();
    });

    var h3sToRemove = element.querySelectorAll('h3');
    h3sToRemove.forEach(function(h3) {
        if (h3.textContent.includes("READING PASSAGE")) {
            h3.remove();
        }
    });
});

// 3. Optionally, retrieve the modified outerHTML of the "et_pb_text_inner" elements
var modifiedOuterHTMLs = Array.from(elements).map(function(el) {
    return el.outerHTML;
});

// Printing the modified outerHTMLs (for the first 4 elements, as an example)
console.log(modifiedOuterHTMLs.slice(1, 4));

var obj = {
    id: 0,
    title: 'Readig CAM 17 Test 2',
    image: 'https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam-17-test-2.jpg',
    results: [],
    passages: [
        {
            title: `Reading Passage 1`,
            content: ``,
            question: ``
        },
        {
            title: `Reading Passage 2`,
            content: ``,
            question: ``
        },
        {
            title: `Reading Passage 3`,
            content: ``,
            question: ``
        }
    ]
};

// Assuming you have the modifiedOuterHTMLs array as before
for (var j = 0; j < 3 && j < modifiedOuterHTMLs.length; j++) {
    obj.passages[j].content = modifiedOuterHTMLs[j+1];

    let delimiter = '<span style="font-size: x-large;"><strong>Questions';
    let part1s = obj.passages[j].content.split(delimiter);
    obj.passages[j].content = part1s[0]
    console.log(part1s.length)

    if (part1s.length >= 2)
    {
        for (var i = 1; i < part1s.length; i++) {
            obj.passages[j].question = obj.passages[j].question + '<h3>' + delimiter + part1s[i];
        }
    }
}

// The provided HTML content (as a string) 
var htmlContent = document.querySelector('.et_pb_row.et_pb_row_7').outerHTML

// Parse the HTML content using a DOMParser
var parser = new DOMParser();
var doc = parser.parseFromString(htmlContent, 'text/html');

// Extract content from the <p> tags inside elements with class "et_pb_toggle_content clearfix"
var toggleContents = doc.querySelectorAll('.et_pb_toggle_content.clearfix');
var contents = [];
toggleContents.forEach(function(content) {
    var pTags = content.querySelectorAll('p');
    pTags.forEach(function(p) {
        var text = p.textContent.split('\xa0\xa0').pop();  // Remove numbers and spaces from the beginning
        contents.push(text.trim());
    });
});

for (var i = 0; i < contents.length; i++) {
    var content = contents[i];
    var pattern = /^[A-Z]\s*,\s*[A-Z]$/;  // Regular expression pattern for values like "B , D" or "E, F"

    if (pattern.test(content)) {
        // Clone the value and insert it next to the original one
        contents.splice(i + 1, 0, content);
        i++;  // Skip the next value (the cloned one) in the next loop iteration
    }
}

obj.results = contents;

console.log(obj)



