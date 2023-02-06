/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
 на button.change-color і виводить значення кольору в span.color.

 Для генерування випадкового кольору використовуй функцію getRandomHexColor
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const colorRef = document.querySelector('.color');

function onBtnChangeColorClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorRef.textContent = getRandomHexColor();
}

 btnRef.addEventListener('click', onBtnChangeColorClick);
