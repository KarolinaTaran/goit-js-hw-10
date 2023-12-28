import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = this.elements['delay'];
  const stateInput = this.elements['state'];
  const radioBtn = document.getElementsByName('state');

  const delay = parseInt(delayInput.value);
  const state = stateInput.value;

  const notificationPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay} ms`);
      } else {
        reject(`❌ Rejected promise in ${delay} ms`);
      }
    }, delay);
  });

  notificationPromise
    .then(message => {
      radioBtn[0].checked = false;
      iziToast.show({
        message: message,
        messageColor: 'white',
        backgroundColor: 'green',
        position: 'topCenter',
      });
    })
    .catch(message => {
      radioBtn[1].checked = false;
      iziToast.show({
        message: message,
        messageColor: 'white',
        backgroundColor: 'red',
        position: 'topCenter',
      });
    });
  delayInput.value = '';
});
