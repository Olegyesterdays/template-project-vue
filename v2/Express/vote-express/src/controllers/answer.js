import {
    createAnswer,
    deleteAnswer,
    getAllAnswers,
    getOneAnswer,
    updateAnswer
} from "../service/answer.js";

async function createAnswerController(req, res) {
    try {
        res.json(await createAnswer(req.body));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAllAnswersController(req, res) {
    try {
        res.json(await getAllAnswers());
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getOneAnswerController(req, res) {
    try {
        res.json(await getOneAnswer(req.params.id));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateAnswerController(req, res) {
    try {
        res.json(await updateAnswer(req.body));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function deleteAnswerController(req, res) {
    try {
        res.json(await deleteAnswer(req.params.id));
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    createAnswerController,
    getAllAnswersController,
    getOneAnswerController,
    updateAnswerController,
    deleteAnswerController
};
