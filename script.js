let keyInput = document.querySelector("#keyInput");
let valueInput = document.querySelector("#valueInput");
let memberInput = document.querySelector("#memberInput");
let addButton = document.querySelector("#addButton");
let clearButton = document.querySelector("#clearButton");
let outputParagraph = document.querySelector("#outputParagraph");

let arrayModeInput = document.querySelector("#arrayMode");
let dictModeInput = document.querySelector("#dictMode");
let dictionaryView = document.querySelector("#dictionaryView");
let arrayView = document.querySelector("#arrayView");

let typeInputs = document.querySelectorAll("#typeDiv input");

let dictionary = {};
let array = [];
let type = "string";
let mode = "dictionary";

for (let input of typeInputs) {
  input.addEventListener("input", selectType);
}

addButton.addEventListener("click", add);
clearButton.addEventListener("click", clear);
keyInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    valueInput.focus();
  }
});
valueInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    add();
  }
});
memberInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    add();
  }
});
dictModeInput.addEventListener("input", changeModeDict);
arrayModeInput.addEventListener("input", changeModeArray);

function add() {
  if (mode == "dictionary") {
    let key = keyInput.value;
    let value = valueInput.value;
    if (key != "" && value != "") {
      if (type == "string") {
        dictionary[key] = `"${value}"`;
      } else {
        dictionary[key] = value;
      }

      outputParagraph.innerHTML = "{ ";
      for (let k in dictionary) {
         outputParagraph.innerHTML += `"${k}": ${dictionary[k]}, `;
      }
      outputParagraph.innerHTML = outputParagraph.innerHTML.substring(0, outputParagraph.innerHTML.length - 2) + "}";
    }
  } else {
    let member = memberInput.value;
    if (member != "") {
      if (type == "string") {
        array.push(`"${member}"`);
      } else {
        array.push(member);
      }

      outputParagraph.innerHTML = `[${array.join(", ")}]`;
    }
  }
  
  keyInput.value = "";
  valueInput.value = "";
  memberInput.value = "";
}

function clear() {
  dictionary = {};
  array = [];
  outputParagraph.innerHTML = "";
}

function selectType() {
  type = this.value;
}

function changeModeDict() {
  dictionaryView.style.display = "inline-block";
  arrayView.style.display = "none";
  mode = "dictionary";
  outputParagraph.innerHTML = "";
}

function changeModeArray() {
  dictionaryView.style.display = "none";
  arrayView.style.display = "inline-block";
  mode = "array";
  outputParagraph.innerHTML = "";
}
