import Router from "express"
import {
    createGenreControllers,
    getAllGenreControllers,
    getOneGenreControllers,
    updateGenreControllers,
    deleteGenreControllers
} from "../controllers/genre.js"
import roleMiddleware from "../middlewaree/roleMiddleware.js";

const genreRouter = Router()

genreRouter.post("/createGenre", roleMiddleware["ADMIN"], createGenreControllers)
genreRouter.get("/allGenre", roleMiddleware["ADMIN"], getAllGenreControllers)
genreRouter.get("/genre/:id", roleMiddleware["ADMIN"], getOneGenreControllers)
genreRouter.put("/updateGenre/:id", roleMiddleware["ADMIN"], updateGenreControllers)
genreRouter.delete("/deleteGenre/:id", roleMiddleware["ADMIN"], deleteGenreControllers)

export default genreRouter
