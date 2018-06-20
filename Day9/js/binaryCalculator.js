class Calculator {

  constructor() {
    this.binary = '01';
    this.regBinary = /[01]/;
    this.regOperations = /[+-\/*]/;

    this.divBtnsId = 'btns';
    this.divResId = 'res';

    this.btn0 = 'btn0';
    this.btn1 = 'btn1';
    this.btnClr = 'btnClr';
    this.btnEql = 'btnEql';
    this.btnSum = 'btnSum';
    this.btnSub = 'btnSub';
    this.btnMul = 'btnMul';
    this.btnDiv = 'btnDiv';

    this.bntns = {
      btn0: {
        id: this.btn0,
        innerText: '0'
      },

      btn1: {
        id: this.btn1,
        innerText: '1'
      },

      btnClr: {
        id: this.btnClr,
        innerText: 'C'
      },

      btnEql: {
        id: this.btnEql,
        innerText: '='
      },

      btnSum: {
        id: this.btnSum,
        innerText: '+'
      },

      btnSub: {
        id: this.btnSub,
        innerText: '-'
      },

      btnMul: {
        id: this.btnMul,
        innerText: '*'
      },

      btnDiv: {
        id: this.btnDiv,
        innerText: '/'
      }
    };
  }

  createHtml(value) {
    const divRes = document.createElement('div');
    const divBtns = document.createElement('div');

    divRes.id = this.divResId;
    divRes.innerText = value;
    document.body.appendChild(divRes);

    divBtns.id = this.divBtnsId;

    for (const btn in this.bntns) {
      const btnElem = document.createElement('button');
      btnElem.id = this.bntns[btn].id;
      btnElem.innerText = this.bntns[btn].innerText;
      btnElem.className = 'button';
      divBtns.appendChild(btnElem);
    }

    document.body.appendChild(divBtns);

    // Set action on click for buttons btn0, btn1, btnSum, btnSub, btnMul, btnDiv
    [this.btn0, this.btn1, this.btnSum, this.btnSub, this.btnMul, this.btnDiv].forEach(item => {
      document.getElementById(item).onclick = () => this.addSymbolToRes(this.bntns[item].innerText);
    });

    document.getElementById(this.btnClr).onclick = () => document.getElementById(this.divResId).innerText = '';

    document.getElementById(this.btnEql).onclick = () => this.calculation();
  }

  addSymbolToRes(value) {
    const element = document.getElementById(this.divResId);
    let text = element.innerText;

    // Do not let insert the characters `+*-/` in succession
    if (text.length > 0 && (this.binary.indexOf(text[text.length - 1]) === -1 && this.binary.indexOf(value) === -1)) {
      value = '';
    }

    element.innerText += value;
  }

  calculation() {
    const element = document.getElementById(this.divResId);

    let result;
    let numbs = element.innerText.split(this.regOperations);
    let opers = element.innerText.split(this.regBinary).filter((value) => {
      return value !== ''
    });

    if (numbs.length > 1 && opers.length > 0) {
      result = parseInt(Calculator.convertBinaryToDecimal(numbs.shift()));

      while (numbs.length && opers.length) {
        let secNumb = parseInt(Calculator.convertBinaryToDecimal(numbs.shift()));
        let operator = opers.shift();

        switch (operator) {
          case '+': result += secNumb; break;
          case '-': result -= secNumb; break;
          case '*': result *= secNumb; break;
          case '/': result /= secNumb; break;
        }
      }

      element.innerText = Calculator.convertDecimalToBinary(result);
    }
  }

  static convertBinaryToDecimal(numb) {
    return parseInt(numb, 2).toString(10);
  }

  static convertDecimalToBinary(numb) {
    return parseInt(numb, 10).toString(2);
  }
}

const calc = new Calculator();
calc.createHtml('');


