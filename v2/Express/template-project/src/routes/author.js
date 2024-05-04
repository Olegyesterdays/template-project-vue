import Router from "express"
import {
    createAuthorControllers,
    getAllAuthorControllers,
    getOneAuthorControllers,
    updateAuthorControllers,
    deleteAuthorControllers
} from "../controllers/author.js"

import roleMiddleware from "../middlewaree/roleMiddleware.js";

const authorRouter = Router()

authorRouter.post("/createAuthor", roleMiddleware["ADMIN"], createAuthorControllers)
authorRouter.get("/allAuthor", roleMiddleware["ADMIN"], getAllAuthorControllers)
authorRouter.get("/author/:id", roleMiddleware["ADMIN"], getOneAuthorControllers)
authorRouter.put("/updateAuthor/:id", roleMiddleware["ADMIN"], updateAuthorControllers)
authorRouter.delete("/deleteAuthor/:id", roleMiddleware["ADMIN"], deleteAuthorControllers)

export default authorRouter
