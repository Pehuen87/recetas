
import Toggle from './Toggle'

import addIcon from '../img/add.svg'
import deleteIcon from '../img/delete.svg'

import { useState, useId } from 'react'

import './newRecipe.css'
import { Recipe } from '../types'
import { RadioLabel } from './RadioLabel'

export const NewRecipe = () => {





    const [arrayIngredients, setArrayIngredients] = useState<string[]>([])
    const [ingredient, setIngredient] = useState<string>("");


    const handleDeleteIngredient = (img: HTMLImageElement) => {

        let auxIng: string[] = [...arrayIngredients];

        auxIng.splice(parseInt(img.id.split("_")[1]), 1);
        setArrayIngredients(auxIng);
        console.log(arrayIngredients);
    }
    const handleAddIngredient = () => {
        ingredient !== "" && setArrayIngredients([...arrayIngredients, ingredient]);
        setIngredient("");
    }


    const addNewRecipe = (e: React.SyntheticEvent) => {
        /* DUMMY SUBMIT*/
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string };
            preparation: { value: string };
            radioReviews: { value: number };
            isCooked: { value: boolean }
            lastIngredient: { value: string }
        };


        let recipe: Recipe = {
            id: 0,
            name: target.title.value,
            reviews: target.radioReviews.value,
            preparation: target.preparation.value,
            isCooked: target.isCooked.value,
            ingredients: [...arrayIngredients]
        };

        if (target.lastIngredient.value !== "" && !arrayIngredients.includes(target.lastIngredient.value))
            recipe.ingredients.push(target.lastIngredient.value);

        /* DUMMY SUBMIT*/

    }

    return (
        <div className='wrapper'>
            <div className='newRecipe'>
                <form onSubmit={addNewRecipe}>
                    <h3>Nueva receta</h3>
                    <p>Nombre de la receta</p>
                    <div className='newRecipe__textareaWithLabel disable newRecipe__textareaWithLabel--title'>
                        <label>Título*</label>
                        <textarea placeholder="P.ej. Olla caliente de carne y arroz en olla de cocción lenta" name="title" rows={1} required />
                    </div>
                    <p>Ingredientes</p>
                    <ol type="1" className='newRecipe__ingredients__ol'>

                        {
                            arrayIngredients.map((e, index) => {
                                return (
                                    <li key={index} className="newRecipe__ingredient__li">
                                        <input type="text" placeholder={arrayIngredients[index]} disabled={true} />
                                        <img id={"img_" + index} src={deleteIcon} onClick={(e) => handleDeleteIngredient(e.target as HTMLImageElement)} alt="" />
                                    </li>
                                )
                            })
                        }
                        <li key={arrayIngredients.length} className="newRecipe__ingredient__li">
                            <input type="text" placeholder='Tipo de ingrediente' onChange={(e) => setIngredient(e.target.value)} name="lastIngredient" required={arrayIngredients.length === 0} />
                            <img id={"img_" + arrayIngredients.length} src={addIcon} onClick={() => handleAddIngredient()} alt="" />
                        </li>
                    </ol>
                    <p>Preparación</p>

                    <div className='newRecipe__textareaWithLabel disable newRecipe__textareaWithLabel--preparation'>
                        <label>Instrucciones*</label>
                        <textarea placeholder="Escribe los pasos" name="preparation" required rows={6} />
                    </div>

                    <p>Reseñas</p>
                    <div className='newRecipe__reviews'>
                        <RadioLabel value={1}></RadioLabel>
                        <RadioLabel value={2}></RadioLabel>
                        <RadioLabel value={3}></RadioLabel>
                        <RadioLabel value={4}></RadioLabel>
                    </div>
                    <p>Cocinado antes</p>

                    <Toggle name='isCooked' readOnly={false} />
                    <div className='newRecipe__footer'>
                        <button type="submit" className='newRecipe__createButton'>Crear</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewRecipe;