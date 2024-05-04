import {
    createAuthorService,
    getAllAuthorService,
    getOneAuthorService,
    updateAuthorService,
    deleteAuthorService
} from "../service/author.js"

async function createAuthorControllers(req, res) {
    try {
        res.join(await createAuthorService(req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAllAuthorControllers(req, res) {
    try {
        res.join(await getAllAuthorService())
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getOneAuthorControllers(req, res) {
    try {
        res.join(await getOneAuthorService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateAuthorControllers(req, res) {
    try {
        res.join(await updateAuthorService(req.params.id, req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function deleteAuthorControllers(req, res) {
    try {
        res.join(await deleteAuthorService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    createAuthorControllers,
    getAllAuthorControllers,
    getOneAuthorControllers,
    updateAuthorControllers,
    deleteAuthorControllers
}
