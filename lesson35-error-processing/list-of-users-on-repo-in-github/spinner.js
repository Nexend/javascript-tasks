const spinnerElem = document.querySelector('.spinner');

export const hideSpinner = () => {
  spinnerElem.classList.add('spinner_hidden');
};

export const showSpinner = () => {
  spinnerElem.classList.remove('spinner_hidden');
};
