const { PORT } = require("./constants")

const express = require("express")

const { router } = require("./router")

const app = express();

app.use(express.json())
app.use("/api",router)

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})
