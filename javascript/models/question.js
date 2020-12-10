class Question{
    constructor(id, body, answer){
        this.id = id;
        this.body = body;
        this.answer = answer;
        this.renderQuestion()
    }

renderQuestion() {
    const questionHolder = document.getElementById("answer-list")
    const questionContainer = document.createElement('div')
    questionContainer.dataset.id = this.id
    questionContainer.id = this.id
    questionContainer.classList.add = "question-show"
    questionContainer.innerHTML += this.questionHTML()
    questionHolder.appendChild(questionContainer)
    }

    questionHTML(){
    return `
    <div class="jumbotron">
    <h11 class="display-3">${this.body}</h11>
    <hr class="my-4">
    <button type ="button" class="btn btn-primary btn-lg" role="button" id="answer_button">Answer</button>
    <button type ="button" class="btn btn-primary btn-lg" role="button" id="next_question_button">Next Question</button>
    </div>
    <
        `
        }
    }








    // document.getElementById("answer_button).addEventListener('click', showAnswer(e) {
    //     return `
    //     <h2>${this.answer}</h2>
    //     `
    // });



        
        // <h2 class="question">${this.body}</h2>
        // <h3 class="answer">${this.answer}</h3>
