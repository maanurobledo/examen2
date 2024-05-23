export function calculate() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const number3 = document.getElementById('number3').value;
    const result = document.getElementById('result');

    const num1 = parseFloat(number1) || 0;
    const num2 = parseFloat(number2) || 0;
    const num3 = parseFloat(number3) || 0;

    const minNumber = Math.min(num1, num2, num3);
    result.value = minNumber;
}

export function clean() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('number3').value = '';
    document.getElementById('result').value = '';
}
