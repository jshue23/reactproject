import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from './recipe';

function App() {
  const APP_ID = '154321d8';
  const APP_KEY = '660163c905ee13bc11ac96825bd9bdba';

  const [recipes, setRecipes] = useState([]);

 useEffect(() =>{
   getRecipes();
 }, []);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
}

  return (
    <div className="App">
     <form className="search-form">
       <input className="search-bar" type="text"/>
       <button className="search-button" type="submit">Search</button>
     </form>
     {recipes.map(recipe =>(
        <Recipe />
     ))};
    </div>
  );
};

export default App;
