const mongoose = require("mongoose")

// import mongoose schemas
const Detection = require("./detection_update/schemas/detection")

mongoose.connect("mongodb://localhost:27017/makentu")


Detection.findOneAndUpdate(
    { ID: "0" }, 
    {
        $set: {
            objects: [
                { type: "car", position: [1, 3] }, 
            ], 
        }, 
    }, 
    (err, doc) => {
        if (err)
            console.log(err)
    }
)
