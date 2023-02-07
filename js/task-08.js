/*
Напиши скрипт управління формою логіна.
1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
2. Під час відправлення форми сторінка не повинна перезавантажуватися.
3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
 де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
 Для доступу до елементів форми використовуй властивість elements.
5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
 */

const formRef = document.querySelector('.login-form');

const onLoginFormSubmit = event => {

	//Під час відправлення форми сторінка не перезавантажується
	event.preventDefault();

	// посилання на елементи форми
	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	// перевірка на пусті поля
	if (email === '' || password === '') { 
		alert('Всi поля повинні бути заповнені!')
	}

	// збирає значення полів в об'єкт
	const formData = {
		email,
		password
	};

	console.log(formData);

	formRef.reset();
	
}

formRef.addEventListener('submit', onLoginFormSubmit);
