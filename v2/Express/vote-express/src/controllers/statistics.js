import {
    getTheResultOfTheVote, getTotalNumberOfVotes
} from "../service/statistics.js";

async function getTheResultOfTheVoteController(req, res) {
    try {
        res.json(await getTheResultOfTheVote());
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getTotalNumberOfVotesController(req, res) {
    try {
        res.json(await getTotalNumberOfVotes());
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    getTheResultOfTheVoteController,
    getTotalNumberOfVotesController
};
