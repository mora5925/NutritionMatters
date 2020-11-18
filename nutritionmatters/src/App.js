import React from 'react';
import './App.css';


const App = () =>{
  const APP_ID = "48a1943a";
  const APP_KEY = "4d91ea04b25be1b008370b4b06638440";

function App() {
  return (
    <div className="App">
     <h1>Nutrition Matters</h1>
     <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}  />
        <button className="search-button" type="submit">search</button>
      </form>
    </div>
  );
}

export default App;
