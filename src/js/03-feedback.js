import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedback = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);



function onFormInput(event) {
  const formData = {
    email: form.email.value,
    message: form.message.value
  };
  
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(feedback, formDataJSON);
};

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(feedback)));
    event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(feedback);
};

function returnText() {
  const data = JSON.parse(localStorage.getItem(feedback));
  if (data) {
    form.email.value = data.email;
    form.message.value = data.message;
  };
};

returnText();