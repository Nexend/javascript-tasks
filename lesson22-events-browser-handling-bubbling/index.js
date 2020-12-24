const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsListElement = document.querySelector('.events-list');
eventsListElement.textContent = '';

const clearButton = document.querySelector('.clear-btn');
function clearField() {
  eventsListElement.innerHTML = '';
}
clearButton.addEventListener('click', clearField);

const logTarget = (text, color) => {
  eventsListElement.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

divElem.removeEventListener('click', logGreyDiv, true);
pElem.removeEventListener('click', logGreyP, true);
spanElem.removeEventListener('click', logGreySpan, true);

divElem.removeEventListener('click', logGreenDiv);
pElem.removeEventListener('click', logGreenP);
spanElem.removeEventListener('click', logGreenSpan);

const addEvents = document.querySelector('.attach-handlers-btn');
function addAllEvents() {
  logGreenDiv();
  logGreenP();
  logGreenSpan();
  logGreySpan();
  logGreyP();
  logGreyDiv();
}
addEvents.addEventListener('click', addAllEvents, true);

const removeEvents = document.querySelector('.remove-handlers-btn');
removeEvents.removeEventListener('click', addAllEvents, true);
