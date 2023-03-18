import React from 'react'
import './Cards.css'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
function Cards({key,rec}) {
    function saveRecipeToLocalStorage(recipe) {

        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];  
        savedRecipes.push(recipe);  
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        console.log(savedRecipes)
      }
    const handleClick = () => {
        //add to local storage
        saveRecipeToLocalStorage(rec);
    }
  return (

            <div className="recipe-card">
                <h2>{rec.label}</h2>               
                <img src={rec.image} alt={rec.label} />
                <p>by {rec.source}</p>
                <div className="recipe-card-header">
                <a href={rec.url}>View Recipe</a>
                <AiOutlineAppstoreAdd onClick={handleClick} className="save" size={30}/>
                </div>
            </div>          
  )
};

export default Cards;
