import Router from "express"
import {
    createUserController,
    getAllUsersController,
    getOneUserController,
    updateUserController,
    deleteUserController
} from "../controllers/user.js"
import roleMiddleware from "../middlewaree/roleMiddleware.js";

const userRouter = new Router()

userRouter.post("/createUser", createUserController)
userRouter.get("/allUser", roleMiddleware(["ADMIN"]), getAllUsersController)
userRouter.get("/user/:id", getOneUserController)
userRouter.get("/updateUser/:id", updateUserController)
userRouter.delete("/deleteUser/:id", roleMiddleware(["ADMIN"]), deleteUserController)

export default userRouter
