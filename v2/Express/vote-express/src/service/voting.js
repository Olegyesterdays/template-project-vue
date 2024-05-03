import Voting from "../models/voting.js";

async function createVoting({ title, author, listOfQuestions }) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;
    return Voting.create({
        title: title,
        author: author,
        date: formattedDate,
        listOfQuestions: listOfQuestions
    });
}

async function getAllVoting() {
    return Voting.find();
}

async function getOneVoting(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return Voting.findById(id);
}

async function updateVoting(post) {
    if (!post._id) {
        throw new Error("ID не указан");
    }
    return Voting.findByIdAndUpdate(post._id, post, { new: true });
}

async function deleteVoting(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return Voting.findByIdAndDelete(id);
}

export {
    createVoting,
    getAllVoting,
    getOneVoting,
    updateVoting,
    deleteVoting
};
