import Toggle from './Toggle'

import addIcon from '../img/add.svg'
import deleteIcon from '../img/delete.svg'

import { useState } from 'react'


export const NewRecipe = () => {

    const [arrayIngredients, setArrayIngredients] = useState<string[]>(["0", "1", "2", "3", "4"])
    const [ingredient, setIngredient] = useState<string>("");


    const handleDeleteIngredient = (img: HTMLImageElement) => {

        let auxIng: string[] = [...arrayIngredients];

        auxIng.splice(parseInt(img.id.split("_")[1]), 1);
        setArrayIngredients(auxIng);
        console.log(arrayIngredients);
    }
    const handleAddIngredient = () => {
        ingredient!=="" && setArrayIngredients([...arrayIngredients, ingredient]);
        setIngredient("");
    }

    return (
        <div className='newRecipe'>
            <form>
                <h3>Nueva receta</h3>
                <p>Nombre de la receta</p>
                <input type="text" required />
                <p>Ingredientes</p>
                <div className='newRecipe__ingredients'>
                    <ol type="1">

                        {arrayIngredients.map((e, index) => {
                            return (
                                <li key={index}><input type="text" placeholder={arrayIngredients[index]} required />
                                    <img id={"img_" + index} src={deleteIcon} onClick={(e) => handleDeleteIngredient(e.target as HTMLImageElement)} />
                                </li>
                            )
                        })}

                        <li key={arrayIngredients.length}><input type="text" placeholder='Tipo de ingrediente' onChange={(e) => setIngredient(e.target.value)}/>
                            <img id={"img_" + arrayIngredients.length} src={addIcon} onClick={() => handleAddIngredient()} />
                        </li>
                    </ol>
                </div>
                <p>Preparación</p>

                <textarea placeholder="Escribe los pasos" name="message" required />

                <p>Reseñas</p>
                <div className='newRecipe__reviews'>
                    <input type="radio" name="radioReviews" value={1} />
                    <input type="radio" name="radioReviews" value={2} />
                    <input type="radio" name="radioReviews" value={3} />
                    <input type="radio" name="radioReviews" value={4} />
                </div>
                <p>Cocinado antes</p>

                <Toggle name='isCooked' readOnly={false} />

                <button type="submit" className='newRecipe__createButton'>Crear</button>
            </form>
        </div>
    )
}
