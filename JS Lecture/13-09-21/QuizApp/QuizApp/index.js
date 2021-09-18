function Question(id, text, options, answer) {
    this.id = id;
    this.text = text;
    this.options = options;
    this.answer = answer;

    let checkAnswer = (choice) => {
        return this.answer === choice;
    }

    this.calculateScore = (choice) => {
        if(!checkAnswer(choice)) return -5;
        return 20;
    }
}

const questionsArr = [];

let question1 = new Question('ques1', 'What is the Capital of India?',  ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'], 'Delhi');
let question2 = new Question('ques2', 'What is the full form of WWW?',  ['World Wide Web', 'World Web Wide', 'World Weebsite Wide', 'Wide World Web'], 'World Wide Web');
let question3 = new Question('ques3', 'Who is the Captain of India Cricket?',  ['Virat Kohli', 'Jasprit Bumrah', 'Shikhra Dhawan', 'Rohit Sharma'], 'Virat Kohli');

questionsArr.push(question1);
questionsArr.push(question2);
questionsArr.push(question3);
