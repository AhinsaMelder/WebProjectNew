import Car from "../models/cars.js"

export async function savecar(req, res) {

    if(req.user == null){
        res.json({
            message:"User not found"
        })
        return
    }

    let carId = "C00001"

    const lastcar = await Car.find().sort({date: -1}).limit(1);

    if(lastcar.length > 0){
        
        const lastCarId = lastcar[0].carId;

        const lastCarNumberString = lastCarId.replace("C", "");
        const lastCarNumber = parseInt(lastCarNumberString);
        const newCarNumber = lastCarNumber + 1;
        const newCarNumberString = String(newCarNumber).padStart(5, "0");
        carId = "C" + newCarNumberString;

    }

    try{

        const car = new Car({
            carId:carId,
            email:req.user.email,
            brand:req.body.brand,
            model:req.body.model,
            year:req.body.year,
            color:req.body.color,
            price:req.body.price,
            images:req.body.images,

        })

        const savedCar = await car.save();
        res.json({
            message:"Car saved successfully",
          
        })

    }catch(error){
        res.json({
            message:"Error saving car",
            error:error.message,
        })
    }

        
      
}

export async function getCars(req, res) {
    try {
        const cars = await Car.find({ isAvailable: true });

        // ✅ Respond with array directly
        res.json(cars);
    } catch (error) {
        // ✅ Use proper status code for errors
        res.status(500).json({
            message: "Error getting cars",
            error: error.message,
        });
    }
}