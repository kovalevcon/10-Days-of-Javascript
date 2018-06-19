class Rotate {
  constructor(buttonIds) {
    this.buttonInners = buttonIds;
    this.btnsId = 'btns';
    this.btnsClass = 'divButtons';

    this.createHtml();
  }

  createHtml() {
    const div = document.createElement('div');

    div.id = this.btnsId;
    div.className = this.btnsClass;

    for (let i = 1; i < 10; i++) {
      let btn = document.createElement('button');
      btn.id = 'btn' + i;
      btn.innerText = i;
      btn.className = 'button';
      div.appendChild(btn);
    }
    document.body.appendChild(div);
  }

  rotationInnerText() {
    this.buttonInners.unshift(this.buttonInners.pop());
  }

  setInnerText() {
    const [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4] = this.buttonInners;
    const startPosition = {btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4};

    for (let key in startPosition) {
      document.getElementById(key).innerText = startPosition[key];
    }
  }

  rotate() {
    this.rotationInnerText();
    this.setInnerText();
  }
}

const rotate = new Rotate([1, 2, 3, 6, 9, 8, 7, 4]);
rotate.setInnerText();

document.getElementById('btn5').onclick = () => rotate.rotate();


