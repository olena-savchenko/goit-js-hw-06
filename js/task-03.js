/*Напиши скрипт для створення галереї зображень на підставі масиву даних.
1. Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
2. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
3. Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
4. Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// створює розмітку для одного li.img
const makeImgGalleryMarkup = ({ url, alt } = {}) =>
  `<li class="gallery__item">
    <img class="gallery__img" src = '${url}' alt = '${alt}' width ="370">
  </li>`;


// створює массив всіх розміток із об'єкта images, перетворює масив на рядок
 const makeImgGallery = images.map(makeImgGalleryMarkup).join("");

// отримує посилання на <ul class="gallery"></ul>
const galleryRef = document.querySelector('.gallery');

// метод для додавання рядка  у середину <ul class="gallery"></ul> 
galleryRef.insertAdjacentHTML('afterbegin', makeImgGallery);
