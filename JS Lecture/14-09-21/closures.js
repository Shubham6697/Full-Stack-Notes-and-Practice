function outer() {
    const a = 10;
    return function inner() {
        const b = a+10;
        return b;
    }
}

const result = outer();
console.log(result());

function print() {
    setInterval(() => {
        console.log("Newton School");
    }, 500);
}

print();

class Question {
    constructor(id, text, options, answer) {
        this.id = id;
        this.text = text;
        this.options = options;
        this.answer = answer;
    }

    isCheckAnswer = () => {

    }

    calculateScore = () => {

    }
}

class CricketQuestion extends Question {
    constructor(id, text, options, answer) {
        super(id, text, options, answer);
        this.type = 'Cricket'
    }

    calculateScore = () => {
        if(true)  return 20;
    }
}

class GeographyQuestion extends Question {
    constructor(id, text, options, answer) {
        super(id, text, options, answer);
        this.type = 'Geo'
    }

    calculateScore = () => {
        if(true)  return 40;
    }
}

let ques1 = new CricketQuestion();
let ques2 = new GeographyQuestion();

class test {
    show() {
        console.log("this is Test Class");
    }
}

class test2 extends test {
    show() {
        super.show();
        console.log("This is Test 2 child claass");
    }
}

class test3 extends test2 {
    show() {
        console.log("This sis my third class");
        super.show();
    }
}

let t = new test3();
t.show1();