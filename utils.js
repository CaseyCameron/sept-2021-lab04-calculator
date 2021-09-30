export const calculatorArr = [
  {
    input1: document.getElementById('add-input-1'),
    input2: document.getElementById('add-input-2'),
    button: document.getElementById('add-button'),
    answer: document.getElementById('add-answer-value'),
    func: function () {
      const result = +this.input1.value + +this.input2.value;
      this.input1.value = "";
      this.input2.value = "";
      return result;
    }
  },
  {
    input1: document.getElementById('sub-input-1'),
    input2: document.getElementById('sub-input-2'),
    button: document.getElementById('sub-button'),
    answer: document.getElementById('sub-answer-value'),
    func: function () {
      const result = +this.input1.value - +this.input2.value;
      this.input1.value = "";
      this.input2.value = "";
      return result;
    }
  },
  {
    input1: document.getElementById('mul-input-1'),
    input2: document.getElementById('mul-input-2'),
    button: document.getElementById('mul-button'),
    answer: document.getElementById('mul-answer-value'),
    func: function () {
      const result = +this.input1.value * +this.input2.value;
      this.input1.value = "";
      this.input2.value = "";
      return result;
    }
  },
  {
    input1: document.getElementById('div-input-1'),
    input2: document.getElementById('div-input-2'),
    button: document.getElementById('div-button'),
    answer: document.getElementById('div-answer-value'),
    func: function () {
      const result = +this.input1.value / +this.input2.value;
      this.input1.value = "";
      this.input2.value = "";
      return result;
    }
  },
  {
    input1: document.getElementById('mod-input-1'),
    input2: document.getElementById('mod-input-2'),
    button: document.getElementById('mod-button'),
    answer: document.getElementById('mod-answer-value'),
    func: function () {
      const result = +this.input1.value % +this.input2.value;
      this.input1.value = "";
      this.input2.value = "";
      return result;
    }
  },
  {
    input1: document.getElementById('int-div-input-1'),
    input2: document.getElementById('int-div-input-2'),
    button: document.getElementById('int-div-button'),
    answer: document.getElementById('int-div-answer-value'),
    func: function () {
      const result = Math.floor(+this.input1.value / +this.input2.value);
      this.input1.value = "";
      this.input2.value = "";
      return result;
    }
  },
];