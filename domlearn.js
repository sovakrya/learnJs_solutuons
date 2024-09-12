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
