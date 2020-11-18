import React from 'react'

 const Recipe = ({label, image, url, ingredients}) => {
  return (
    <div>
      <h2>{label}</h2>
      <img src={image} alt={label}/>
      <a href={url} target="_blank"
      rel="noopener noreferrer">
        URL
      </a>
      <button>ingredients</button>

      
      
    </div>
  );
};


export default Recipe;
