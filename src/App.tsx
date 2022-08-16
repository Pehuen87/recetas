import React, { useState } from 'react'

import sidebar__img from './img/salad.png'  //imagen del sidebar izquierdo
import logo from './img/logo.svg'   //logo del navbar
import arrowDropDown from './img/arrowDropDown.png' //imagen flecha hacia abajo del dropdown menu
import searchIcon from './img/search.svg'  //imagen de la barra de busqueda

import './App.css';

import { Recipe, RadioTypes } from './types'  

import recipes from './data/recipes'  //lista de recetas, en formato Array<Recipe> Siendo Recipe un tipo de objeto definido en ./types

import  RecipeListItem  from './components/RecipeListItem' //componente que devuelve formateado cada item en la lista de recetas 
import  NewRecipe  from './components/NewRecipe'  //componente que muestra la vista de creacion de nueva receta



function App() {


  //HOOKS INICIO
  const [showDroplist, setShowDroplist] = useState<boolean>(false);  //hook para controlar si se muestra el dropdown menu

  const [searchString, setSearchString] = useState<string>(""); //hook para controlar el estado del string de busqueda

  const [showNewRecipe, setShowNewRecipe] = useState<boolean>(false); //hook para controlar si se muestra la vista Nueva Receta 

  const [radioSelection, setRadioSelection] = useState<RadioTypes>("Todos"); //hook para controlar la seleccion del dropdown
  //HOOKS FIN
 
  
  const handleRadioChange = (radio: RadioTypes) => {   //funcion que al cambiar la seleccion de Cocido Antes actualiza el hook correspondiente y cierra el dropdown menu
    setRadioSelection(radio);
    setShowDroplist(false);
  }


  const filterRecipe = (recipe: Recipe): Boolean => {    //funcion que devuelve true si una receta cumple con la busqueda y el filtro Cocinado Antes 
    const radio: Boolean = (radioSelection === "Todos" || recipe.isCooked === (radioSelection !== "Inactivos"));
    const search: Boolean = (searchString === "" || recipe.name.includes(searchString));
    return (radio && search);
  }


  const radioAndLabel = (radio: RadioTypes) => {  //función que genera los radio del dropdown list 
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

          {recipes.filter((recipe => filterRecipe(recipe))).map(recipe=>

            < React.Fragment key={recipe.id.toString()}>
              <RecipeListItem name={recipe.name} reviews={recipe.reviews} isCooked={recipe.isCooked}/>
            </React.Fragment>
            
          )}

        </div>
        <button className='recipes__addRecipe' onClick={() => setShowNewRecipe(true)}>
          <div className='recipes__addRecipe__hover'>Añadir receta</div>
        </button>

      </div>
      {showNewRecipe &&
          <NewRecipe />
      }
    </div>
    


  );
}

export default App;
