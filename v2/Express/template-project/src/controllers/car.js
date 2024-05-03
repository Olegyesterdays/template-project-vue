import {
    createCarService,
    getAllCarService,
    getOneCarService,
    updateCarService,
    deleteCarService
} from "../service/car.js"

async function createCarControllers(req, res) {
    try {
        res.join(await createCarService(req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAllCarControllers(req, res) {
    try {
        res.join(await getAllCarService())
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getOneCarControllers(req, res) {
    try {
        res.join(await getOneCarService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateCarControllers(req, res) {
    try {
        res.join(await updateCarService(req.params.id, req.body))
    } catch (e) {
        res.status(500).json(e);
    }
}

async function deleteCarControllers(req, res) {
    try {
        res.join(await deleteCarService(req.params.id))
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    createCarControllers,
    getAllCarControllers,
    getOneCarControllers,
    updateCarControllers,
    deleteCarControllers
}
