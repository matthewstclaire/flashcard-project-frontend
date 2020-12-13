class Question{
    constructor(id, body, answer){
        this.id = id;
        this.body = body;
        this.answer = answer;
        this.renderQuestion()
    }



    renderQuestion() {
        const questionHolder = document.getElementById("answerList")
        const questionContainer = document.createElement('div')
        questionContainer.dataset.id = this.id
        questionContainer.id = this.id
        // debugger
        questionContainer.classList.add = ('questionShow')
        // debugger
        questionContainer.innerHTML += this.questionHTML()
        // debugger
        questionHolder.appendChild(questionContainer)
        // debugger
        questionContainer.addEventListener('click', (e) => {
            if (e.target.id==="answer_button") this.addAnswer(e)
            if (e.target.id==="delete_button") this.deleteQuestion(e)
            });
        }

    questionHTML(){
        return `
        <h11 class="display-3">${this.body}</h11>
        <hr class="my-4">
        <button type ="button" class="btn btn-primary btn-lg" role="button" id="answer_button">Answer</button>
        <button type ="button" class="btn btn-primary btn-lg" role="button" id="next_question_button">Next Question</button>
        <button type ="button" class="btn btn-primary btn-lg" role="button" id="delete_button" class="delete">Delete Question</button>
        <div id="placeholderAnswer"></div>
        </div>
            `
    }

    addAnswer(e){
        const node = document.createElement("H11");
        const textnode = document.createTextNode(`${this.answer}`);
        node.appendChild(textnode);
        document.getElementById('placeholderAnswer').appendChild(node);
        }

    deleteQuestion(e){
        const id = parseInt(e.target.parentElement.id)
        fetch(`http://localhost:3000/questions/${id}`,{ 
        method: 'DELETE'
            })
        .then(() => {
            document.getElementById("answerList").removeChild(document.getElementById(id))
            })
        }
}
