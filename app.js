const express = require("express")


const app = express()
// allow parsing json object
app.use(express.json())
app.use("/makentu", require("./routers/update_detection/router.js"))
app.use("/makentu", require("./routers/fetch_object/router.js"))

app.listen(1484)

