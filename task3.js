// Напишіть скрипт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
//
//   <main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
//
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"
// Спробуйте не використовувати рядок HTML-коду для вставки (`innerHTML`).
// Використовуйте методи DOM: `createElement()`, `appendChild()`, `setAttribute()`, `classList.add()` тощо.

let mainDiv = document.getElementsByClassName('create_elements');
let createdMain = document.createElement('main');
let createdDiv = document.createElement('div');
let createdP = document.createElement('p');

createdMain.classList.add('mainClass', 'check', 'item');
createdDiv.id = 'myDiv';
createdP.textContent = 'First paragraph';

mainDiv[0].appendChild(createdMain);
createdMain.appendChild(createdDiv);
createdDiv.append(createdP);


