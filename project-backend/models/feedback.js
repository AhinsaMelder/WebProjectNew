import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({

    feedback_id: {
        type: String,
        required: true,
    },
    carId : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;