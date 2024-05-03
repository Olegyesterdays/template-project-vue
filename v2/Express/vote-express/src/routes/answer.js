import Router from "express"
import {
    createAnswerController,
    deleteAnswerController,
    getAllAnswersController,
    getOneAnswerController,
    updateAnswerController
} from "../controllers/answer.js"

const answerRouter = new Router()

answerRouter.post("/createAnswer", createAnswerController)
answerRouter.get("/allAnswer", getAllAnswersController)
answerRouter.get("/answer/:id", getOneAnswerController)
answerRouter.put("/updateAnswer/:id", updateAnswerController)
answerRouter.delete("/deleteAnswer/:id", deleteAnswerController)

export default answerRouter
