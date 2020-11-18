import React from 'react';
import './App.css';

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
