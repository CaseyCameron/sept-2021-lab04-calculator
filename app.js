import { calculatorArr } from './utils.js';

calculatorArr.map(ele => {
    ele.button.addEventListener('click', () => {
        ele.answer.textContent = ele.func();
    });
});
