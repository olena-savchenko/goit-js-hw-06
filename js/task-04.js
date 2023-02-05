/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
3. Оновлюй інтерфейс новим значенням змінної counterValue.
 */

// початковий лічильник 0
let counterValue = 0;

// посилання на кнопку -1
const btnDecrementRef = document.querySelector('[data-action="decrement"]');

// посилання на кнопку +1
const btnIncrementRef = document.querySelector('[data-action="increment"]');

// посилання на значення лічильника
const valueRef = document.querySelector('#value');


const onBtnDecrementClick = () => { 
	counterValue -= 1;
	valueRef.textContent = counterValue;
}

const onBtnIncrement = () => { 
	counterValue += 1;
	valueRef.textContent = counterValue;
}

btnDecrementRef.addEventListener("click", onBtnDecrementClick);
btnIncrementRef.addEventListener("click", onBtnIncrement);



