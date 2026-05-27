const display = document.getElementById('result-text');

function input(n) {
    display.value += n;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value) {
            display.value = Function("return " + display.value)();
        }
    } catch (error) {
        display.value = "Error";
    }
}