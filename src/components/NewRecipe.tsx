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
        ingredient !== "" && setArrayIngredients([...arrayIngredients, ingredient]);
        setIngredient("");
    }

    return (
        <div className='newRecipe'>
            <form>
                <h3>Nueva receta</h3>
                <p>Nombre de la receta</p>
                <div className='newRecipe__textareaWithLabel disable newRecipe__textareaWithLabel--title'>
                    <label>Título*</label>
                    <textarea placeholder="P.ej. Olla caliente de carne y arroz en olla de cocción lenta" name="title" rows={1} required />
                </div>
                <p>Ingredientes</p>
                <ol type="1" className='newRecipe__ingredients'>

                    {arrayIngredients.map((e, index) => {
                        return (
                            <li key={index} className="newRecipe__ingredient"><input type="text" placeholder={arrayIngredients[index]} required />
                                <img id={"img_" + index} src={deleteIcon} onClick={(e) => handleDeleteIngredient(e.target as HTMLImageElement)} />
                            </li>
                        )
                    })}

                    <li key={arrayIngredients.length} className="newRecipe__ingredient"><input type="text" placeholder='Tipo de ingrediente' onChange={(e) => setIngredient(e.target.value)} />
                        <img id={"img_" + arrayIngredients.length} src={addIcon} onClick={() => handleAddIngredient()} />
                    </li>
                </ol>
                <p>Preparación</p>

                <div className='newRecipe__textareaWithLabel disable newRecipe__textareaWithLabel--preparation'>
                    <label>Instrucciones*</label>
                    <textarea placeholder="Escribe los pasos" name="message" required rows={6} />
                </div>

                <p>Reseñas</p>
                <div className='newRecipe__reviews'>
                    <input type="radio" name="radioReviews" value={1} id='radio_1'/>
                    <label htmlFor='radio_1'>1</label>
                    <input type="radio" name="radioReviews" value={2} id='radio_2'/>
                    <label htmlFor='radio_2'>2</label>
                    <input type="radio" name="radioReviews" value={3} id='radio_3'/>
                    <label htmlFor='radio_3'>3</label>
                    <input type="radio" name="radioReviews" value={4} id='radio_4'/>
                    <label htmlFor='radio_4'>4</label>
                </div>
                <p>Cocinado antes</p>

                <Toggle name='isCooked' readOnly={false} />

                <button type="submit" className='newRecipe__createButton'>Crear</button>
            </form>
        </div>
    )
}
