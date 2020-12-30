import { initTodoListHandlers } from './todoList.js';
import { renderListItems } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderListItems();
  initTodoListHandlers();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderListItems();
  }
};

window.addEventListener('storage', onStorageChange);
