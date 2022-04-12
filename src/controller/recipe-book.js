const { getAll: getAllRecipeBooks, create: createRecipeBook } = require("../service/recipe-book")

function getAll (req, res) {
    const recipeBooks = getAllRecipeBooks()
    res.json(recipeBooks)
}

function create (req, res) {
    console.log(req)
    console.log(req.body)
    if (!req || !req.body) {
        throw new Error("No recipe book to create")
    }

    const recipeBookId = createRecipeBook(req.body)
    if (!recipeBookId) {
        throw new Error ("Error while creating recipe book")
    }

    res.json({
        success: true,
        recipeBookId
    })
}

module.exports = {
    getAll,
    create
}