document.addEventListener('DOMContentLoaded', function () {
  // Перевірка, чи є збережені дані в локальному сховищі
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const formData = JSON.parse(storedData);

    // Заповнення полів форми збереженими даними
    document.querySelector('[name="email"]').value = formData.email || '';
    document.querySelector('[name="message"]').value = formData.message || '';
  }

  // Відслідковування події input на формі
  document
    .querySelector('.feedback-form')
    .addEventListener('input', function (event) {
      const formData = {
        email: document.querySelector('[name="email"]').value.trim(),
        message: document.querySelector('[name="message"]').value.trim(),
      };

      // Зберігання даних у локальному сховищі
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

  // Відслідковування події submit на формі
  document
    .querySelector('.feedback-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.querySelector('[name="email"]').value.trim();
      const message = document.querySelector('[name="message"]').value.trim();

      // Перевірка, чи обидва елементи форми заповнені
      if (email && message) {
        // Виведення об'єкту з даними у консоль
        console.log({ email, message });

        // Очищення сховища та полів форми
        localStorage.removeItem('feedback-form-state');
        document.querySelector('[name="email"]').value = '';
        document.querySelector('[name="message"]').value = '';
      } else {
        // Виведення повідомлення, якщо не всі дані введені
        console.log('Будь ласка, заповніть обидва поля форми.');
      }
    });
});
