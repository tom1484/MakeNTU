const express = require("express")
const mongoose = require("mongoose")

// import mongoose schemas
const { Detection } = require("../../schemas/detection")
const { Lamp } = require("../../schemas/lamp")

const settings = require("./settings.json")


mongoose.connect("mongodb://localhost:27017/makentu")

const router = express.Router()
router.post("/fetch_object", async (req, res) => {
    const post_data = req.body
    console.log(post_data)

    await Lamp.findOne({ ID: post_data.ID })
        .then((lamp) => {
            console.log(lamp)

            if (lamp === null) {
                res.json({})
                return
            }

            Detection.find({ ID: { $in: settings.neighbors[lamp.ID] } })
                .then(detections => {
                    let objects = []
                    detections.forEach(detection => {
                        detection.objects.forEach(object => {
                            objects.push({
                                type: object.type, 
                                position: object.position, 
                            })
                        })
                    })

                    console.log(objects)
                    res.json(objects)
                })
        })
})


module.exports = router

