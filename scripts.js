let lines = [];
let currentLine = 0;

document.getElementById('copyNext').addEventListener('click', function() {
    // Split the text by line breaks if lines[] is empty
    if(lines.length === 0) {
        const content = document.getElementById('sourceText').value;
        lines = content.split('\n');
    }

    // Copy the next line to clipboard
    if(currentLine < lines.length) {
        copyToClipboard(lines[currentLine]);
        currentLine++;
    } else {
        alert("All lines have been copied!");
    }
});

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
