# Recetas Andinas 👩‍🍳

Recetas Andinas ayuda a los usuarios a centralizar recetas
tradicionales de Los Andes, para que este patrimonio
cultural perdure.




## Comenzando 🚀


### Pre-requisitos 📋

* Tener instalado Node.js y NPM
* Tener instalado Git


### Instalación 🔧

Pasos básicos para entorno de desarrollo y pruebas:

_Crear app de React con template de TypeScript_

```
npx create-react-app recetas-andinas --template typescript
```

_Clonar repositorio en la carpeta especificada_

```
git clone https://github.com/Pehuen87/recetas.git
```

_Ejecutar script en la carpeta especificada_

```
npm start
```


## Diseño

### Datos

_El proyecto recoge los datos de las recetas desde el archivo ./data/recipes.ts como un array de objetos, con un tipado definido en types.d.ts de la siguiente manera:_

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
* Se crean los siguientes componentes para reusabilidad, mantenibilidad y facil lectura del codigo: Toggle, que implementa checkbox de la manera representada en el mockup, y se utiliza tanto para la lista de recetas como en la vista Nueva Receta; RecipeListItem que implementa cada receta para mostrarla en el Main; ReviewStar que recibe la cantidad de estrellas como prop y devuelve las imagenes formateadas en un div (esta implementacion es un DUMMY y está comentada para su futura implementacion real); RadioLabel, que se implementa como un componente para evitar la repeticion manual de los valores del radio y label. 
* Se crea un hook useState booleano para controlar el render del componente newRecipe que se encarga de ocultar el main con un wrapper semi transparente y mostrar la vista Nueva Receta. Para futuras ampliaciones del mismo y mejora de escalabilidad se debería poner el wrapper en un componente reutilizable. 

### Diseño de funcionalidades

* Los checkbox se implementan con pseudo elementos para que visualmente sean iguales al mockup
* El sticker añadir receta, al lado del boton de añadir receta se muestra al hacer hover sobre el mismo. 
* Se utilizan useState para el valor del buscador y de la seleccion de Cocido antes, la función filterRecipe realiza la comprobación de cada receta bajo estos dos criterios para luego ser filtradas. 
* Los colores se encuentran implementados mediante variables en #root, para su reutilización y ante la posibilidad de cambiar de tema o colores en el futuro.
* Los ingredientes de la receta nueva tienen su propio scroll en función de que se vayan agregando mas, se emplea un hook useState para almacenar los ingredientes en un array, y de esa manera añadir y eliminar de forma mas simple.
* Utilización de BEM para el maquetado del proyecto. 
* Comprobación de campo requerido en la nueva receta, así tambien debe haber al menos un ingrediente ingresado. 


### Responsive

* Se añadieron media querys y se priorizó que elementos mostrar para no afectar la funcionalidad ni desmerecer la interfaz de usuario en pantallas pequeñas. 
* Tanto las imágenes como los controles (radio, checkbox y toggle) cambian de tamaño en pantallas más pequeñas.
* Cambio en la dirección flex de algunos controles, para mayor experiencia de usuario.
* Scroll en la vista Nueva Receta, para que no desaparezcan controles o se perjudique la funcionalidad en dispositivos moviles. 


### Funcionalidades a implementar

* Estrellas de reseña: para implementar en el componente ReviewStar. Está lista para ser implementada bajo las siguientes especificaciones, donde el elemento JSX es un div que contiene las estrellas:

```
 Function ReviewStar  ({activeStars}:{activeStars: number}) : JSX.Element
```

* Boton Agregar Receta: en el componente NewRecipe, para implementar en la función addNewRecipe. En ella hay una funcion Dummy de dicha funcionalidad y un objeto Recipe creado con los datos del formulario, se debe implementar bajo las siguientes especificaciones:

```
const addNewRecipe: (e: React.SyntheticEvent) => void
```

donde los datos del objeto deben responder al tipo Recipe detallado anteriormente. 





## Construido con 🛠️

_Este proyecto ha sido creado con Node, React, TypeScript y maquetado usando solo CSS, no se han utilizado librerías ni Frameworks de estilo._

* [Node.js](https://nodejs.org/es/) - v18.1.0
* [React.js](https://es.reactjs.org) - v18.2.0
* [TypeScript](https://www.typescriptlang.org) - v4.7.4 

## Autor ✒️

* **Pehuén Assalone** -  [Pehuen87](https://github.com/pehuen87)😊


