document.addEventListener("DOMContentLoaded", function(){
    // API.addQuestions()
    API.findCategories()
    document.getElementById('questionForm').addEventListener('submit', API.createQuestion)
})

// function disableClick() {
//     // Disable the button
//     document.getElementById("checkbox1").disabled = true;
  
//     // Do your processing here
//     alert("You can only click one category!");
  
//     // Re-enable after processing if you want
// }
