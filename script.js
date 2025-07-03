function append(value) {
  document.getElementById("display").value += value;
}

function clear() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function Result() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

