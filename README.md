# Recetas Andinas 👩‍🍳

Recetas Andinas ayuda a los usuarios a centralizar recetas
tradicionales andinas, para que este patrimonio
cultural perdure.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Da un ejemplo
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Dí cómo será ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Diseño


### Datos
_El proyecto recoge los datos de las recetas desde el archivo ./data/recipes.ts como un array de objetos, definidos en types.d.ts de la siguiente manera:_

```
 Recipe{
    id: number
    name: string
    reviews: number
    isCooked: boolean
    ingredients: Array<string>
    preparation: string
}
```

### Estructura

* Se emplea una estructura principal a traves de un grid layout, dividiendo en 3 partes: nav, sidebar y main
* Para mostrar el dropdownlist se utiliza un hook useState booleano que lo controla y se realiza el cambio de estado desde el boton Cocido Antes
* Cada item de la lista de recetas se muestra tambien en un grid layout con auto rows. Este apartado posee scroll propio en caso que la cantidad de recetas hagan overflow del mismo. 
* Se crean los siguientes componentes para reusabilidad, mantenibilidad y facil lectura del codigo: Toggle, que implementa checkbox de la manera representada en el mockup, y se utiliza tanto para la lista de recetas como en la vista Nueva Receta; RecipeListItem que implementa cada receta para mostrarla en el Main; ReviewStar que recibe la cantidad de estrellas como prop y devuelve las imagenes formateadas en un div (esta implementacion es un DUMMY y está comentada para su futura implementacion real)
* Se crea un hook useState booleano para controlar el render del componente newRecipe que se encarga de ocultar el main con un wrapper semi transparente y mostrar la vista Nueva Receta. Para futuras ampliaciones del mismo y mejora de escalabilidad se debería poner el wrapper en un componente reutilizable. 

### Diseño de funcionalidades
* Los checkbox se implementan con pseudo elementos para que visualmente sean iguales al mockup
* El sticker añadir receta, al lado del boton de añadir receta se muestra al hacer hover sobre el mismo. 
* Se utilizan useState para el valor del buscador y de la seleccion de Cocido antes, la función filterRecipe realiza el filtrado de las recetas bajo estos dos criterios. 
* Los colores se encuentran implementados mediante variables en #root, para su reutilización y ante la posibilidad de cambiar de tema o colores en el futuro.
* Los ingredientes de la receta nueva tienen su propio scroll en función de que se vayan agregando mas, se emplea un hook useState para almacenar los ingredientes en un array, así se pueden añadir y eliminar de forma mas simple.
* 


### Funcionalidades a implementar
* Estrellas de reseña: para implementar en el componente ReviewStar.
* Boton Agregar Receta: en el componente NewRecipe, para implementar en la función handleSubmit. En ella hay una funcion Dummy de dicha funcionalidad y un objeto Recipe creado con los datos del formulario.  







## Construido con 🛠️

_Este proyecto ha sido creado con React, TypeScript y maquetado usando solo CSS, no se han utilizado librerías ni Frameworks de estilo._

* [React.js](https://es.reactjs.org) - v18.2.0
* [TypeScript](https://www.typescriptlang.org) - v4.7.4 

## Autor ✒️

* **Pehuén Assalone** -  [Pehuen87](https://github.com/pehuen87)😊


