require('dotenv').config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
//const { red } = require("./chalk_variables/chalk_variables")

const app = express()
const port = process.env.SERVER_PORT || 3000

//importing Routes
const userRouter = require("./Routes/userRoutes")
const eventRouter = require("./Routes/eventRoutes")
const charaRouter = require("./Routes/charaRoutes")

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(cookieParser())

//Using Routes
app.use("/api", userRouter)
app.use("/api", eventRouter)
app.use("/api", charaRouter)

app.listen(port, console.log(`Port is running on port ${port}`))