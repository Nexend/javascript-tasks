function createButton(buttonText) {
  const buttonElem = document.createElement('button');
  buttonElem.textContent = buttonText;
  document.body.append(buttonElem);
}
createButton('Send Email');