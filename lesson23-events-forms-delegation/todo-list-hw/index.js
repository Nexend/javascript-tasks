/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
  const listElem = document.querySelector('.list');

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.dataset.id = `${index}`;
      checkboxElem.checked = done;
      checkboxElem.classList.add('list-item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderListItems(tasks);

const updatedTasks = () => {
  const listItemElems = document.querySelectorAll('.list__item');
  listItemElems.forEach(el => el.remove());
  renderListItems(tasks);
};

const addTask = () => {
  const inputEl = document.querySelector('.task-input');

  const task = {
    text: inputEl.value,
    done: false,
  };

  if (inputEl.value) {
    tasks.push(task);
    inputEl.value = '';
    updatedTasks();
  }
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

const listElem = document.querySelector('.list');

function checkboxStatus(event) {
  event.target.classList.toggle('list__item_done');
  if (event.target.classList.contains('list__item_done')) {
    event.target.children[0].checked = true;

    tasks.forEach(el => {
      if (el.text === event.target.textContent) {
        el.done = true;
      }
    });
    updatedTasks();
  } else {
    event.target.children[0].checked = false;

    tasks.forEach(el => {
      if (el.text === event.target.textContent) {
        el.done = false;
      }
      updatedTasks();
    });
  }
  console.log(tasks);
}

listElem.addEventListener('click', checkboxStatus);
