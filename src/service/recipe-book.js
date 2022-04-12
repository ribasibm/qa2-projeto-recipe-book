const { v4: uuidV4 } = require("uuid")
const { clone } = require("../utils")
const { getByRecipeBookId: getRecipeByRecipeBookId } = require("./recipe")

const recipeBooks = [
    {
        id: "0bbef3d6-259c-42bc-ae1f-a879d74e0169",
        name: "Sample Book"
    }
]

function fillRecipes (recipeBook) {
    if (!recipeBook) return null
    recipeBook = clone(recipeBook)

    recipeBook.recipes = getRecipeByRecipeBookId(recipeBook.id)
    return recipeBook
}


function getAll () {
    return recipeBooks
        .map(recipeBook => fillRecipes(recipeBook))
}

function create (recipeBook) {
    const id = uuidV4()
    recipeBook.id = id

    recipeBooks.push(recipeBook)

    return id
}

module.exports = {
    getAll,
    create
}