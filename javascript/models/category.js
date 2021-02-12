class Category {
  static all = [];
  constructor(id, topic, questions) {
    this.id = id;
    this.topic = topic;
    this.questions = questions.map((question) => {
      const id = question.id;
      const body = question.body;
      const answer = question.answer;
      return new Question(id, body, answer);
    });
    Category.all.push(this);
    this.renderCategory();
  }

  renderCategory() {
    const categoryContainer = document.getElementById("category-container");
    const categoryCard = document.createElement("div");
    // categoryCard.classList.add('category-card')
    categoryCard.id = this.id;
    categoryCard.dataset.id = this.id;
    // categoryCard.innerHTML += this.categoryHTML()
    categoryContainer.appendChild(categoryCard);
    // debugger
    document.getElementById(`${this.topic}`).addEventListener("click", (e) => {
      if (this.topic === "Addition") {
        this.renderAdd(e);
      }
      if (e.target.id === "Subtraction") {
        this.renderSub(e);
      }
      if (e.target.id === "Multiplication") {
        this.renderMult(e);
      }
      if (e.target.id === "Division") {
        this.renderDivi(e);
      }
    });
  }

  renderAdd(e) {
    const el = document.getElementById("answerList");
    const addCard = document.createElement("div");
    el.innerHTML = "";
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }

  renderSub(e) {
    const el = document.getElementById("answerList");
    const addCard = document.createElement("div");
    el.innerHTML = "";
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }

  renderMult(e) {
    const el = document.getElementById("answerList");
    const addCard = document.createElement("div");
    el.innerHTML = "";
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }

  renderDivi(e) {
    const el = document.getElementById("answerList");
    const addCard = document.createElement("div");
    el.innerHTML = "";
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }
}
