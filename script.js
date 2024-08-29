function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use Function constructor for safer eval
        display.textContent = new Function('return ' + display.textContent)() || '0';
    } catch {
        display.textContent = 'Error';
    }
}
