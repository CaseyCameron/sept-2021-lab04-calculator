import { calculatorArr } from './utils.js';

Object.keys(calculatorArr).map(function (key) {
    calculatorArr[key].button.addEventListener('click', () => {
        calculatorArr[key].answer.textContent = calculatorArr[key].func();
    });
});
