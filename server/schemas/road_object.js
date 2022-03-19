const mongoose = require("mongoose")

const roadObjectSchema = new mongoose.Schema({
    type: {
        type: String, 
        required: true, 
    }, 
    position: {
        type: [Number], 
        required: true, 
    }, 
})

module.exports = {
    roadObjectSchema: roadObjectSchema, 
    RoadObject: mongoose.model("road_object", roadObjectSchema), 
}
