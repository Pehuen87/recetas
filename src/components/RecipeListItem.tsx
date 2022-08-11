
import Toggle from './Toggle';
import ReviewStar from './ReviewStar';


export const RecipeListItem = ({Name, Reviews, isCooked}:{Name:string, Reviews: number ,isCooked:boolean}) => {


    
    


  return (
    <>
    <div>{Name}</div><div><ReviewStar activeStars={Reviews}/></div><Toggle Name={Name} Checked={isCooked} />
    </>
  )
}
