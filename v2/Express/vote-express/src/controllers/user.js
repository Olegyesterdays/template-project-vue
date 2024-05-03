import {
    createUser,
    deleteUser,
    getAllUsers,
    getOneUser,
    updateUser
} from "../service/user.js";

async function createUserController(req, res) {
    try {
        res.json(await createUser(req.body));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAllUsersController(req, res) {
    try {
        res.json(await getAllUsers());
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getOneUserController(req, res) {
    try {
        res.json(await getOneUser(req.params.id));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateUserController(req, res) {
    try {
        res.json(await updateUser(req.body));
    } catch (e) {
        res.status(500).json(e);
    }
}

async function deleteUserController(req, res) {
    try {
        res.json(await deleteUser(req.params.id));
    } catch (e) {
        res.status(500).json(e);
    }
}

export {
    createUserController,
    getAllUsersController,
    getOneUserController,
    updateUserController,
    deleteUserController
};
