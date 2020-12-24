/* eslint-disable no-param-reassign */
function squaredNumbers() {
  const allElemsOfList = document.querySelectorAll('.number');
  const everyElemOfList = [...allElemsOfList].forEach(el => {
    el.dataset.squaredNumber = el.dataset.number * el.dataset.number;
  });

}
squaredNumbers();