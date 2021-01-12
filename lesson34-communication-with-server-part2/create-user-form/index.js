const submitButtonELem = document.querySelector('.submit-button');
const errorTextElem = document.querySelector('.error-text');
const formElem = document.querySelector('.login-form');

const baseUrl = 'https://5ffc1e7363ea2f0017bdbba5.mockapi.io/api/v1/form';

// const getUsersList = () => fetch(baseUrl).then(response => response.json());

const isValidForm = e => {
  if (formElem.reportValidity()) {
    submitButtonELem.disabled = false;
  }
};

formElem.addEventListener('input', isValidForm);

const createUser = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then(res => res.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
    })
    .catch(() => {
      errorTextElem.textContent = 'Failed to create user';
    });

const onFormSubmit = e => {
  e.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  createUser(formData);
  // getUsersList().then(userList => console.log(userList));
};

formElem.addEventListener('submit', onFormSubmit);
