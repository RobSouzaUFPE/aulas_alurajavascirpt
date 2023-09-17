const primNum = 5;
const segNum = 10;

console.log(primNum === segNum);

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input2 = null;
let input3;

console.log(input); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false