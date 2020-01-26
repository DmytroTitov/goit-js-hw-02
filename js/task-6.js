// Вариант 1
// const valueInputRef = document.querySelector('.js-value');
// const addValueBtn = document.querySelector('.js-add-value');
// const calcBtn = document.querySelector('.js-calculate');
// const numbers = [];
// let total = 0;

// addValueBtn.addEventListener('click', function() {
//   const value = Number(valueInputRef.value);
//   numbers.push(value);
//   valueInputRef.value = '';
// });

// calcBtn.addEventListener('click', function() {
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log('Общая сумма чисел равна: ', total);
// });

// Вариант 2
const numbers = [];
let input;
let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  const notANamber = Number.isNaN(input);

  if (notANamber) {
    alert(`Это не число, введите число`);
    continue;
  }

  numbers.push(input);
}

for (const number of numbers) {
  total += number;
}

alert(`Общая сумма чисел равна ${total}`);
