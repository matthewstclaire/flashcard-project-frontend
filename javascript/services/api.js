class API {
  static findCategories() {
    fetch('http://localhost:3000/categories')
      .then((resp) => resp.json())
      .then((categories) => {
        categories.forEach((category) => {
          const { id, topic, questions } = category;
          new Category(id, topic, questions);
        });
      });
  }

  sortQuestions(a, b) {
    const questA = a.body;
    const questB = b.body;
    if (questA < questB) {
      return -1;
    } else if (questA > questB) {
      return 1;
    } else {
      return 0;
    }
  }
  // static addQuestions() {
  //   fetch('http://localhost:3000/questions')
  //     .then((resp) => resp.json())
  //     .then((questions) =>
  //       questions.sort(function (a, b) {
  //         const questA = a.body;
  //         const questB = b.body;
  //         if (questA < questB) {
  //           return -1;
  //         } else if (questA > questB) {
  //           return 1;
  //         } else {
  //           return 0;
  //         }
  //       })
  //     );
  // .then((sorted) => {
  //   sorted.forEach((question) => {
  //     const id = question.id;
  //     const body = question.body;
  //     const answer = question.answer;
  //     const categoryId = question.category_id;
  //     new Question(id, body, answer, categoryId);
  //   });
  // });
  //}

  static createQuestion(e) {
    e.preventDefault();
    const sel = document.getElementById('topic');
    let opt = getSelectedOption(sel);
    const catId = opt.id - 1;
    const questionArray = Category.all[catId].questions;
    function getSelectedOption(sel) {
      let opt;
      for (let i = 0, len = sel.options.length; i < len; i++) {
        opt = sel.options[i];
        if (opt.selected === true) {
          break;
        }
      }
      return opt;
    }
    let data = {
      body: e.target.body.value,
      answer: e.target.answer.value,
    };
    fetch(`http://localhost:3000/categories/${opt.id}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((question) => {
        const { id, body, answer, categoryId } = question;
        const newQuestion = new Question(id, body, answer, categoryId);
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
        questionArray.unshift(newQuestion);
      });
  }
}
