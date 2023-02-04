// Скрипт рахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item
// Number of categories: 3
const categoryRef = document.querySelectorAll('.item');
console.log('Number of categories: ', categoryRef.length);


categoryRef.forEach(item => {
	// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
	console.log('Category: ', item.firstElementChild.textContent);

	// i кількість елементів в категорії (усіх <li>, вкладених в нього).
	console.log('Elements: ', item.lastElementChild.children.length);
});
