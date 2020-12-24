function getSection(num) {
  const getSpecialSpan = document.querySelector(`span[data-number="${num}"]`);
  return getSpecialSpan.parentElement.dataset.section
}

getSection(3);