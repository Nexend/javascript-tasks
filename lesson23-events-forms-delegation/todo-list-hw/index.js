const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderListItems = listItems => {
  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.setAttribute('data-id', index);
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.append(checkboxElem, text);

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      return listItemElem;
    });

  listElem.append(...listItemsElems);
};

renderListItems(tasks);

const addTask = () => {
  const inputEl = document.querySelector('.task-input');

  const task = {
    text: inputEl.value,
    done: false,
  };
  if (inputEl.value) {
    tasks.push(task);
    inputEl.value = '';
    listElem.innerHTML = '';
    renderListItems(tasks);
  }
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

const checkboxStatus = event => {
  if (event.target.className === 'list__item-checkbox') {
    const { id } = event.target.dataset;
    const isChecked = event.target.checked;

    tasks[id].done = isChecked;
    listElem.innerHTML = '';
    renderListItems(tasks);
  }
};
listElem.addEventListener('click', checkboxStatus);
