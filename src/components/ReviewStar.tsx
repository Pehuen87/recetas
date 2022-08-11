
import starIcon from '../img/starIcon.png'
import starBorderIcon from '../img/starBorderIcon.png'



function ReviewStar  ({activeStars}:{activeStars: number}) {
    return (
      <>
        {[...new Array(4)].map((arr, index) => {
          return index < activeStars ? <img src={starIcon} alt="" key={index}/> : <img src={starBorderIcon} alt="" key={index}/>;
        })}
      </>
    )
  }

  export default ReviewStar;