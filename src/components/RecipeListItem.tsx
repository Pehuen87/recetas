
import Toggle from './Toggle';
import ReviewStar from './ReviewStar';


export const RecipeListItem = ({name, reviews, isCooked}:{name:string, reviews: number, isCooked:boolean}) => {


    
    


  return (
    <>
    <div>{name}</div><div><ReviewStar activeStars={reviews}/></div><Toggle name={name} checked={isCooked} />
    </>
  )
}
