activebuffor = true;
buffor_a = "";
buffor_b = "";
buffor_result = "";
buffor_sign = "";

function createButton(value) {
  const key0 = document.createElement("button");
  key0.innerText = value;
  key0.onclick = show;
  key0.dataset.value = value;
  return key0;
}

function generateKeyboard() {
  const keyboard = document.getElementById("keyboard");
  for (let index = 0; index < 10; index++) {
    keyboard.appendChild(createButton(index));
  }
  keyboard.appendChild(createButton("+"));
  keyboard.appendChild(createButton("-"));
  keyboard.appendChild(createButton("x"));
  keyboard.appendChild(createButton("/"));
  keyboard.appendChild(createButton("="));
  keyboard.appendChild(createButton("."));
  keyboard.appendChild(createButton("<-"));
  keyboard.appendChild(createButton("C"));
}

function setValueOnDisplay() {
  const aa = document.getElementById("a");
  aa.innerText = buffor_a;
  const bb = document.getElementById("b");
  bb.innerText = buffor_b;
  const rr = document.getElementById("result");
  rr.innerText = buffor_result;
  const ss = document.getElementById("sign");
  ss.innerText = buffor_sign;
}

function gen() {
  generateKeyboard();
}

function show() {
  if (["+", "-", "x", "/"].includes(this.dataset.value)) {
    buffor_sign = this.dataset.value;
    if (buffor_b.length == 0) {
      activebuffor = !activebuffor;
    } else {
      switch (buffor_sign) {
        case "+":
          buffor_result = parseFloat(buffor_a) + parseFloat(buffor_b);
          break;
        case "-":
          buffor_result = parseFloat(buffor_a) - parseFloat(buffor_b);
          break;
        case "x":
          buffor_result = parseFloat(buffor_a) * parseFloat(buffor_b);
          break;
        case "/":
          buffor_result = parseFloat(buffor_a) / parseFloat(buffor_b);
          break;
        default:
          break;
      }
      buffor_a = buffor_result;
      buffor_b = "";
      buffor_result = "";
    }
    setValueOnDisplay();
  }

  if (this.dataset.value === "=") {
    switch (buffor_sign) {
      case "+":
        buffor_result = parseFloat(buffor_a) + parseFloat(buffor_b);
        break;
      case "-":
        buffor_result = parseFloat(buffor_a) - parseFloat(buffor_b);
        break;
      case "x":
        buffor_result = parseFloat(buffor_a) * parseFloat(buffor_b);
        break;
      case "/":
        buffor_result = parseFloat(buffor_a) / parseFloat(buffor_b);
        break;
      default:
        break;
    }
    setValueOnDisplay();
  }

  if (Number.isInteger(parseInt(this.dataset.value))) {
    if (activebuffor) {
      if (this.dataset.value != 0 || buffor_a.length > 0)
        buffor_a = buffor_a + this.dataset.value;
    } else {
      if (this.dataset.value != 0 || buffor_b.length > 0)
        buffor_b = buffor_b + this.dataset.value;
    }
    setValueOnDisplay();
  }

  if (this.dataset.value === ".") {
    if (activebuffor) {
      if (!buffor_a.includes(".")) buffor_a = buffor_a + this.dataset.value;
    } else {
      if (!buffor_b.includes(".")) buffor_b = buffor_b + this.dataset.value;
    }
    setValueOnDisplay();
  }

  if (this.dataset.value === "<-") {
    if (activebuffor) {
      buffor_a = buffor_a.slice(0, -1);
    } else {
      buffor_b = buffor_b.slice(0, -1);
    }
    setValueOnDisplay();
  }

  if (this.dataset.value === "C") {
    activebuffor = true;
    buffor_a = "";
    buffor_b = "";
    buffor_result = "";
    buffor_sign = "";
    setValueOnDisplay();
  }
}
