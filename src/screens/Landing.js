import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Landing() {

  const [recipe, setRecipe] = useState('');
  const navigate = useNavigate();

  const submitForm = (event) => {

    event.preventDefault();
    navigate("/recipe/" + recipe);

  }

  return (
    <div className="landing-body">
      <div className="centered">
        <h1 className = "landing-title"> What's on The Menu?</h1>
        
        <form>
          <input onChange={(event) => {setRecipe(event.target.value)}} className="search-input" type="search" placeholder="Search for a recipe"></input>
          <button onClick={submitForm} className="submit-btn" type="submit">Search</button>
        </form>

      </div>

    </div>
  )
}

export default Landing
