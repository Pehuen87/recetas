

import starIcon from '../img/starIcon.png'
import starBorderIcon from '../img/starBorderIcon.png'



function ReviewStar  ({activeStars}:{activeStars: number}) {

  //IMPLEMENTACION DUMMY QUE DEVUELVE LAS ESTRELLAS EN FUNCION DE UN NUMERO ENVIADO POR PROPS
    return (
      <>
        {[...new Array(4)].map((arr, index) => {
          return index < activeStars ? <img src={starIcon} alt="" key={index}/> : <img src={starBorderIcon} alt="" key={index}/>;
        })}
      </>
    )
  }
 //IMPLEMENTACION DUMMY 
  export default ReviewStar;