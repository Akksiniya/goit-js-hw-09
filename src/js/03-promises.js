import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', submitPromise);

function submitPromise (evt) {
  evt.preventDefault();

  const {
    elements: { delay, step, amount  }
  } = evt.currentTarget;
  
  const delayInit = Number(delay.value);
  const stepInit = Number(step.value);
  const amountInit = amount.value;

  let delayProm = delayInit;
  let positionProm = 0;

  for (let i = 1; i<= amountInit; i +=1) {
     positionProm += 1;

    createPromise(positionProm, delayProm) 
    .then(onSuccess)
    .catch(onError)

    delayProm += stepInit;

    }
  
   };

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {

      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      } else {
        reject({position, delay});
        // Reject
      }

    }, delay);
  });
  
};

const onSuccess = ({position, delay}) => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
    timeout: 5000,
  });
  
};

const onError = ({position, delay}) => {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
    timeout: 5000,
  })
};

