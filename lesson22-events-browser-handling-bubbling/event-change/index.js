const inputElem = document.querySelector('.text-input');
function handleChange() {
  console.log(inputElem.value);
}
inputElem.addEventListener('change', handleChange);
