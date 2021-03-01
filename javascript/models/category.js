class Category {
  static all = [];
  constructor(id, topic, questions) {
    this.id = id;
    this.topic = topic;
    this.questions = questions.map((question) => {
      const id = question.id;
      const body = question.body;
      const answer = question.answer;
      const categoryId = question.category_id;
      return new Question(id, body, answer, categoryId);
    });
    Category.all.push(this);
    for (let i = 0, category = Category.all.length; i <= category; i++) {
      const categoryThing = Category.all[i].questions;
      for (let x = 0, questions = categoryThing.length; x <= questions; x++) {
        const sortedQuestion = categoryThing[x];
        debugger;
      }

      categoryThing.questions.sort(function (a, b) {
        questions.indexOf(a.body) - questions.indexOf(b.body);
      });
    }
    // const questA = a.body;
    // const questB = b.body;
    if (questA < questB) {
      return -1;
    } else if (questA > questB) {
      return 1;
    } else {
      return 0;
    }
    // });
    this.renderCategory();
  }

  //   this.questions.sort(function(a, b){
  //     if (a < b) {
  //         return 1;
  //     } else if (a > b) {
  // return -1
  // } return 0
  // });

  // sortCategory() {
  //   debugger;
  //   for (let i = 0, quest = this.questions.length; i < quest; i++ {
  //     (let x = 0, quest = this.questions.length; x < quest; x++)
  //   })
  //   this.body.sort(function (a, b) {
  //     if (a > b) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
  // }

  renderCategory() {
    const categoryContainer = document.getElementById('category-container');
    const categoryCard = document.createElement('div');
    categoryCard.id = this.id;
    categoryCard.dataset.id = this.id;
    categoryContainer.appendChild(categoryCard);
    document.getElementById(`${this.topic}`).addEventListener('click', (e) => {
      if (this.topic === 'Addition') {
        this.renderAdd(e);
      }
      if (e.target.id === 'Subtraction') {
        this.renderSub(e);
      }
      if (e.target.id === 'Multiplication') {
        this.renderMult(e);
      }
      if (e.target.id === 'Division') {
        this.renderDivi(e);
      }
    });
  }

  renderAdd(e) {
    const el = document.getElementById('answerList');
    const addCard = document.createElement('div');
    el.innerHTML = '';
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    // const sortedQuestions = this.sortCategory();
    // console.log(sortedQuestions);
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }

  renderSub(e) {
    const el = document.getElementById('answerList');
    const addCard = document.createElement('div');
    el.innerHTML = '';
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }

  renderMult(e) {
    const el = document.getElementById('answerList');
    const addCard = document.createElement('div');
    el.innerHTML = '';
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }

  renderDivi(e) {
    const el = document.getElementById('answerList');
    const addCard = document.createElement('div');
    el.innerHTML = '';
    addCard.dataset.id = this.id;
    addCard.id = this.id;
    this.questions.forEach((element) => {
      element.renderQuestion();
    });
  }
}
