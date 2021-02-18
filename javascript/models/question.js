class Question {
  constructor(id, body, answer, categoryId) {
    this.id = id;
    this.body = body;
    this.answer = answer;
    this.categoryId = categoryId;
    this.renderQuestion();
  }

  renderQuestion() {
    const questionHolder = document.getElementById('answerList');
    const questionContainer = document.createElement('div');
    questionContainer.dataset.id = this.id;
    questionContainer.id = this.id;
    // debugger
    questionContainer.classList.add = 'questionShow';
    // debugger
    questionContainer.innerHTML += this.questionHTML();
    // debugger
    questionHolder.appendChild(questionContainer);
    // debugger
    document
      .getElementById(`answer_button-${this.id}`)
      .addEventListener('click', (e) => {
        this.addAnswer(e);
      });
    document
      .getElementById(`delete_button-${this.id}`)
      .addEventListener('click', (e) => {
        this.deleteQuestion(e);
      });
    // questionContainer.addEventListener('click', (e) => {
    //     if (e.target.id==="answer_button") this.addAnswer(e)
    //     if (e.target.id==="delete_button") this.deleteQuestion(e)
    //     });
  }

  questionHTML() {
    return `
        <div class="answerAll" id=${this.id} data-categoryId=${this.categoryId}>
        <h1>${this.body}</h1>
        <button type ="button" class="btn_cat" role="button" id="answer_button-${this.id}">Answer</button>
        <button type ="button" class="btn_cat" role="button" id="delete_button-${this.id}" class="delete">Delete Question</button>
        <div id="placeholderAnswer${this.id}"></div>
        </div>
            `;
  }

  addAnswer(e) {
    const node = document.createElement('H1');
    const textnode = document.createTextNode(`Answer: ${this.answer}`);
    node.appendChild(textnode);
    document.getElementById(`placeholderAnswer${this.id}`).appendChild(node);
  }

  deleteQuestion(e) {
    const question = e.target.parentElement;
    const id = parseInt(e.target.parentElement.id);
    const catId = parseInt(question.dataset.categoryid) - 1;
    const catArray = Category.all;
    const category = catArray[catId];
    // debugger;
    question.remove();
    fetch(`http://localhost:3000/questions/${id}`, {
      method: 'DELETE',
    }).then(() => {});
    const deleteQuestion = catArray[catId].questions.find((e) => e.id === id);
    const i = category.questions.indexOf(deleteQuestion);
    category.questions.splice(i, 1);
  }
}
