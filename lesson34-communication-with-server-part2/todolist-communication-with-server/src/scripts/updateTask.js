import { renderListItems } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateway.js';

export const onToggleTask = event => {
  if (event.target.className !== 'list-item__checkbox') {
    return;
  }
  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text } = tasksList.find(task => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    done,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
};

export const onDeleteTask = event => {
  if (event.target.className !== 'list-item__delete-btn') {
    return;
  }
  const taskId = event.target.closest('.list-item').dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
};

// 1. Prepare data
// 2. Update data in data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
