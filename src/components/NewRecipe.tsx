
import Toggle from './Toggle'

import addIcon from '../img/add.svg'
import deleteIcon from '../img/delete.svg'

import { SyntheticEvent, useState } from 'react'

import './newRecipe.css'

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


    const handleSubmit = (e : React.SyntheticEvent) => {
    
        e.preventDefault();

        console.log(e.target);    
    }

    return (
        <div className='wrapper'>
            <div className='newRecipe'>
                <form  onSubmit={handleSubmit}>
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
                                <li key={index} className="newRecipe__ingredient"><input type="text" placeholder={arrayIngredients[index]} disabled={true} />
                                    <img id={"img_" + index} src={deleteIcon} onClick={(e) => handleDeleteIngredient(e.target as HTMLImageElement)} />
                                </li>
                            )
                        })}

                        <li key={arrayIngredients.length} className="newRecipe__ingredient"><input type="text" placeholder='Tipo de ingrediente' onChange={(e) => setIngredient(e.target.value)} required={arrayIngredients.length === 0} />
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
                        <input type="radio" name="radioReviews" value={1} id='radio_1' required={true} />
                        <label htmlFor='radio_1'>1</label>
                        <input type="radio" name="radioReviews" value={2} id='radio_2' required={true} />
                        <label htmlFor='radio_2'>2</label>
                        <input type="radio" name="radioReviews" value={3} id='radio_3' required={true} />
                        <label htmlFor='radio_3'>3</label>
                        <input type="radio" name="radioReviews" value={4} id='radio_4' required={true} />
                        <label htmlFor='radio_4'>4</label>
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
