import { React, useEffect, useState } from "react";
import axios from 'axios';
import '../App.css';
import { useParams, useNavigate } from 'react-router-dom';

function Searched() {

  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSearch = (e) => {
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + params.term)
        .then(function (response) {
          console.log(response.data.meals)
          setSearchedRecipe(response.data.meals)
          if (response.data.meals == null) {
            setSearchedRecipe([]);
            const nullDisplay = document.getElementById("request-null");
            nullDisplay.classList.remove("hidden");
          }
          else {
            const showDisplay = document.getElementById("request-exists");
            showDisplay.classList.remove("hidden");
          }

        })
        .catch(function (error) {
          console.log(error)
        })
    }
    getSearch()
  }, [params.term])


  return (
    <div>

      <div id="request-null" className="hidden centered landing-title">
        <h1>No Recipe was Found</h1>
        <h1 className="simple-p1">Try searching chicken, beef, or another ingredient</h1>
      </div>

      <div id="request-exists" className="hidden">

        <header className="search-header">{params.term}
          <button onClick={() => navigate(-1)} className="return-button">Back</button>
        </header>

        <div className="searched-body">
          <div className="searched-container">

            {searchedRecipe.map((item) => {
              return (
                <div className="card" key={item.idMeal}>
                  <div className="card-header">
                    <img src={item.strMealThumb} alt=""/>
                  </div>

                  <div className="card-body">
                    <h1>{item.strMeal}</h1>
                    <p>Meal Category: {item.strCategory}</p>
                    <p>Meal Area: {item.strArea}</p>
                    <p>Meal Tags: {item.strTags}</p>

                    <div className="tag-container">
                      <a className="tag" target="_blank" rel='noreferrer' href={item.strSource}>Recipe</a>
                      <a className="tag" target="_blank" rel='noreferrer' href={item.strYoutube}>Video</a>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div >
    </div>
  )
}

export default Searched