const inputElem = document.querySelector('.task-status');
function handleChange(event) {
  if (this.checked) {
    console.log(event.target.checked);
  } else {
    console.log(event.target.checked);
  }
}
inputElem.addEventListener('change', handleChange);
