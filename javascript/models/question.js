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
    questionContainer.addEventListener('click', (e) => {
        if (e.target.id==="answer_button") this.addAnswer(e)
        });
    }

    questionHTML(){
    return `
    <div class="jumbotron">
    <h11 class="display-3">${this.body}</h11>
    <hr class="my-4">
    <button type ="button" class="btn btn-primary btn-lg" role="button" id="answer_button">Answer</button>
    <button type ="button" class="btn btn-primary btn-lg" role="button" id="next_question_button">Next Question</button>
    <button type ="button" class="btn btn-primary btn-lg" role="button" id="delete_button">Delete Question</button>
    <div id="placeholder_answer"></div>
    </div>
        `
        }

    addAnswer(e){
    const node = document.createElement("H11");                 // Create a <li> node
    const textnode = document.createTextNode(`${this.answer}`);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("placeholder_answer").appendChild(node);     // Append <li> to <ul> with id="myList"
        }

    // questionSubmission(){
    //     const formAdd = document.getElementById('questionForm');   
    //     formAdd.addEventListener("submit",  => {
    //         debugger
            
    //         });
    //     }    

   }






    // document.getElementById("answer_button).addEventListener('click', function(e) {
    //     const showAnswer = document.getElementsByClassName('placeholder_answer');
    //     showAnswer.appendChild()




    // 
    // });



        
        // <h2 class="question">${this.body}</h2>
        // <h3 class="answer">${this.answer}</h3>
