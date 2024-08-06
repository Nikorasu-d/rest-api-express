import express from "express";
import {SV_HOST, SV_PORT} from './config/dotenv.js'
import v1routes from "./v1/routes/commonRoutes.js";
import notFoundHandler from "./middleware/notFoundHandler.js";
import errorHandler from "./middleware/errorHandler.js";
import {open} from "./config/database.js"


//Instantiate App
const app = express()

//Server Options
const port = SV_PORT? SV_PORT : 3000;

//Config
app.use(express.json())
open()//create pool

//Define Routes
app.use('/api/v1',v1routes)

// Hello World
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Useful Middleware
app.use(notFoundHandler)
app.use(errorHandler)

const start = async () =>{
  await app.listen(port, () => {
    console.log(`Web Service Listening on port ${port}`)
  })
}

//Start Server
start()

