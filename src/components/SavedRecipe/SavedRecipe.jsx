import React from 'react'
import './SavedRecipe.css'
function SavedRecipe({key,rec}) {
  return (

            <div className="recipe-card">
                <h2>{rec.label}</h2>               
                <p>by {rec.source}</p>
                <div className="recipe-card-header">
                <a href={rec.url}>View Recipe</a>
                </div>
            </div>          
  )
};

export default SavedRecipe;
