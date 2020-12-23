export function getTitle() {
  const titleElem = document.querySelector('.title');
  return titleElem.textContent;
}
export function getDescription() {
  const descrElem = document.querySelector('.about');
  return descrElem.innerText;
}
export function getPlans() {
  const plansElem = document.querySelector('.plans');
  return plansElem.innerHTML;
}
export function getGoal() {
  const goalElem = document.querySelector('.goal');
  return goalElem.outerHTML;
}
getTitle();
getDescription();
getPlans();
getGoal();
