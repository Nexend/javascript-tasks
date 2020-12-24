const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsListElement = document.querySelector('.events-list');
eventsListElement.textContent = '';

const logTarget = (text, color) => {
  eventsListElement.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const clearButton = document.querySelector('.clear-btn');
function clearField() {
  eventsListElement.innerHTML = '';
}
clearButton.addEventListener('click', clearField);

const attachHandlers = document.querySelector('.attach-handlers-btn');
const addEvents = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);

  spanElem.addEventListener('click', logGreenSpan);
  pElem.addEventListener('click', logGreenP);
  divElem.addEventListener('click', logGreenDiv);
};
attachHandlers.addEventListener('click', addEvents);

const removeHandleds = document.querySelector('.remove-handlers-btn');
const removeEvents = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);

  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);
};
removeHandleds.addEventListener('click', removeEvents);
