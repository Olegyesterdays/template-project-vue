import {
    createBookService,
    getAllBookService,
    getOneBookService,
    updateBookService,
    deleteBookService
} from "../service/book.js"

async function createBookControllers(req, res) {
    try {
        res.join(await createBookService(req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAllBookControllers(req, res) {
    try {
        res.join(await getAllBookService())
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getOneBookControllers(req, res) {
    try {
        res.join(await getOneBookService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateBookControllers(req, res) {
    try {
        res.join(await updateBookService(req.params.id, req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function deleteBookControllers(req, res) {
    try {
        res.join(await deleteBookService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    createBookControllers,
    getAllBookControllers,
    getOneBookControllers,
    updateBookControllers,
    deleteBookControllers
}
