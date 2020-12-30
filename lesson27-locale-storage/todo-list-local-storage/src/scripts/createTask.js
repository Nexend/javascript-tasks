import { renderListItems } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const inputEl = document.querySelector('.task-input');

  const text = inputEl.value;

  if (!text) {
    return;
  }

  inputEl.value = '';
  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text,
    done: false,
    id: Math.random().toString(),
  });

  setItem('tasksList', newTasksList);

  renderListItems();
};
