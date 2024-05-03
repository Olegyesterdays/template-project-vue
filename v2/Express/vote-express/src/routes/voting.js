import Router from "express"
import {
    createVotingController,
    deleteVotingController,
    getAllVotingController,
    getOneVotingController,
    updateVotingController
} from "../controllers/voting.js"

const votingRouter = new Router()

votingRouter.post("/createVoting", createVotingController)
votingRouter.get("/allVoting", getAllVotingController)
votingRouter.get("/voting/:id", getOneVotingController)
votingRouter.get("/updateVoting/:id", updateVotingController)
votingRouter.delete("/deleteVoting/:id", deleteVotingController)

export default votingRouter
