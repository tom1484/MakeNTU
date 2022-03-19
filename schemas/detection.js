const mongoose = require("mongoose")

const { roadObjectSchema } = require("./road_object")


const detectionSchema = new mongoose.Schema({
    ID: {
        type: String, 
        required: true, 
    }, 
    objects: {
        type: [roadObjectSchema], 
        required: true, 
    }
})

module.exports = {
    detectionSchema: detectionSchema, 
    Detection: mongoose.model("detection", detectionSchema), 
}
