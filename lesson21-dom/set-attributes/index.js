function finishForm() {
  const loginForm = document.querySelector('.login-form');

  const inputElemLogin = document.createElement('input');
  inputElemLogin.setAttribute('type', 'text');
  inputElemLogin.setAttribute('name', 'login');

  const inputElemPassword = document.querySelector('input[name=password]');
  inputElemPassword.setAttribute('type', 'password');

  loginForm.prepend(inputElemLogin);
}
finishForm();