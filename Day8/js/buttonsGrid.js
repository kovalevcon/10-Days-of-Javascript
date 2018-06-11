function createButtons() {
  const div = document.createElement('div');

  div.id = 'btns';
  div.className = 'divButtons';

  for (let i = 1; i < 10; i++) {
    let btn;
    btn = document.createElement('button');
    btn.id = 'btn' + i;
    btn.innerText = i;
    btn.className = 'button';
    div.appendChild(btn);
  }
  document.body.appendChild(div);
}

class Rotate {
  constructor(buttonIds) {
    this.buttonInners = buttonIds;
  }

  rotationInnerText() {
    this.buttonInners.unshift(this.buttonInners.pop());
  }

  setInnerText() {
    let [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4] = this.buttonInners;
    let startPosition = {btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4};

    for (let key in startPosition) {
      document.getElementById(key).innerText = startPosition[key];
    }
  }

  rotate() {
    this.rotationInnerText();
    this.setInnerText();
  }
}

createButtons();
const rotate = new Rotate([1, 2, 3, 6, 9, 8, 7, 4]);
rotate.setInnerText();

document.getElementById('btn5').onclick = () => rotate.rotate();


