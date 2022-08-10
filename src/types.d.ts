export interface Recipe{
    id: number
    name: string
    reviews: number
    isCooked: boolean
    ingredients: Array<string>
    preparation: string
}