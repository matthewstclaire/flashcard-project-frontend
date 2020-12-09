class Question{
    constructor(id, body, answer){
        this.id = id;
        this.body = body;
        this.answer = answer;
        this.renderQuestion
    }

renderQuestion() {
    const questionHolder = document.getElementById("answer-list")
    const questionContainer = document.createElement('div')
    questionContainer.dataset.id = this.id
    questionContainer.classList.add = "question-show"
    questionContainer.innerHTML += this.questionHTML()
    questionHolder.appendChild(showContainer)
    })




    questionHTML(){
    return `
        <h2 class="question">${this.body}</h2>
        <h3 class="answer">${this.answer}</h3>
        `
        }
    }
//render method that will create div append to the page add classes and ID's to HTML
