
import sidebar__img from './img/salad.png'
import starIcon from './img/starIcon.png'
import starBorderIcon from './img/starBorderIcon.png'
import logo from './img/logo.svg'
import arrowDropDown from './img/arrowDropDown.png'
import searchIcon from './img/search.svg'

import recipes from './data/recipes'

import Toggle from './components/Toggle';

import './App.css';

function App() {

  const reviews = (activeStars: Number) => {
    return (
      <>
        {[...new Array(4)].map((arr, index) => {
          return index < activeStars ? <img src={starIcon} alt="" /> : <img src={starBorderIcon} alt="" />;
        })}
      </>
    )
  }







  return (
    <div className="app">
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
              <img src={searchIcon} alt=""/>
              <div>Buscador</div>

            </div>

            <div className="recipes__nav__drop">
              <p>Cocido antes: <strong>Todos</strong><img src={arrowDropDown} alt="" /></p>
              <div className='droplist'>
                <div>Todos</div><div className='droplist__radio droplist__radio--checked'></div>
                <div>Activos</div><div className='droplist__radio droplist__radio--checked'></div>
                <div>Inactivos</div><div className='droplist__radio'></div>
              </div>
            </div>
          </div>


          <div className="recipes__nav__table recipes__nav__table--header">
            <div>Nombre de la receta</div>
            <div>Reseñas</div>
            <div>Cocinado antes</div>
          </div>


          <div className="recipes__nav__table recipes__nav__table--items">

            {recipes.map(recipe =>
            <>
            <div>{recipe.name}</div><div>{reviews(recipe.reviews)}</div><Toggle Name={recipe.id.toString()} Checked={recipe.isCooked} />
            </>
            )}
{/* 
            <div>Melodía de bayas mixtas</div><div>{reviews(5)}</div><Toggle Name="1" />
            <div>Melodía de bayas mixtas</div><div>{reviews(5)}</div><Toggle Name="2" />
            <div>Melodía de bayas mixtas</div><div>{reviews(0)}</div><Toggle Name="3" /> */}




          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
