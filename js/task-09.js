/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
 на button.change-color і виводить значення кольору в span.color.

 Для генерування випадкового кольору використовуй функцію getRandomHexColor
 */

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

function onBtnChangeColorClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorRef.textContent = color;
}

 btnRef.addEventListener('click', onBtnChangeColorClick);
