// Простилізуйте елементи, як показано на зображенні task2.png.
// - Фон заголовка має бути "lightgreen", шрифт — жирний (font-weight: 700).
// - Колір другого параграфа — "red".
// - Третій параграф має бути підкреслений (underline).
// - Четвертий параграф має бути курсивним (italic).
// - Список має бути без маркерів і відображатися в одну лінію за допомогою flex.
// - На сторінці є елемент <span>, який потрібно приховати, встановивши властивість display: none.

let h1 = document.querySelector('h1');
h1.style.backgroundColor = 'lightgreen';
h1.style.fontWeight = '700';

let myDiv = document.getElementById('myDiv');
myDiv.children[1].style.color = 'red';
myDiv.children[2].style.textDecoration = 'underline';
myDiv.children[3].style.fontStyle = 'italic';

let myList = document.getElementById('myList');
myList.style.listStyleType = 'none';
myList.style.display = 'flex';

let span = document.getElementsByTagName('span');
span[1].style.display = 'none';
