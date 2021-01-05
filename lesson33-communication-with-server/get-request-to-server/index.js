const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

const getTasksList = () =>
  fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks').then(response =>
    response.json(),
  );

const getTaskById = taskId =>
  fetch(`https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/${taskId}`).then(response =>
    response.json(),
  );

getTasksList().then(tasksList => console.log(tasksList));
getTaskById('8').then(taskData => console.log(taskData));
