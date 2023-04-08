import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";// load the mongoose library
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter' 
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors()) // configure cors right after instantiating express; to allow cross-origin requests
app.use(express.json()); // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)

app.listen(process.env.PORT || 4000);

