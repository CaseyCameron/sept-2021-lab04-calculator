import { calculatorArr } from '../utils.js';

const test = QUnit.test;

test('testing add function', (expect) => {
    const expected = 5;
    calculatorArr.add.input1 = { value: '2' };
    calculatorArr.add.input2 = { value: '3' };

    const actual = calculatorArr.add.func();
    expect.equal(actual, expected);
});

test('testing subtract function', (expect) => {
    const expected = 1;
    calculatorArr.subtract.input1 = { value: '4' };
    calculatorArr.subtract.input2 = { value: '3' };

    const actual = calculatorArr.subtract.func();
    expect.equal(actual, expected);
});

test('testing multiply function', (expect) => {
    const expected = 12;
    calculatorArr.multiply.input1 = { value: '4' };
    calculatorArr.multiply.input2 = { value: '3' };

    const actual = calculatorArr.multiply.func();
    expect.equal(actual, expected);
});

test('testing divide function', (expect) => {
    const expected = 4;
    calculatorArr.divide.input1 = { value: '12' };
    calculatorArr.divide.input2 = { value: '3' };

    const actual = calculatorArr.divide.func();
    expect.equal(actual, expected);
});

test('testing modulo function', (expect) => {
    const expected = 0;
    calculatorArr.modulo.input1 = { value: '2' };
    calculatorArr.modulo.input2 = { value: '2' };

    const actual = calculatorArr.modulo.func();
    expect.equal(actual, expected);
});

test('testing quotient function', (expect) => {
    const expected = 2;
    calculatorArr.quotient.input1 = { value: '7' };
    calculatorArr.quotient.input2 = { value: '3' };

    const actual = calculatorArr.quotient.func();
    expect.equal(actual, expected);
});
