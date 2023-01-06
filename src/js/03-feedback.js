import throttle from 'lodash.throttle';

const obj = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const feedback = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
returnText();


function onFormInput(event) {
  obj[event.target.name] = event.target.value;
  localStorage.setItem(feedback, JSON.stringify(obj));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(localStorage.getItem(feedback));
  localStorage.removeItem(feedback);
}

function returnText() {
  const feedbackMessage = localStorage.getItem(feedback);
  const parsedMessage = JSON.parse(feedbackMessage);
  if (parsedMessage) {
    input.value = parsedMessage.email;
    textarea.value = parsedMessage.message;
  }
};