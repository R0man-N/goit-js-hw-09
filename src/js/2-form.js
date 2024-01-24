const form = document.querySelector('.feedback-form');

window.addEventListener('load', function () {
  const downloadFromLS =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  form.elements['email'].value = downloadFromLS.email || '';
  form.elements['message'].value = downloadFromLS.message || '';
});

form.addEventListener('input', function (e) {
  const input = e.target;
  if (input.type === 'email' || input.type === 'textarea') {
    const saveToLS = {
      email: form.elements['email'].value.trim(),
      message: form.elements['message'].value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(saveToLS));
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = form.elements['email'];
  const messageInput = form.elements['message'];
  const formObject = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  if (formObject.email && formObject.message) {
    console.log(formObject);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Fill in all fields please');
  }
});
