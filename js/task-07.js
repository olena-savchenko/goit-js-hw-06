/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
 */

const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
const minValue = inputRangeRef.getAttribute("min");
inputRangeRef.value = minValue;

const onRangeInput = event => textRef.style.fontSize = `${event.currentTarget.value}px`;

inputRangeRef.addEventListener('input', onRangeInput);
