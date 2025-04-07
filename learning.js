// ------------------------------------------
// Переменная "arguments"
// Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.

// function showName() {
//     alert( arguments.length );
//     alert( arguments[0] );
//     alert( arguments[1] );
  
//     // Объект arguments можно перебирать
//     // for (let arg of arguments) alert(arg);
//   }
  
//   // Вывод: 2, Юлий, Цезарь
//   showName("Юлий", "Цезарь");
  
//   // Вывод: 1, Илья, undefined (второго аргумента нет)

// Стрелочные функции не имеют "arguments"
// ----------------------------------

// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4

// function sum(a){
//     return function(b){
//         return a + b
//     }
// }
// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// --------------------------------------------

// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// const arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(a, b){
//     return function(el){
//         return el >= a && el <= b
//     }
// }
// function inArray(arr){
//     return function(el){
//         return arr.includes(el)
//     }
// }

// ----------------------------------------------

// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "Иван", age: 20, surname: "Иванов" },
//   { name: "Пётр", age: 18, surname: "Петров" },
//   { name: "Анна", age: 19, surname: "Каренина" }
// ];
// Обычный способ был бы таким:

// по имени (Анна, Иван, Пётр)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Пётр, Анна, Иван)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

// function byField(field){
//     return function(a,b){
//         return a[field] > b[field] ? 1 : -1
//     }
// }

// console.log(users);
// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));


// ---------------------------------------------------

// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

// function makeCounter() {
//     let count = 0;
//     function counter(){
//         return count++
//       }
//     counter.set = (x) => count = x;
//     counter.decrease = () => count--;
//   return counter
//   }
  
//   let counter = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   counter.set(10); // установить новое значение счётчика
  
//   alert( counter() ); // 10
  
//   counter.decrease(); // уменьшить значение счётчика на 1
  
//   alert( counter() ); // 10 (вместо 11)
  

// -----------------------------------------


// Сумма с произвольным количеством скобок
// важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

// function sum (a){
//     let sum = a;
//     function res(b){
//         sum += b
//         return res
//     }
//     res.toString = () => sum;
//     // res.valueOf  = () => sum
//     return res
// }
// // alert(sum(2)(4)(4) == 10);
// console.log(sum(2)(4)(4));


// ------------------------------------------


// let timerId = setInterval(() => alert("ничего не происходит"), 2000);
// setTimeout(() => {
//     clearInterval(timerId)
//     alert('la finito')
// }, 5500)
// alert(timerId()); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId); // тот же идентификатор (не принимает значение null после отмены)

/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/

// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//   if (start + 100 < Date.now()) alert(times.join('\n')); // показываем задержку через 100 мс
  
//   else {
//     times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова
//     setTimeout(run); // если нужно ещё запланировать
//   }
// });


// ----------------------------------


// Вывод каждую секунду
// важность: 5
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

// const start = Date.now();
// console.log(start);

// function printNumbers(from, to){
//     let current = from;
//     let timerId = setInterval(() => {
//         alert(current)
//         if(current == to) clearInterval(timerId)
//         current++
//     }, 1000)
// }

// printNumbers(5, 8)


// function printNumbers(from, to){
//     let current = from;
//     setTimeout(function print() {
//         alert(current)
//         if(current < to) {
//         setTimeout(print, 1000)
//         }
//         current++
//     }, 1000)

// }

// printNumbers(5, 8)


// Что покажет setTimeout?
// важность: 5
// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }













