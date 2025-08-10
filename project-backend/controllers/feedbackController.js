import Car from "../models/cars.js";
import Feedback from "../models/feedback.js";

export async function savefeedback(req,res){

    let feedback_id = "F00001";

    const carId = req.params.carId;
    const car = await Car.findOne({carId:carId});

    const lastFeedback = await Feedback.find().sort({ date: -1 }).limit(1);
    if (lastFeedback.length > 0) {
        const lastFeedbackId = lastFeedback[0].feedback_id;
        const lastFeedbackNumber = parseInt(lastFeedbackId.replace("F", ""), 10);
        const newFeedbackNumberString = String(lastFeedbackNumber + 1).padStart(5, "0");
        feedback_id = "F" + newFeedbackNumberString;
    }

    try{
        const feedback = new Feedback({
            feedback_id:feedback_id,
            carId:carId,
            email:req.user.email,
            feedback:req.body.feedback,
         
        });

        await feedback.save();
        res.json({
            message:"Feedback saved successfully",
        })
    }catch(error){
        res.json({
            message:"Error saving feedback",
            error:error.message,    
        })
    }

}