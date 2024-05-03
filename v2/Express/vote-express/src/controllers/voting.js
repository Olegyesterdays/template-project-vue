import {
    createVoting,
    deleteVoting,
    getAllVoting,
    getOneVoting,
    updateVoting
} from "../service/voting.js";

async function createVotingController(req, res) {
    try {
        res.json(await createVoting(req.body));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAllVotingController(req, res) {
    try {
        res.json(await getAllVoting());
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getOneVotingController(req, res) {
    try {
        res.json(await getOneVoting(req.params.id));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateVotingController(req, res) {
    try {
        res.json(await updateVoting(req.body));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function deleteVotingController(req, res) {
    try {
        res.json(await deleteVoting(req.params.id));
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    createVotingController,
    getAllVotingController,
    getOneVotingController,
    updateVotingController,
    deleteVotingController
};
