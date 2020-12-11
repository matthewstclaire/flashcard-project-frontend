class API {
    static addQuestions(){
        fetch("http://localhost:3000/questions")
        .then(resp=>resp.json())
        .then(questions=>{
            questions.forEach(question=>{
                const id = question.id;
                const body = question.body;
                const answer = question.answer;
                new Question(id, body, answer)
            })
        })
    }

    static createQuestion(e){
       if (e.target.checked === true){
              

       } else if {


       } else if {


       } else {


       }
        e.preventDefault()
        let data = {
            'body': e.target.question.value,
            'answer': e.target.answer.value
        }

    fetch('http://localhost:3000/categories/${}', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
    }
}

//js conditional if e.target.checked === true
//let category = addition
//strong params in category for body answer
