function finishList() {
  const listElem = document.querySelector('.list');
  const specialElem = document.querySelector('.special');

  const firstItemOfList = document.createElement('li');
  firstItemOfList.textContent = '1';

  const fourItemOfList = document.createElement('li');
  fourItemOfList.textContent = '4';

  const sixItemOfList = document.createElement('li');
  sixItemOfList.textContent = '6';

  const eightItemOfList = document.createElement('li');
  eightItemOfList.textContent ='8';

  listElem.prepend(firstItemOfList);
  specialElem.before(fourItemOfList);
  specialElem.after(sixItemOfList);
  listElem.append(eightItemOfList);

}
finishList();