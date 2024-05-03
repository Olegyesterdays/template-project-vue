import Router from "express"
import {
    getTheResultOfTheVoteController,
    getTotalNumberOfVotesController
} from "../controllers/statistics.js"

const statisticsRouter = new Router()

statisticsRouter.get("/theResultOfTheVote", getTheResultOfTheVoteController)
statisticsRouter.get("/totalNumberOfVotes", getTotalNumberOfVotesController)

export default statisticsRouter
