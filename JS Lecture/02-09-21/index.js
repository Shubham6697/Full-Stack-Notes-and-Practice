//var
//let
//const - similar to let (in case of scope)
//let a = 4; //global scope
// var is global scope
// var can be redefined
// var can override content because of its global scope
// alternative for var (beacuse of drawback)

//var limit = 10;

//const z = 'anuj'; //constants in JS
//z = 'test'; //not possible in case of const

//a = 6; //reassignment
//a =8; //redefining (which is not possible incase of let)

// if(limit> 5) {
//     let a = 10; //It is having block scope and it will considered seperate variblae
// }

//console.log(a);
//-----------------------------------------------------------------------------------------
let test = [];
//console.log(typeof test);

test = 'string';
test = 4;
test = {};

//Object, Array - Object (dynamic typing)
// let test = 'string';

let z = true;
let x = 'true';

console.log(z == x); //type check should be there
// == vs === (== => it checks for content only), (=== => it checks for type)
// ? : condition ? <execute> : <execute if false>
//ternary operator

let result = z == x ? 'Both are equal' : 'both are not equal';
console.log(result);

//3 power 2
var res = 3 ** 2; //Math.pow(3,2);
console.log(res);

//Swap 2 numbers without using temp variable
// Assignment
// Implement FizzBuzz in JS???? 3 -fizz, 5 -buzz, 3,5 - fizzbuzz, number



