const buttonElem = document.querySelectorAll('.pagination__page');
function handleClick() {
  console.log(this.dataset.pageNumber);
}
[...buttonElem].forEach(el => el.addEventListener('click', handleClick));
