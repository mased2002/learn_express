const express = require("express")
const mongoose = require("mongoose")//new
const routes = require("./routes")

//connect to mongoDB database
mongoose
    .connect("mongodb://127.0.0.1:27017/acmedb")
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use("/api", routes)
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })
    .catch((error) => {
        console.error("this is the FUCKING error IT'S", error)
    })
    
