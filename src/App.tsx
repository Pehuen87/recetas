import { useState } from 'react'

import sidebar__img from './img/salad.png'
import logo from './img/logo.svg'
import arrowDropDown from './img/arrowDropDown.png'
import searchIcon from './img/search.svg'

import recipes from './data/recipes'


import './App.css';
import { Recipe } from './types'
import {RecipeListItem} from './components/RecipeListItem'

function App() {

  
  const [showDroplist, setShowDroplist] = useState<boolean>(false);
  
  
  const [searchString, setSearchString] = useState<string>("");

  type RadioTypes = "Todos" | "Activos" | "Inactivos";
  const [radioSelection, setRadioSelection] = useState<RadioTypes>("Todos");
  
  const handleRadioChange = (radio: RadioTypes) =>{
      setRadioSelection(radio);
      setShowDroplist(false);
  }


  const filterRecipe = (recipe : Recipe):Boolean => {
    const radio:Boolean = (radioSelection === "Todos" || recipe.isCooked === (radioSelection !== "Inactivos"));
    const search:Boolean = (searchString ==="" || recipe.name.includes(searchString) );
    return (radio && search);
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
              <button className="recipes__nav__button" onClick={() => setShowDroplist(!showDroplist)}>Cocido antes: <strong>{radioSelection}</strong><img src={arrowDropDown} alt=""  /></button>
              {showDroplist && (
                <div className='droplist__list'>
                  <div>Todos</div><input type="radio" name="dropdownlist"  onChange={() => handleRadioChange("Todos")} checked={radioSelection === "Todos"} />
                  <div>Activos</div><input type="radio" name="dropdownlist"  onChange={() => handleRadioChange("Activos")} checked={radioSelection === "Activos"} />
                  <div>Inactivos</div><input type="radio" name="dropdownlist" onChange={() => handleRadioChange("Inactivos")}  checked={radioSelection === "Inactivos"}/>
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
            <RecipeListItem Name={recipe.name} Reviews={recipe.reviews} isCooked={recipe.isCooked} />
            </>
          )}

        </div>
      </div>
    </div>

  );
}

export default App;
