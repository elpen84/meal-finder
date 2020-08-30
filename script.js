const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEL = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const single_mealEl = document.getElementById("single-meal");

//search meal and fetch from api
function searchMeal(e) {
  e.preventDefault();
  //clear single meal
  single_mealEl.innerHTML = "";

  //get Search term
  const term = search.value;

  //check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } else {
    alert("please enter a search term");
  }
}

//event listeners
submit.addEventListener("submit", searchMeal);
