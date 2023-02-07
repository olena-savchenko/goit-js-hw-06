/* Напиши скрипт створення і очищення колекції елементів.
 1. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
 2. Натисненням на кнопку Очистити, колекція елементів очищається.
 3. Створи функцію createBoxes(amount), яка приймає один параметр - число.
  Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
  Розміри найпершого <div> - 30px на 30px.
  Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
  Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

  4. Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector('#controls').firstElementChild;
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

//  Додаємо слухача подій на button "Create" та button "Destroy"
btnCreateRef.addEventListener('click', onBtnCreateClick);
btnDestroyRef.addEventListener('click', onBtnDestroyClick)

// функція обробки події click on button "Create"
function onBtnCreateClick() {
  // викликаємо функцію створення div та передаємо їй значення з input
  createBoxes(inputRef.value);
}

// функція очищає вміст div#boxes та поле input
function onBtnDestroyClick() {

  boxesRef.innerHTML = '';
  inputRef.value = '';

}

// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const arrOfdiv = [];
  
  // створює div в кількості amount , пушимо в масив, на кожній ітераціі збільшуємо на 10px ширину/висоту div 
  for (let i = 0; i < amount; i += 1) { 
    const div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;

    arrOfdiv.push(div);
  }

  // додаємо в розмітку spread масива з дівами
  boxesRef.append(...arrOfdiv);
}