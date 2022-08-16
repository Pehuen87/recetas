
import './recipeListItem.css'
import Toggle from './Toggle';
import ReviewStar from './ReviewStar';


export const RecipeListItem = ({ name, reviews, isCooked }: { name: string, reviews: number, isCooked: boolean}) => {






  return (
    <>
      <div className={!isCooked?'disable':''}>{name}</div>
      <div className="recipeItem__stars">
        <ReviewStar activeStars={reviews} />
      </div>
      <Toggle name={name} checked={isCooked} readOnly={true} />
    </>
  )
}
export default RecipeListItem;
