import { useState } from 'react'

import sidebar__img from './img/salad.png'
import logo from './img/logo.svg'
import arrowDropDown from './img/arrowDropDown.png'
import searchIcon from './img/search.svg'

import recipes from './data/recipes'


import './App.css';
import { Recipe, RadioTypes } from './types'
import { RecipeListItem } from './components/RecipeListItem'
import Toggle from './components/Toggle'

function App() {


  const [showDroplist, setShowDroplist] = useState<boolean>(false);


  const [searchString, setSearchString] = useState<string>("");


  const [radioSelection, setRadioSelection] = useState<RadioTypes>("Todos");

  const handleRadioChange = (radio: RadioTypes) => {
    setRadioSelection(radio);
    setShowDroplist(false);
  }

  const [showNewRecipe, setShowNewRecipe] = useState<boolean>(false);


  const filterRecipe = (recipe: Recipe): Boolean => {
    const radio: Boolean = (radioSelection === "Todos" || recipe.isCooked === (radioSelection !== "Inactivos"));
    const search: Boolean = (searchString === "" || recipe.name.includes(searchString));
    return (radio && search);
  }


  const radioAndLabel = (radio: RadioTypes) => {
    return (
      <>
        <label htmlFor={"radio_" + radio}>{radio}</label><input type="radio" name="dropdownlist" id={"radio_" + radio} onChange={() => handleRadioChange(radio)} checked={radioSelection === radio} />
      </>
    )
  }


  return (
    <div className="app disableScrollbar">
      <div className="nav">
        <img src={logo} alt="" />
      </div>
      <div className="sidebar">
        <img src={sidebar__img} alt="" />
      </div>
      <div className="recipes">
        <div className="recipes__nav">
          <div className="recipes__nav__subtitle"><h2>Recetas de Cocina</h2></div>

          <div className="recipes__nav__bar">
            <div className="recipes__nav__search">
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Buscador" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value)} />

            </div>

            <div className="recipes__nav__drop">
              <button className="recipes__nav__button" onClick={() => setShowDroplist(!showDroplist)}>Cocido antes: <strong>{radioSelection}</strong><img src={arrowDropDown} alt="" /></button>
              {showDroplist && (
                <div className='droplist__list'>
                  {radioAndLabel("Todos")}
                  {radioAndLabel("Activos")}
                  {radioAndLabel("Inactivos")}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="recipes__table recipes__table--header">
          <div>Nombre de la receta</div>
          <div>Reseñas</div>
          <div>Cocinado antes</div>
        </div>

        <div className="recipes__table recipes__table--items">

          {recipes.filter((recipe => filterRecipe(recipe))).map(recipe =>
            <>
              <RecipeListItem name={recipe.name} reviews={recipe.reviews} isCooked={recipe.isCooked} />
            </>
          )}

        </div>
        <button className='recipes__addRecipe' onClick={() => setShowNewRecipe(true)}>
          <div className='recipes__addRecipe__hover'>Añadir receta</div>
        </button>

      </div>
      {showNewRecipe &&
        <div className='wrapper'>
         
          <div className='newRecipe'>
          <form>
            <h3>Nueva receta</h3>
            <p>Nombre de la receta</p>
            <input type="text" required />
            <p>Ingredientes</p>
            <div className='newRecipe__ingredients'>
              <ol type="1">
                <li><input type="text" placeholder='Tipo de ingrediente' required/>img</li>
                <li><input type="text" placeholder='Tipo de ingrediente' />img</li>


              </ol>
            </div>
            <p>Preparación</p>

            <textarea placeholder="Escribe los pasos" name="message" required />

            <p>Reseñas</p>

            <input type="radio" name="radioReviews" value={1} />
            <input type="radio" name="radioReviews" value={2} />
            <input type="radio" name="radioReviews" value={3} />
            <input type="radio" name="radioReviews" value={4} />

            <p>Cocinado antes</p>

            <Toggle name='isCooked' readOnly={false} />

            <button type="submit" className='newRecipe__createButton'>Crear</button>
          </form>
          </div>
        </div>
      }
    </div>
    


  );
}

export default App;
