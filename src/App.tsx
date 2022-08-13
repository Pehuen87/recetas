import { useState } from 'react'

import sidebar__img from './img/salad.png'
import logo from './img/logo.svg'
import arrowDropDown from './img/arrowDropDown.png'
import searchIcon from './img/search.svg'


import recipes from './data/recipes'


import './App.css';
import { Recipe, RadioTypes } from './types'
import { RecipeListItem } from './components/RecipeListItem'
import { NewRecipe } from './components/NewRecipe'

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
              <input className='recipes__nav__search__input' type="text" placeholder="Buscador" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value)} />
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

        <div className="recipes__table recipes__table--header disable">
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
          <NewRecipe />
        </div>
      }
    </div>
    


  );
}

export default App;
