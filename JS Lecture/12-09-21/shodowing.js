// let globalVar = 10;
// let no = 100;

// for(let num = 0 ; num  < 3; num ++) {
//     console.log("Loop Var : "  + num);
//     console.log("Inside Loop : " + no); //0 1 2
// }

// let fullName = 'anuj';

// ['rahul', 'vinod', 'mahesh'].forEach((nameVal) => {
//     console.log("Element : " + nameVal);
//     console.log("Inside Block : " + fullName); //rahul vinod mahesh
// })

// function myFunc(input) {
//     let innerVar = input;
//    // console.log("Inner as Global Var :" , globalVar); //exepction should be 10 but printing 20
//     console.log("Inner :" , innerVar);
// }

// console.log("Outer : " ,globalVar);
// myFunc(20);

// class Question {
//     #_id;
//     #question;
//     constructor(id, question, answer) {
//         this.#_id = id;
//         this.#question = question;
//         this.answer = answer;
//     }   

//     get id() {
//         return this.#_id;
//     }

//     set id(x) {
//         this.#_id = x;
//     }

//     static choice = 10;
//     show(nam) {
//         return "This question is asked by  " + nam + "  " +  this.#_id + " => " +this.#question;
//     }

//     static getChoice() {
//         return "My Choice is - " + this.choice;
//     }
// }

// let ques = new Question(100, 'What is the full form of WWW?', 'World Widew Web');
// console.log(Question.choice);
// console.log(ques.show());
// console.log(ques._id);
// console.log(Question.getChoice())

class Result {
    constructor(input) {
        this.userInput = input;
        this.answer = 'World Wide Web'
    }

    checkAnswer() {
        console.log("Parent Class MEthod");
        return this.userInput === this.answer;
    }
}

class Question extends Result {
    constructor(id, question, input) {
        super(input);//Parent class Constuctor
        this.id = id;
        this.question = question;
    }

    checkAnswer() {
        console.log("Child Class MEthod");
        super.checkAnswer();
        return this.userInput === this.answer;
    }

    show() {
        return this.checkAnswer() ? 'Correct Answer' : 'Wrong Answer' //PArent Class Method
    }
}

let ques = new Question(100, 'What is the full form of WWW?', 'World Wide Web');
console.log(ques.show());
console.log(ques);