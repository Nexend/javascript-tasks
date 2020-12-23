export function setButton(buttonText) {
  const bodyElem = document.querySelector('body');
  bodyElem.innerHTML = buttonText;
}
setButton('<button>button text</button>');