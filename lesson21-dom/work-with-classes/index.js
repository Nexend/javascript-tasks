function manageClasses() {
  const firstElemOfList = document.querySelector('.one');
  firstElemOfList.classList.add('selected');

  const secondElemOfList = document.querySelector('.two');
  secondElemOfList.classList.remove('selected');

  const thirdElemOfList = document.querySelector('.three');
  thirdElemOfList.classList.toggle('three_done');

  const fourElemOfList = document.querySelector('.four');

  if (fourElemOfList.classList.contains('some-class')) {
    fourElemOfList.classList.add('another-class');
  }
}
manageClasses();
