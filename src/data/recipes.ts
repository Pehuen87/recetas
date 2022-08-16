import { Recipe } from "../types";
const recipes: Array<Recipe> = [
    {
        id:0,
        name: "Melodía de bayas mixtas",
        reviews: 3,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:1,
        name: "Sopa tailandesa de coliflor al curry rojo",
        reviews: 2,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:2,
        name: "Berenjena especiada crujiente",
        reviews: 3,
        isCooked: false,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:3,
        name: "Sopa de calabaza con un toque",
        reviews: 2,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:4,
        name: "Ensalada de tofu carbonizado, maíz y espárragos",
        reviews: 4,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:5,
        name: "Pollo al pesto cremoso en una sartén y ñoquis",
        reviews: 4,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },{
        id:6,
        name: "Pastel de pollo cremoso",
        reviews: 4,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:7,
        name: "Pollo y papas a la francesa",
        reviews: 3,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:8,
        name: "Estofado de ternera y verduras",
        reviews: 2,
        isCooked: false,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:9,
        name: "Lasaña de calabaza, espinacas y lentejas",
        reviews: 1,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:10,
        name: "Soothing chicken soup",
        reviews: 4,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:11,
        name: "Sopa de pollo calmante",
        reviews: 4,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:12,
        name: "Sopa de pollo calmante",
        reviews: 3,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:13,
        name: "Enchiladas rapidas de carne",
        reviews: 2,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:14,
        name: "Pollo al disco con champignones",
        reviews: 3,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:15,
        name: "Horneado de brócoli con queso",
        reviews: 3,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Combine las semillas de chía, la leche de almendras y 1 cucharada de jarabe de arce en una jarra grande. Deje reposar durante 3-4 minutos o hasta que las semillas se hinchen. Mientras tanto, ralla finamente 1 cucharadita de cáscara de 1 naranja. Cortar los gajos de ambas naranjas (ver Notas). Combine la harina, el polvo para hornear, la cáscara de naranja y la mitad de las nueces en un tazón mediano. Batir la mezcla de leche hasta que quede suave. Agregue los arándanos. Rociar una sartén antiadherente con aceite y calentar a fuego medio. Cocine al ras 1/2 taza de medidas de la mezcla, en tandas, durante 2 minutos por cada lado o hasta que estén doradas para hacer 8 panqueques. Repartir entre platos. Cubra con los gajos de naranja, la ricota, el almíbar restante y las nueces."
    },
    {
        id:16,
        name: "Horneado de brócoli con queso",
        reviews: 2,
        isCooked: true,
        ingredients: ["1/4 taza de semillas de chía negra", "2 1/2 tazas de leche de almendras", "2 naranjas","1 1/2 tazas de harina integral simple","2 cucharaditas de polvo de hornear", "1 taza de arándanos frescos o arándanos congelados"],
        preparation: "Ragú de pierna de cordero con pappardelle"
    }
]

export default recipes;