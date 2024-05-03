import Answer from "../models/answer.js";

async function createAnswer({ author, emailAuthor, titleVoting, listOfAnswers }) {
    const email = await Answer.find({ emailAuthor });
    if (email) {
        throw new Error("Вы уже прошли опрос");
    }
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}.${(currentDate.getMonth() + 1).toString().padStart(2, '0')}.${currentDate.getFullYear()}`;
    return Answer.create({
        author: author,
        emailAuthor: emailAuthor,
        date: formattedDate,
        titleVoting: titleVoting,
        listOfAnswers: listOfAnswers
    });
}

async function getAllAnswers() {
    return Answer.find();
}

async function getOneAnswer(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return Answer.findById(id);
}

async function updateAnswer(post) {
    if (!post._id) {
        throw new Error("ID не указан");
    }
    return Answer.findByIdAndUpdate(post._id, post, { new: true });
}

async function deleteAnswer(id) {
    if (!id) {
        throw new Error("ID не указан");
    }
    return Answer.findByIdAndDelete(id);
}

export {
    createAnswer,
    getAllAnswers,
    getOneAnswer,
    updateAnswer,
    deleteAnswer
};
