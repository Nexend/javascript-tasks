const baseUrl = 'https://5ffc1e7363ea2f0017bdbba5.mockapi.io/api/v1/users';

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

const updateUserData = {
  email: 'star@email.com',
  firstName: 'Danya',
  lastName: 'Danya',
  age: 20,
};

const getUsersList = () => fetch(baseUrl).then(response => response.json());

getUsersList().then(userList => console.log(userList));

const getUserById = userId => fetch(`${baseUrl}/${userId}`).then(response => response.json());

getUserById('2').then(userData => console.log(userData));

const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

// createUser(newUserData).then(() => console.log('User created'));

const updateUser = (userId, updatedUserData) =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedUserData),
  });

// updateUser('2', updateUserData).then(() => console.log('User updated'));

const deleteUser = userId =>
  fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });

// deleteUser('2').then(() => console.log('User deleted'));
