const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const recipeContainer = document.querySelector('.recipe-container');
let searchQuery = '';


// get recipes from API
async function fetchAPI() {
  const baseURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
   const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.meals);
  console.log(data);
}


//takes API data and dynamically generate HTML content from the results
function generateHTML(results) {
    let generatedHTML = '';
  // map() to loop over results
  results.map(result => {
    // generate HTML recipe div
    //link to original recipe
    generatedHTML +=
      `
      <div class="item">
        <img class="food-pic" src="${result.strMealThumb}" alt="${result.strMeal}" >
        <div class="flex-container">
          <h1 class="recipe-title" onclick="openRecipe('${result.strSource}')">${result.strMeal}</h1>
          <button type="button" class="view-btn" onclick="openRecipe('${result.strSource}')">View Recipe</button>
        </div>
        <p class="dietaries">Cuisine: ${result.strArea}</p>
        <p class="category">Category: ${result.strCategory}</p>
      </div>
      `;
  });
  recipeContainer.innerHTML = generatedHTML;
}

//prep search and fetch data
async function handleSearch() {
    searchQuery = searchBox.value.trim();
    await fetchAPI();
  }

// search on pressing enter
function handleEnter(event) {
    // if key pressed is enter then proceed
        if (event.key === 'Enter') {
            event.preventDefault();
            //enter not working - flashing screen - fix
            handleSearch();
        }
    }
    
// event listeners
document.addEventListener('keydown', handleEnter);

searchBtn.addEventListener('click', handleSearch);

//open link to recipe in new tab (vuew recipe btn)
function openRecipe(url) {
    window.open(url, '_blank');
  }

//open link to recipe in new tab (recipe title)
const viewButton = document.querySelector('.view-btn');

  viewButton.addEventListener('click', () => {
    openRecipe(result.strSource);
  });
