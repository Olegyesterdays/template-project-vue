import Router from "express"
import {
    createCarControllers,
    getAllCarControllers,
    getOneCarControllers,
    updateCarControllers,
    deleteCarControllers
} from "../controllers/car.js"

const carRouter = Router()

carRouter.post("/createCar", createCarControllers)
carRouter.get("/allCar", getAllCarControllers)
carRouter.get("/car/:id", getOneCarControllers)
carRouter.put("/updateCar/:id", updateCarControllers)
carRouter.delete("/deleteCar/:id", deleteCarControllers)

export default carRouter
