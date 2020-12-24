const buttonElements = document.querySelectorAll('.btn');
function handleClick(event) {
  console.log(event.target.textContent);
}
Array.from(buttonElements).forEach(el => el.addEventListener('click', handleClick));
