document.addEventListener('DOMContentLoaded', function () {
  API.findCategories();
  document
    .getElementById('questionForm')
    .addEventListener('submit', API.createQuestion);
});
