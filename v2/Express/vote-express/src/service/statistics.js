import answer from "../models/answer.js";

async function getTheResultOfTheVote() {
    return answer.create();
}

async function getTotalNumberOfVotes() {
    return answer.find();
}

export {
    getTheResultOfTheVote,
    getTotalNumberOfVotes
};
