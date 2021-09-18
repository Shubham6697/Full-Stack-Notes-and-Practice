function myFunc(fn) {
    console.log("Normal Function Execution");
    let result = 10;
    fn(result);
}

function myFunc2(res) {
    console.log("Second Function");
    return res + 10;
}

let res = myFunc(myFunc2);
//let sum = myFunc2(res);
//callbacks
// const arr = [10, 20, 30];

// arr.map(mappedFunc);

// function mappedFunc(element) {
// }

// arr.map(function(element) {
// })

// arr.map((element) => {})//callback function - arrow funcion)
// // you are performing API call which is async
// // It will be invoked for sure- 

// // callbacks -> instead of passing function seperately, we will pass function as argument
//IIFE -> 
(function() {
   //any logic can be implemented here now
})();


let myVar = setTimeout(function() {
    console.log("Hello")
}, 1000);
console.log(myVar);
