'use strict';

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

if (trigger && target) {
  trigger.addEventListener('mouseover', function() {
    target.src = 'img/picB.jpg';
  });

  trigger.addEventListener('mouseout', function() {
    target.src = 'img/picA.jpg';
  });
} else {
  console.error('Could not find trigger or target element!');
}
