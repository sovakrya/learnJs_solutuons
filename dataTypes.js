/*
Можно ли добавить свойство строке?

Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
Как вы думаете, это сработает? Что выведется на экран?

Ответ: Выведется undefined
*/

/* 
Сумма пользовательских чисел

Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
*/

function sumNum() {
  const a = Number(prompt("a", 0));
  const b = Number(prompt("b", 0));

  return a + b;
}

/* 
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

function readNumber() {
  let askNum;
  do {
    askNum = prompt("Введите число", "");
  } while (!isFinite(askNum));
  {
    if (askNum === "" || askNum === null) {
      return null;
    }
  }

  return Number(askNum);
}

/*
 Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}

ответ: потому что i никогда не станет 10 из-за прибавления дробей
  */

/*
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

function random(min, max) {
  return min + Math.random() * (max - min);
}

/* 
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

/*
Сделать первый символ заглавным

Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

function ucFirst(str) {
  if (!str) {
    return str;
  }

  let res = str[0].toUpperCase() + str.slice(1);

  return res;
}

/*
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
  if (
    str.includes("viagra".toUpperCase()) !== -1 ||
    str.indexOf("XXX".toUpperCase()) !== 1
  ) {
    return true;
  }

  return false;
}

/*
  Усечение строки

Создайте функцию truncate(str, maxLength), которая проверяет длину строки str и, если она превосходит maxLength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str, maxLength) {
  let res = "";
  if (str.length > maxLength) {
    res = str.slice(0, maxLength - 1).padEnd(maxLength, "…");
    return res;
  }
  return str;
}
