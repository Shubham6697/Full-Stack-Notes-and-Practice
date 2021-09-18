function myFunc(arg1, arg2, arg3) {
    //console.log("Function Invoked");
    //console.log("Values in Arguments - " + arg1, arg2, arg3);
}

myFunc(1);

function sum(a, b) {
    return a + b;
}

sum = (a, b) => { return a + b }; // Some Benefits- this binding inside arrow functions

let addition = sum(true, 'anuj');
//console.log(addition);

//console.log('Anuj' + 5 +2) // If First element is string, it will treat all other elements as string
// if first and second element is number, it will add and accordingly it will change
// "'"
// arg1= 1(Number), arg2 and arg3 = undefined
//JS - you dont need to specify any data type - dynamic typing
//"string" -> String type, 4 -> Number value, false -> Boolean type
// Java -> if any method takes 2 arguments, so while calling it is mandatory to apss 2 args
// but in JS its not require, thats why it is not strict language

// Java - if we want to return something from function, you need to specify the return type in java
// JS - its not required
//------------------------------------------------------------------------------------------------------

a = 10; //declaration part
//console.log(a);
var a; //initialization part

var b;
//console.log(b);
b = 20; //declaration part

// test = 'Anuj';
// console.log(test);
// const name;
// hoisting generally takes place for var,=> same for const

//console.log(myFunc2()); //hositing
// global scope or function scope

function myFunc2() {
    z = 10;
    //console.log(z);
    var z;
    return "This is hoisted function";
}

//creation phase
//global object
//this
// a= undefined

//global object = windows/global
//this = windows
// a =10 // functional context
//------------------------------------------------------------------------------------------

// console.log(isNaN(4));
// console.log(isNaN('anuj'));
// console.log(isNaN(false)); //0
// console.log(isNaN(true)); //1
// console.log(isNaN(undefined));
// console.log(isNaN(null));
// console.log(isNaN("45")); //it tries to convert into number - if it fails it gives true else false
//console.log(isNaN(BigInt(32323232323232)));

//Wrapper Classe - Integer can be null but int can not be null
//Number (Primitive) -> null is considered to be a part of Primitive
//---------------------------------------------------------------------------------------------

//Mobile is an object
// Properties - length, width, weight, camersize, memory
// Receive call, end call, dial call, listrn spong, click imgae
// Object === Container for properties, for methods

//const - it will not reinitialized
// const mobile = {
//     model : 'iphone', 
//     memory: 128,
//     camera : '8 mega pixels',
//     screen: '6.5inches',
//     getScreenAndMemory : function() {
//         return "Screen Size is "+ this.screen + " and Memory is - " +this.memory;
//     }
// };

// //how to access properties and functions of object
// let model = mobile.model; //to access any property object.{propertyName}
// let camera = mobile['camera']; //to access object[property]
// let output = mobile.getScreenAndMemory();
// console.log(output);
// console.log(camera);
// console.log(model);

// //how to update/add new properties
// mobile.memory = '64';
// console.log(mobile.memory);

// mobile.color = 'black';
// mobile['ram'] = '6 Gb';
// console.log(mobile.color);

// delete mobile.memory;
// console.log(mobile);
//------------------------------------------------------------------------------------------
//how to create an array
const arr = ['audi', 'bmw', 'maruti']; //recommended 

const arr2 = [];
arr2[0] = 'verna';
arr2[1] = 'i20';
arr2[2] = 'i10';

const arr3 = new Array('kia', 45, 'seltos'); //this is not preferrable. its low

//How to access array
//console.log(arr[1]);
//console.log(arr3);

//how to calculate the length of array
//console.log(arr3.length);

//push() - array to add new elements AT LAST
arr.push('hyundai');
//console.log(arr);

//adding using indexes at index 3, at index 4 = undefined
arr2[5] = 'santafe';
//console.log(arr2);

//new Array()
//const arr4 = [100]; //create arr with value 100
//const arr5 = new Array(100); // create blank array of 100 elements

//toString() 
//join() - will behave in similar way as toString()  but you can pass seperator
console.log(arr.join("-"));

//pop() - removes the element - from last
//console.log(arr);
let result = arr.pop();
//console.log(arr);

//shift() -> removes the element but first
arr.shift(); //return the element which got removed
//console.log(arr);

//unshift() - add new element at start
arr.unshift("hyndai");// return new array length
//console.log(arr);

//splice() - add new elements into array at any specific index
console.log(arr);
arr.splice(1, 1, 'tata', 'chevrolet'); //1 is index, 0 no of elements to delete, elements to add
console.log(arr);

//arr.splice(2,1);
console.log(arr);

//concat()
//const arr5 = arr.concat(arr2, arr3);
//console.log(arr5);
arr.concat("myName");

//slice() - rcreates any array from the existing array
console.log(arr);
const newArr = arr.slice(1, 3); //if one index -  it will slice indec to ;last
// if 2 indexes - then first and last index it will pick
console.log(newArr);
