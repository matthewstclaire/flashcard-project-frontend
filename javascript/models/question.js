class Question {
  constructor(id, body, answer) {
    this.id = id;
    this.body = body;
    this.answer = answer;
    this.renderQuestion();
  }

  renderQuestion() {
    const questionHolder = document.getElementById("answerList");
    const questionContainer = document.createElement("div");
    questionContainer.dataset.id = this.id;
    questionContainer.id = this.id;
    // debugger
    questionContainer.classList.add = "questionShow";
    // debugger
    questionContainer.innerHTML += this.questionHTML();
    // debugger
    questionHolder.appendChild(questionContainer);
    // debugger
    document
      .getElementById(`answer_button-${this.id}`)
      .addEventListener("click", (e) => {
        this.addAnswer(e);
      });
    document
      .getElementById(`delete_button-${this.id}`)
      .addEventListener("click", (e) => {
        this.deleteQuestion(e);
      });
    // questionContainer.addEventListener('click', (e) => {
    //     if (e.target.id==="answer_button") this.addAnswer(e)
    //     if (e.target.id==="delete_button") this.deleteQuestion(e)
    //     });
  }

  questionHTML() {
    return `
        <div class="jumbotron" id=${this.id}>
        <h11>${this.body}</h11>
        <button type ="button" class="btn btn-primary btn-lg" role="button" id="answer_button-${this.id}">Answer</button>
        <button type ="button" class="btn btn-primary btn-lg" role="button" id="delete_button-${this.id}" class="delete">Delete Question</button>
        <div id="placeholderAnswer${this.id}"></div>
        </div>
            `;
  }

  addAnswer(e) {
    const node = document.createElement("H11");
    const textnode = document.createTextNode(`${this.answer}`);
    node.appendChild(textnode);
    document.getElementById(`placeholderAnswer${this.id}`).appendChild(node);
  }

  deleteQuestion(e) {
    const question = e.target.parentElement;
    const id = parseInt(e.target.parentElement.id);
    question.remove();
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "DELETE",
    }).then(() => {
      debugger;
    });
    // .then(() => {
    //   debugger;
    //   document
    //     .getElementById("answerList")
    //     .removeChild(document.getElementById(id));
    // });
  }
}
