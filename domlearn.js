/*
Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?
*/

const elemDiv = document.body.firstElementChild;
const elemUl = document.body.lastElementChild;
const elemLiSibling = document.body.lastElementChild.lastElementChild;

/*
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
*/
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}

/*
Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
*/
let table1 = document.getElementById("age-table");
let labels = table1.getElementsByTagName("label");
let firstTd = table1.querySelector("td");
let form = document.getElementsByName("search");
let firstInput = form.querySelector("input");
let inputs = form.querySelector("input");
let lastInput = inputs[inputs.length - 1];

/*
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/

for (let li of document.querySelectorAll("li")) {
  let name = li.firstChild.data;
  let countLi = li.getElementsByTagName("li").length;

  title = title.trim();

  alert(name + ": " + countLi);
}

/*
Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    
    </script>
    </body>
    </html>
 */

let divData = document.querySelector("data-widget-name");
alert(divData.dataset.widgetName);

/*
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
*/

let urls = document.querySelectorAll("a");

for (url of urls) {
  let href = url.getAttribute("href");

  if (!href) {
    continue;
  }

  if (href.startsWith("http://internal.com")) {
    continue;
  }

  if (!href.includes("://")) {
    continue;
  }

  url.style.color = "orange";
}

// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

function clear(elem) {
  elem.innerHtml = "";
}

/*
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
*/

function addList() {
  let ul = document.createElement("ul");
  document.body.append(ul);
  while (true) {
    let text = prompt("Напишите текст для списка", "");

    if (!text) {
      break;
    }

    let li = document.createElement("li");
    li.textContent(text);
    ul.append(li);
  }
}

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

function createTree(container, obj) {
  container.append(createTreeRec(obj));
}

function createTreeRec(obj) {
  if (!Object.keys(obj)) {
    return;
  }

  let list = document.createElement("ul");

  for (key in obj) {
    let listItem = document.createElement("li");

    listItem.innerHTML = key;

    let childrenList = createTreeRec(obj[key]);

    if (childrenList) {
      listItem.append(childrenList);
    }

    list.append(listItem);
  }

  return list;
}
/*
Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. 
Узлы нижнего уровня, без детей – пропускайте.
*/
function addCountListItem() {
  let list = document.getElementsByTagName("li");

  for (let listItem of list) {
    let listItemCount = listItem.getElementsByTagName("li").length;
    if (!listItemCount) {
      continue;
    }

    listItem.firstChild.data += ` [${listItemCount}]`;
  }
}

/*
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
*/

let li = document.getElementById("one");
li.append("<li>2</li>", "<li>3</li>");

/*
Напишите функцию showNotification(options), 
которая создаёт уведомление: <div class="notification"> с заданным содержимым. 
Уведомление должно автоматически исчезнуть через 1,5 секунды.
*/

function showNotification({ top = 0, right = 0, className, html }) {
  const div = document.createElement("div");
  div.className = "notification";
  div.classList.add(className);

  div.style.top = `${top}px`;
  div.style.right = `${right}px`;

  div.innerHTML = html;
  document.body.append(div);

  setTimeout(() => div.remove(), 1500);
}

/*
Элемент должен позиционироваться за счёт JavaScript, а не CSS.
Код должен работать с любым размером мяча (10, 20, 30 пикселей)
и любым размером поля без привязки к исходным значениям.
*/
let field = document.getElementById("field");
let ball = document.getElementById("ball");

let fieldWidth = field.clientWidth;
let fieldHeight = field.clientHeight;
let ballWidth = ball.clientWidth;
let ballHeight = ball.clientHeight;

ball.style.left = `${fieldWidth / 2 - ballWidth / 2}px`;
ball.style.top = `${fieldHeight / 2 - ballHeight / 2}px`;
