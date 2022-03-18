const mongoose = require("mongoose")

const lampSchema = new mongoose.Schema({
    ID: {
        type: String, 
        required: true, 
    }, 
    position: {
        type: [Number], 
    }, 
})

module.exports = {
    lampSchema: lampSchema, 
    Lamp: mongoose.model("lamp", lampSchema), 
}
