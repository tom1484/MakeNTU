const express = require("express")
const mongoose = require("mongoose")

// import mongoose schemas
const { Detection } = require("../../schemas/detection")
const { RoadObject } = require("../../schemas/road_object")
const { Lamp } = require("../../schemas/lamp")


mongoose.connect("mongodb://localhost:27017/makentu")

const router = express.Router()
router.post("/update_detection", async (req, res) => {
    const post_data = req.body
    // console.log(post_data)


    await Lamp.findOne({ ID: post_data.ID })
        .then((lamp) => {
            // console.log(lamp)

            if (lamp === null) {
                res.json({ flag: "0" })
                return
            }

            let objects = []
            post_data.objects.forEach(object => {
                objects.push(new RoadObject({ type: object.type, position: object.position }))
            })
            console.log(objects)

            Detection.findOneAndUpdate(
                { ID: lamp.ID }, 
                { $set: { objects: objects } }, 
                null, 
                (err, docs) => {
                    if (err) {
                        console.log(err)
                        res.json({ flag: "0" })
                    }
                    else {
                        console.log(docs)
                        res.json({ flag: "1" })
                    }
                }
            )
        })
})


module.exports = router

