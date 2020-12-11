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
       
        e.preventDefault()
        let data = {
            'body': e.target.question.value,
            'answer': e.target.answer.value
        }

    fetch('http://localhost:3000/questions', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
    }
}
