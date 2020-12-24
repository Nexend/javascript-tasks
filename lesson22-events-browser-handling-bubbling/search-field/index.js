const buttonElem = document.querySelector('.search__btn');
function handleClick() {
  console.log(this.previousElementSibling.value);
}
buttonElem.addEventListener('click', handleClick);
