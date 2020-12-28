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
    .map((el, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.dataset.id = `${index}`;
      checkboxElem.checked = el.done;
      checkboxElem.classList.add('list-item-checkbox');

      if (el.done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkboxElem, el.text);

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

const checkboxStatus = event => {
  if (!event.target.classList.contains('list-item-checkbox')) {
    return;
  }

  const checkboxElem = document.querySelector(`input[data-id="${event.target.dataset.id}"]`);

  if (checkboxElem.checked) {
    [...tasks].map(el => {
      if (el.text === checkboxElem.parentElement.textContent) {
        el.done = true;
      }
      return el.done;
    });
    updatedTasks();
  } else {
    [...tasks].map(el => {
      if (el.text === checkboxElem.parentElement.textContent) {
        el.done = false;
      }
      return el.done;
    });
    updatedTasks();
  }
};

document.querySelector('.list').addEventListener('click', checkboxStatus);
