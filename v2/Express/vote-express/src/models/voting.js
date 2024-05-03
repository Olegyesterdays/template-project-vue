import mongoose from 'mongoose';

const votingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    listOfQuestions: {
        type: [{
            question: String,
            answerOptions: [String]
        }],
        default: []
    }
})

export default mongoose.model('Voting', votingSchema);
