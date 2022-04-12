const { Router } = require("express")

const recipeBookRouter = require("./recipe-book").router

const router = Router()

router.use("/recipe-book", recipeBookRouter)

module.exports = {
    router
}