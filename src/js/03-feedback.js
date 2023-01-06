import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const textarea = document.querySelector('.feedback-form textarea');

const feedback = "feedback-form-state";

form.addEventListener('submit', throttle(onFormSubmit, 500));
form.addEventListener('input', onTextareaInput);


function onFormSubmit(event) {
  console.log(feedback);
}

function onTextareaInput(event) {
  console.log(event.currentTarget.value);
}
