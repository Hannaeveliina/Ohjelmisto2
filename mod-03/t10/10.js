'use strict';

const form = document.getElementById('source');
const target = document.getElementById('target');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.querySelector('input[name="firstname"]').value.trim();
  const lastName = document.querySelector('input[name="lastname"]').value.trim();

  if (firstName && lastName) {
    target.textContent = `Your name is ${firstName} ${lastName}`;
  } else {
    target.textContent = 'Please enter both first and last name!';
  }
});
