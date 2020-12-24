const buttonElem = document.querySelector('.single-use-btn');
function handleClick(event) {
  console.log('clicked');
  this.removeEventListener('click', handleClick);
}
buttonElem.addEventListener('click', handleClick);
