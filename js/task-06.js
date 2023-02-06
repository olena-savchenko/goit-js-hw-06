/*
- Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
перевіряє його вміст щодо правильної кількості введених символів.
- Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
- Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
 */

const inputRef = document.querySelector('#validation-input');

const onInputBlur = (event) => { 
	
	// 1. Якщо довжина вмісту інпута співпадає з data-атрибутом length інпута: 
	if (event.currentTarget.value.length == inputRef.dataset.length) {
		
		// якщо у інпута вже є класс invalid, який підсвічує червоним бордер, видаляємо
		if (inputRef.classList.contains('invalid')) {
			inputRef.classList.remove('invalid');
		}

		// додаємо клас, який підсвічує бордер зеленим
		inputRef.classList.add('valid');
	}

	// 2. Якщо довжина вмісту інпута НЕ співпадає з data-атрибутом length інпута:
	else {
		// якщо вже є класс, який підсвічує бордер зеленим, видаляємо
		if (inputRef.classList.contains('valid')) {
			inputRef.classList.remove('valid');
		}

		// додаємо класс, який підсвічує бордер червоним
		inputRef.classList.add('invalid');
	}
}

inputRef.addEventListener('blur', onInputBlur);