let score = 0;
let startIndex = 0;

function startQuiz(btn) {
    btn.disabled = 'true';
    document.getElementById("nextQues").style.display = 'inline-block';

    let question = questionsArr[startIndex];

    const mySection = document.getElementById("questionSection");

    const qDiv = getQuestionDiv(question, startIndex);
    mySection.appendChild(qDiv);
}

function nextQuestion(btn) {
    startIndex++;
    let question = questionsArr[startIndex];

    const mySection = document.getElementById("questionSection");

    const qDiv = getQuestionDiv(question, startIndex);
    mySection.appendChild(qDiv);
}

function getQuestionDiv(question, startIndex) {
    const myDiv = document.createElement('div');
    myDiv.setAttribute("id", question.id);
    myDiv.setAttribute("class", "question");

    const qHead = getQuestionHeading(question.text);
    const qOptions = getQuestionOptions(question.options, startIndex);
    const qButton = getQuestionButton(startIndex);
    myDiv.appendChild(qHead);
    myDiv.appendChild(qOptions);
    myDiv.appendChild(qButton);
    return myDiv;
}

function getQuestionButton(startIndex) {
    const qBtn = document.createElement("button");
    qBtn.setAttribute("class", "btn btn-primary");
    qBtn.setAttribute("onclick", "checkAnswer(this)");
    qBtn.innerHTML = "Check Answer";
    return qBtn;
}

function getQuestionHeading(text) {
    const qHead = document.createElement('h4');
    qHead.innerHTML = text;
    return qHead;
}

function checkAnswer(btn) {
    const selectedOptions = document.forms['qForm'+startIndex]["qRadio"+startIndex];

    const selectedValue = selectedOptions.value;

    let isConfirmed = confirm("Are you Sure?");

    if(isConfirmed) {
        let quesObj = questionsArr[startIndex];
        btn.disabled = 'true';
        let quesScore = quesObj.calculateScore(selectedValue);

        for(let i = 0; i < selectedOptions.length ; i++) {
            selectedOptions[i].disabled  ='true';
        }

        const myDiv = document.getElementById(quesObj.id);
        if(quesScore > 0) {
            myDiv.style.border = '3px solid green';
            myDiv.style.backgroundColor = 'lightgreen';
        } else {
            myDiv.style.border = '3px solid red';
            myDiv.style.backgroundColor = 'lightcoral';
        }

        score += quesScore;
        document.getElementById("myScore").innerHTML = score;
    }
}

function getQuestionOptions(options, startIndex) {
    const qForm = document.createElement('form');
    qForm.setAttribute("name", "qForm"+startIndex);
    qForm.setAttribute("onsubmit", "return false");

    const qList = document.createElement('ul');
    qList.style.listStyle = 'none';

    options.forEach((opt) => {
        const qItem = document.createElement("li");
        
        const qRadio = document.createElement('input');
        qRadio.setAttribute("type", "radio");
        qRadio.setAttribute("name", "qRadio"+startIndex);
        qRadio.setAttribute("value", opt);

        const qLabel = document.createElement('label');
        qLabel.innerHTML = opt;
        qLabel.style.marginLeft = '10px';

        qItem.appendChild(qRadio);
        qItem.appendChild(qLabel);

        qList.appendChild(qItem);
    })

    qForm.appendChild(qList);
    return qForm;
}