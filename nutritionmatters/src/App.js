import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from './components/Recipe';

const App = () =>{
const APP_ID = "48a1943a";
const APP_KEY = "4d91ea04b25be1b008370b4b06638440";


const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState(' ');
const [query, setQuery] = useState('chicken');

useEffect (() => {
  getRecipes ();
  
}, [query]);

const getRecipes = async () =>{
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);

};

const updateSearch = e => {
setSearch(e.target.value);
};

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
  setSearch('');
}

  return (
    <div className="App">
      <h1>Nutrition Matters</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}  />
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        label={recipe.recipe.label}
        image={recipe.recipe.image}
        url={recipe.recipe.url}
        ingredients={recipe.recipe.ingredients}

        />

      ))};

      </div>
    </div>
  );
}

export default App;
