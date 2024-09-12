/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/

function sumToRec(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToRec(n - 1);
}

function sumToCycle(n) {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    res += i;
  }

  return res;
}

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

/*
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
*/
function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

/* Напишите функцию fib(n) которая возвращает n-е число Фибоначчи. */
function fib(n) {
  let f1 = 1;
  let f2 = 1;

  for (let i = 3; i <= n; i++) {
    let sum = f1 + f2;
    f1 = f2;
    f2 = sum;
  }

  return f2;
}

/*
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

*/

function printListRec(list) {
  alert(list.value);

  if (list.next) {
    return printListRec(list.next);
  }
}

function printListCycle(list) {
  let a = list;
  while (a.next) {
    alert(list.value);
    a = a.next;
  }
}

// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(a) {
  function inSum(b) {
    return a + b;
  }

  return inSum;
}

/*
Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
*/

function inBetween(a, b) {
  return function (c) {
    return c >= a && c <= b;
  };
}

function inArray(arr) {
  return function (val) {
    return arr.includes(val);
  };
}

/*
 Сортировать по полю
важность: 5
У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];
Обычный способ был бы таким:

// по имени (Анна, Иван, Пётр)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Пётр, Анна, Иван)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, например вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть чтобы вместо функции мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого.
*/

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/

function printNumbers1(from, to) {
  let currentNum = from;

  let timer = setInterval(function () {
    alert(currentNum);

    if (currentNum === to) {
      clearInterval(timer);
    }

    currentNum++;
  }, 1000);
}

function printNumbers2(from, to) {
  let currentNum = from;

  setTimeout(function start() {
    alert(currentNum);

    if (currentNum < to) {
      setTimeout(start, 1000);
    }

    currentNum++;
  }, 1000);
}
