import React from 'react'
import './Search.css'
import {useState,useEffect} from 'react'
import { TbSearch } from "react-icons/tb";
import {AiFillCloseCircle} from 'react-icons/ai'
import ClipLoader from "react-spinners/ClipLoader";
import Cards from '../Cards/Cards';
function Search() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState();

  const addFilter = () => {
    if (query.trim() !== '') {
      setFilters([...filters, query.trim()]);
      setQuery('');
    }
  };

  const deleteFilter = (index) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };
  const search = () => {
    setRecipes(null);
    setLoading(true);
    const temp= filters.join(' ');
    console.log(temp);
    // Edamam API
    const app_id = '3738d17e'; // Replace with your Edamam app ID
    const app_key = 'bbe48a223f253671896036d5c4faf81e	';
    fetch(`https://api.edamam.com/search?q=${temp}&app_id=${app_id}&app_key=${app_key}`)
    .then(response => response.json())
    .then(data => {
      setRecipes(data.hits);
    })
  };
  useEffect(() => {
    if(recipes){
      setLoading(false);
    }
  }, [recipes]);

  return (
    <div className='search'>
      <form className='searchform' onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <div className='searchbar'>
        <input type="text" placeholder="Add your ingredients here" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className="btn" onClick={addFilter}>+</button> <button className='submit' type="submit"><TbSearch/></button>
      </div>
      
      <div className='items'>
        {filters.map((filter, index) => (
          <div key={index} className="tag">
            {filter}
            <button className="btn2" onClick={() => deleteFilter(index)}> <AiFillCloseCircle/> </button>
          </div>
        ))}
      </div>
    </form>
    {loading ? <div className='loader'><ClipLoader size={150} color={" rgb(239, 133, 11)"}/> </div>: 
      <div className="results">
        <h1 className='h1_'>Search Results</h1>
        <p className='h2_'>{recipes ? `${recipes.length} Recipes available` : ''}</p>
        <div className="recipe-cards">          
        {recipes && recipes.map((recipe,index) => <Cards key={recipe.recipe.uri} rec={recipe.recipe}/>
        )}
        </div>
      </div>
      }
    </div>
  )
}

export default Search;
