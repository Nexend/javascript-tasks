import { onCreateTask } from './createTask.js';
import { onToggleTask, onDeleteTask } from './updateTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onToggleTask);
  listElem.addEventListener('click', onDeleteTask);
};
