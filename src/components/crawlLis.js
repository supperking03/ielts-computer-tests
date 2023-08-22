// 1. Select all elements with the class "et_pb_text_inner"
var elements = document.querySelectorAll('.et_pb_text_inner');

elements.forEach(function(element) {
    // 2. For each of these elements, find the child <div> elements 
    // with the class "google-auto-placed ap_container" and remove them
    var divsToRemove = element.querySelectorAll('.google-auto-placed.ap_container');
    divsToRemove.forEach(function(div) {
        div.remove();
    });
});

// 3. Optionally, retrieve the modified outerHTML of the "et_pb_text_inner" elements
var modifiedOuterHTMLs = Array.from(elements).map(function(el) {
    return el.outerHTML;
});

// Printing the modified outerHTMLs (for the first 4 elements, as an example)
console.log(modifiedOuterHTMLs.slice(0, 4));

var obj = {
    id: 0,
    title: 'Listening CAM 18 Test 3',
    image: 'https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam-18-test-2.jpg',
    audioSource: '',
    results: [],
    passages: [
        {
            title: `Task 1`,
            content: ``
        },
        {
            title: `Task 2`,
            content: ``
        },
        {
            title: `Task 3`,
            content: ``
        },
        {
            title: `Task 4`,
            content: ``
        }
    ]
};

// Assuming you have the modifiedOuterHTMLs array as before
for (var i = 0; i < 4 && i < modifiedOuterHTMLs.length; i++) {
    obj.passages[i].content = modifiedOuterHTMLs[i];
}

// The provided HTML content (as a string)
var htmlContent = document.querySelector('.et_pb_row.et_pb_row_11.et_pb_row_4col').outerHTML;

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

