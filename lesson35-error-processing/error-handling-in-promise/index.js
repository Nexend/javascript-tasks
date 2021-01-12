/* eslint-disable no-unreachable */

// -------------------Async ERRORS

const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(data => {
    throw new Error('Error with data');
  })
  .catch(error => {
    console.error('onError1', error.message);
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(error => {
    throw new Error('Server error');
    console.error('onError2', error.message);
  })
  .then(data => {
    console.log('onSuccess2', data);
  })
  .catch(error => {
    console.error('onError3', error.message);
  });
