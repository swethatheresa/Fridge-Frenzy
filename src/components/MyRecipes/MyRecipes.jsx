import React, { useState, useEffect } from 'react'
import './MyRecipes.css'
import SavedRecipe from '../SavedRecipe/SavedRecipe';
import ClipLoader from "react-spinners/ClipLoader";

function MyRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    console.log(temp);
    setSavedRecipes([...temp]);
  }, []);

  useEffect(() => {
    if (savedRecipes.length > 0) {
      setLoading(false);
    }
  }, [savedRecipes]);

  console.log('savedRecipes:', savedRecipes);
  console.log('loading:', loading);
  
  return (
    <div className='myrecipes'>
    <h1 className="myrecipes-h1">My Recipes</h1>
    <div className="myrecipes-container">
      {savedRecipes.length > 0 ? loading ? <ClipLoader className='loader' size={150} color={" rgb(239, 133, 11)"}/> : (savedRecipes && (
        savedRecipes.map((recipe, index) => (
          <SavedRecipe key={index} rec={recipe} />
        )))
      ) : (
        <p>You haven't saved any recipes yet.</p>
      )}
    </div>
  </div>
  )
};

export default MyRecipes;
