const { Router } = require("express")

const Controller = require("../controller/recipe-book")

const router = Router()

router.get("/", Controller.getAll)
router.post("/", Controller.create)

module.exports = {
    router
}