import { renderListItems } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = event => {
  if (event.target.className !== 'list__item-checkbox') {
    return;
  }
  const tasksList = getItem('tasksList');

  const newTasksList = tasksList.map(task => {
    if (task.id === event.target.dataset.id) {
      return {
        ...task,
        done: event.target.checked,
      };
    }
    return task;
  });

  setItem('tasksList', newTasksList);

  renderListItems();
};
