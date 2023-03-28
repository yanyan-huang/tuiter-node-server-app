import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express()
app.use(cors()) // configure cors right after instantiating express; to allow cross-origin requests
app.use(express.json()); // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)

app.listen(process.env.PORT || 4000);

