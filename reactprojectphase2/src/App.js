import React, {useEffect, useState} from "react";
import './App.css';
import './keys.js';

function App() {

  var url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

 useEffect(() =>{
console.log("Effect has been run");
 }), [];

const getRecipes = async () => {
  const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const date = response.json();
  console.log(data);
}

  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button className="search-button" type="submit">Search</button>
     </form>
    </div>
  );
};

export default App;
