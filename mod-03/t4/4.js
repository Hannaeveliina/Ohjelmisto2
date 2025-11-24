'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');
const result = document.getElementById('result');

for (let i = 0; i < students.length; i++) {
  const option = document.createElement('option');
  option.value = students[i].id;
  option.textContent = students[i].name;
  target.appendChild(option);
}

target.addEventListener('change', function() {
    const selectedValue = target.value;  // ID of selected student
    const selectedStudent = students.find(s => s.id === selectedValue);

    if (selectedStudent) {
        result.textContent = `Selected student: ${selectedStudent.name} — ID: ${selectedStudent.id}`;
  }     else {
        result.textContent = 'No student selected.';
  }
});
  alert(`Selected student ID: ${target.value}`);

