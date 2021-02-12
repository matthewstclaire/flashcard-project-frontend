class API {
  static findCategories() {
    fetch("http://localhost:3000/categories")
      .then((resp) => resp.json())
      .then((categories) => {
        categories.forEach((category) => {
          const { id, topic, questions } = category;
          new Category(id, topic, questions);
        });
      });
  }

  static addQuestions() {
    fetch("http://localhost:3000/questions")
      .then((resp) => resp.json())
      .then((questions) => {
        questions.forEach((question) => {
          const id = question.id;
          const body = question.body;
          const answer = question.answer;
          new Question(id, body, answer);
        });
      });
  }

  static createQuestion(e) {
    e.preventDefault();
    const sel = document.getElementById("topic");
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("Success:", data);
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

//js conditional if e.target.checked === true
//let category = addition
//strong params in category for body answer
