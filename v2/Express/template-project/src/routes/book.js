import Router from "express"
import {
    createBookControllers,
    getAllBookControllers,
    getOneBookControllers,
    updateBookControllers,
    deleteBookControllers
} from "../controllers/book.js"
import roleMiddleware from "../middlewaree/roleMiddleware.js";

const bookRouter = Router()

bookRouter.post("/createBook", roleMiddleware["ADMIN"], createBookControllers)
bookRouter.get("/allBook", roleMiddleware["ADMIN"], getAllBookControllers)
bookRouter.get("/book/:id", roleMiddleware["ADMIN"], getOneBookControllers)
bookRouter.put("/updateBook/:id", roleMiddleware["ADMIN"], updateBookControllers)
bookRouter.delete("/deleteBook/:id", roleMiddleware["ADMIN"], deleteBookControllers)

export default bookRouter
