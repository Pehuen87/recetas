import React from 'react';
import logo from './logo.svg';
import sidebar__img from './img/salad.png'
import starIcon from './img/starIcon.png'
import starBorderIcon from './img/starBorderIcon.png'
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
        logo
      </div>
      <div className="sidebar">
        <img src={sidebar__img} />
      </div>
      <div className="recipes">
        <div className="recipes__nav">
          <div className="recipes__nav__subtitle"><h2>Recetas de Cocina</h2></div>

          <div className="recipes__nav--flexrow">
            <div className="recipes__nav__search"><p>Buscador</p></div>
            <div className="recipes__nav__drop"><p>Cocido antes:Todos</p></div>
          </div> 


          <div className="recipes__nav__table">

            <div>Nombre de la receta</div>
            <div>Reseñas</div>
            <div>Cocinado antes</div>

            <div>Melodía de bayas mixtas</div><div>{reviews(5)}</div><Toggle Name="1" />
            <div>Melodía de bayas mixtas</div><div>{reviews(5)}</div><Toggle Name="2" />
            <div>Melodía de bayas mixtas</div><div>{reviews(0)}</div><Toggle Name="3" />




          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
