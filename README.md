# JavaScript Style Guide.
*В данном руководстве описаны подходы по оформлению Java Script.*
***
**1. Избегайте однобуквенных названий.**

eslint: `id-length`

не надо так
``` js
function q() {
  // ...
}
```
надо так
``` js
function query() {
  // ...
}
```
**2. Всегда используйте let или const для объявления переменных.**

eslint: `no-undef, prefer-const`

не надо так
``` js
uperPower = new SuperPower();
```
надо так
``` js
const superPower = new SuperPower();
```
**3. Не объявляй неиспользуемые переменные.**

eslint: `no-unused-vars`

не надо так
``` js
let x = 0;
let y = 1; // Переменная не используется

function getX() {
    return x + 1;
}
```
надо так
``` js
let x = 0;

function getX() {
    return x + 1;
}
```
**4. Если ты не переназначаешь переменную, то используй const для ее объявления. И наоборот.**

eslint: `prefer-const, no-const-assign`

не надо так
``` js
var a = 1;
var b = 2;

var count = 1;
if (true) {
  count += 1;
}
```
надо так
``` js
const a = 1;
const b = 2;

let count = 1;
if (true) {
  count += 1;
}
```
**5. Используй шаблонные строки вместо конкатенации.**

eslint: `prefer-template, template-curly-spacing`

не надо так
``` js
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

function sayHi(name) {
  return `How are you, ${ name }?`;
}
```
надо так
``` js
function sayHi(name) {
  return `How are you, ${name}?`;
}
```
**6. Используй фигурные скобки для всех многострочных блоков.**

eslint: `nonblock-statement-body-position`

не надо так
``` js
if (test)
  return false;

function foo() { return false; }
```
надо так
``` js
if (test) return false;

function bar() {
  return false;
}
```
**7. Используй одинарные кавычки ' ' для строк.**

eslint: `quotes`

не надо так
``` js
const name = "Capt. Janeway";
```
надо так
``` js
const name = 'Capt. Janeway';
```
**8. Для объявления объекта использую фигурные скобки.**

eslint: `no-new-object`

не надо так
``` js
const item = new Object();
```
надо так
``` js
const item = {};
```
**9. Не дублируй названия ключей в объектах.**

 eslint: `no-dupe-keys`

не надо так
``` js
 var foo = {
     bar: "baz",
     bar: "qux"
 };

 var foo = {
     "bar": "baz",
     bar: "qux"
 };
```
надо так
``` js
 var foo = {
     bar: "baz",
     quxx: "qux"
 };
 ```
 **10. Используй квадратные скобки [ ] для объявления массивов.**
 
 eslint: `no-array-constructor`

не надо так
``` js
 const items = new Array();
```
надо так
``` js
 const items = [];
```
