import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    emailAuthor: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    titleVoting: {
        type: String,
        required: true
    },
    listOfAnswers: {
        type: [String],
        required: true
    }
})

export default mongoose.model('Answer', answerSchema);
