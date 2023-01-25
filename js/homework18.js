'use strict'

// Упражнение 1

let a = '100px';
let b = '323px';

let result= (parseInt (a))+(parseInt (b));
console.log(result)

// Упражнение 2

console.log(Math.max(10, -45, 102, 36, 12, 0, -1));

// Упражнение 3

let c = 123.3399;
console.log(Math.round(c))

let d = 0.111;
console.log(Math.ceil(d))

let e = 45.333333;
console.log(e.toFixed(1))

let f = 3;
console.log(f ** 5)

let g = 4e14;
console.log(g)

let h =1  !=1;
h = !!1;
console.log(h)

// Упражнение 4

console.log(0.1 + 0.2 === 0.3); // Вернёт false, потому,что в JS 0.1 + 0.2 равно 0.30000000000000004
