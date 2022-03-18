const express = require("express")
const mongoose = require("mongoose")

// import mongoose schemas
const { Detection } = require("../schemas/detection")
const { Lamp } = require("../schemas/lamp")


mongoose.connect("mongodb://localhost:27017/makentu")

const router = express.Router()
router.post("/fetch_object", async (req, res) => {
    const post_data = req.body
    console.log(post_data)

    await Lamp.findOne({ ID: post_data.ID })
        .then((lamp) => {
            console.log(lamp)

            if (lamp === null) {
                res.json({ flag: "0" })
                return
            }

            res.json({ flag: "1" })
        })
})


module.exports = router

