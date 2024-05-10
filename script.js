function clearEntry() {
    document.getElementById('display').value = '';
}
function clearAll() {
    document.getElementById('display').value = '';
}
function backspace() {
    var value = document.getElementById('display').value;
    document.getElementById('display').value = value.substring(0, value.length - 1);
}
function appendCharacter(character) {
    document.getElementById('display').value += character;
}
function inverse() {
    var value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / value;
}
function square() {
    var value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(value, 2);
}
function sqrt() {
    var value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(value);
}
function toggleSign() {
    var value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = -value;
}
function calculate() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
function toggle() {
    var calculator = document.querySelector('.calculator');
    calculator.classList.toggle('minimized');
}
function closeCalculator() {
    window.close();
}