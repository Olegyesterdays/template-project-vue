import User from "../models/user.js";

async function createUser(post) {
    return User.create(post);
}

async function getAllUsers() {
    return User.find();
}

async function getOneUser(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return User.findById(id);
}

async function updateUser(post) {
    if (!post._id) {
        throw new Error("ID не указан");
    }
    return User.findByIdAndUpdate(post._id, post, { new: true });
}

async function deleteUser(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return User.findByIdAndDelete(id);
}

export {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
};
