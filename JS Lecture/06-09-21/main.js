//forEach

const arr = [4, 5, 28, 25, 5];

arr.forEach((element) => {
    //console.log("Value in : " + element);    
});

//filter -> if you want filter some of the values from array
// filter elements greater than 9 -> 10, 12
// filter returns the new array with the required filtered elements
const filteredArr = arr.filter((element) => {
    return element > 9;
})
//console.log("Filtered Array : ", filteredArr);

//Map -> by iterating each element, you can modify the things
const mappedArr = arr.map((element) => {
    return element + 2;
});
//console.log("Mapped Array :  ", mappedArr);

//find - it will return whether element present or not at first index
const isFound = arr.find((element) => {
    return element > 20
});
//console.log("Find Value : ", isFound);

//indexOf() - if you want to find any elemnt position in array
const index = arr.indexOf(25);
//console.log("Index: ", index);

//lastIndexOf() - one element occuring multiple timesin array - last index
const lastIndex = arr.lastIndexOf(5);
//console.log(lastIndex);

//reduce() -> i want to add all elements - forEach, for
//[4, 5, 28, 25, 5];
let sum = arr.reduce((sum, value) => {
    return sum + value
}, []);

//IN your web application, list of objects -> group those list objects based on some parameter
// city -> gurgaon (based on city) ->  reduce will resolve that use case
//sum = 0
// sum = 0 + 4 = 4
// sum = 4 + 5 = 9 .... and so on
//console.log(sum);
//------------------------------------------------------------------------------------------------

let a = 5; 
let b = a;
//console.log(a, b);

b = 7;
//console.log(a, b);

let obj = {name : 'Anuj'};
let obj2 = obj;

//console.log(obj, obj2);
obj2.name = "Rahul";

//console.log(obj, obj2);

//do() while , while(cond) {}, for(i , i < 10, i)->
// for/in, for/of -> 
// for/of -> arrays
// for/in -> objects (properties)

const array = [10, 20, 30, 40, 50];

for(let val of array) {
    //console.log(val); //0, 1, 2, 3, 4 - indexes
}

const object = { id:10, name: 'anuj', city:'gurgaon'};

for(let prop in object) {
    //console.log(prop);
    //console.log(object[prop]);
}
//-------------------------------------------------------------------------
console.log(this);
this.name = 'Anuj';
console.log(this);//global

function myFunc() {
    console.log(this); //function -> global (function being called by global context)
}

myFunc();

var student = {
    id: 10,
    firstname: 'anuj',
    lastname: 'garg',
    getFullName : function () {
        return this.firstname + " " + this.lastname
    },
    greetMessage : function (message) {
        return "hey " + this.firstname + " - this is your message - " + message
    }
}

console.log(student.getFullName()); //anuj garg - this === student instead of global
//this value changes respective to its calling

const student2 = {firstname: 'rahul', lastname: 'roy'};

//call() -> when you use call, you can pass the parameters normally
console.log(student.getFullName.call(student2));
console.log(student.greetMessage.call(student2, 'How are you'));

//apply() -> when you use applu, you have to pass params as array
console.log(student.greetMessage.apply(student2, ['How is your day?']));

//bind() -> it returns the new function with specified object
var myMethod = student.greetMessage.bind(student2);
myMethod();