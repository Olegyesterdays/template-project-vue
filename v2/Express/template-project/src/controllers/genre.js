import {
    createGenreService,
    getAllGenreService,
    getOneGenreService,
    updateGenreService,
    deleteGenreService
} from "../service/genre.js"

async function createGenreControllers(req, res) {
    try {
        res.join(await createGenreService(req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAllGenreControllers(req, res) {
    try {
        res.join(await getAllGenreService())
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getOneGenreControllers(req, res) {
    try {
        res.join(await getOneGenreService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateGenreControllers(req, res) {
    try {
        res.join(await updateGenreService(req.params.id, req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function deleteGenreControllers(req, res) {
    try {
        res.join(await deleteGenreService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    createGenreControllers,
    getAllGenreControllers,
    getOneGenreControllers,
    updateGenreControllers,
    deleteGenreControllers
}
