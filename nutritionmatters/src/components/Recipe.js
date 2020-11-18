
import React from 'react'
import RecipeDetails from './RecipeDetail'

 const Recipe = ({label, image, url, ingredients}) => {
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label}/>
      <a href={url} target="_blank"
      rel="noopener noreferrer">
        URL
      </a>
      <button>ingredients</button>
      <RecipeDetails ingredients={ingredients}/>
      </div>
  );
};


export default Recipe;