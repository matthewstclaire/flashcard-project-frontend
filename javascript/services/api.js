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

  static addQuestions() {
    fetch('http://localhost:3000/questions')
      .then((resp) => resp.json())
      .then((questions) => {
        questions.forEach((question) => {
          const id = question.id;
          const body = question.body;
          const answer = question.answer;
          const categoryId = question.category_id;
          new Question(id, body, answer, categoryId);
        });
      });
  }

  static createQuestion(e) {
    e.preventDefault();
    const sel = document.getElementById('topic');
    let opt = getSelectedOption(sel);
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
        const { body, answer } = question;
        new Question(body, answer);
        document.getElementById('question').value = '';
        document.getElementById('answer').value = '';
      });

    const catId = opt.id - 1;
    const questionArray = Category.all[catId].questions;
    questionArray.unshift(newQuestion);
  }
}

// deleteQuestion(e) {
//   const question = e.target.parentElement;
//   const id = parseInt(e.target.parentElement.id);
//   const catId = parseInt(question.dataset.categoryid) - 1;
//   const catArray = Category.all;
//   const category = catArray[catId];
//   // debugger;
//   question.remove();
//   fetch(`http://localhost:3000/questions/${id}`, {
//     method: 'DELETE',
//   }).then(() => {});
//   const deleteQuestion = catArray[catId].questions.find((e) => e.id === id);
//   const i = category.questions.indexOf(deleteQuestion);
//   category.questions.splice(i, 1);
// }
