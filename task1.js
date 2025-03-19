// На HTML-сторінці є ненумерований список з id="list", який містить 5 елементів <li>
// Використовуючи засоби DOM, отримай доступ до всіх елементів списку та виведи їх вміст в консоль (console.log) в такому порядку:
// перший елемент → останній елемент → другий елемент → третій елемент → четвертий елемент
// *Додатково: кількість елементів може бути довільною і невідомою наперед
// *Додатково: на сторінці можуть бути інші списки, всередині потрібного списку можуть бути інші елементи, крім <li>.
// Вважайте, що скрипт підключено в кінці body, тести не генерують подію `DOMContentLoaded`.

let lists = document.querySelectorAll('#list');

if (lists.length > 1) {
  lists[0].id = 'another_list';
}

let list = document.querySelector('#list');

if (list) {
  let items = Array.from(list.getElementsByTagName("li"));

  if (items.length > 0) console.log(items[0].textContent);
  if (items.length > 1) console.log(items[items.length - 1].textContent);
  if (items.length > 2) console.log(items[1].textContent);
  if (items.length > 3) console.log(items[2].textContent);
  if (items.length > 4) console.log(items[3].textContent);
} 