const { clone } = require("../utils")
const { getById: getIngredientById } = require("./ingredients")

const recipes = [
    {
        id: "6b96c96f-9c58-4cf3-9b1d-49920d1c2902",
        recipeBookId: "0bbef3d6-259c-42bc-ae1f-a879d74e0169",
        name: "Bolo de Milho",
        ingredients: [
            {
                ingredientId: "d4681a21-3869-40cc-a795-68e404269238",
                quantity: 3,
                unitOfMeasurement: "unidades"
            },
            {
                ingredientId: "76d5cb8c-7e54-4b3b-a8c0-49bece37b394",
                quantity: 200,
                unitOfMeasurement: "ml"
            },
            {
                ingredientId: "1baa9462-b8cb-45bf-987f-39a14692dae8",
                quantity: 300,
                unitOfMeasurement: "g"
            },
            {
                ingredientId: "e7809b95-2a82-483c-8fcd-5eeb99edf25c",
                quantity: 250,
                unitOfMeasurement: "g"
            },
            {
                ingredientId: "caf39549-3178-4fac-ba23-a307ec35f94b",
                quantity: 500,
                unitOfMeasurement: "ml"
            },
            {
                ingredientId: "fd25f3c3-c18e-4237-a72f-ba7a429896c7",
                quantity: 230,
                unitOfMeasurement: "g"
            },
            {
                ingredientId: "10df2275-a6cc-477b-ad36-bd0e2c428962",
                quantity: 100,
                unitOfMeasurement: "g"
            },
            {
                ingredientId: "48ebe0a4-7c18-4122-8558-79cd32f81bb9",
                quantity: 20,
                unitOfMeasurement: "g"
            },
        ],
        steps: [
            "Bata o ovo, o óleo, o açúcar e o milho no liquidificador",
            "Adicione o leite, o floco de milho, o coco ralado e o fermento e bata por mais aproximadamente 5 minutos",
            "Coloque em uma forma untada, de preferência com furo no meio",
            "Asse a 230 °C por 1 hora"
        ]
    }
]

function fillIngredientNames (recipe) {
    if (!recipe) return null
    if (!recipe.ingredients || !recipe.ingredients.length) return recipe

    recipe = clone(recipe)

    for (const recipeIngredient of recipe.ingredients) {
        const ingredient = getIngredientById(recipeIngredient.ingredientId)
        if (!ingredient) continue
        recipeIngredient.ingredientName = ingredient.name
    }

    return recipe
}

function getByRecipeBookId (recipeBookId) {
    return recipes
        .filter(recipe => recipe.recipeBookId === recipeBookId)
        .map(recipe => fillIngredientNames(recipe))
}

module.exports = {
    getByRecipeBookId
}