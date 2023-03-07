const mongoose = require("mongoose")

const dbConnect = () => {
    const connectionParams = {
        useNewUrlParser: true
    };
    mongoose.connect(process.env.DB, connectionParams)

    mongoose.connection.on("connected", () => {
        console.log("Connected sucessfully")
    })

    mongoose.connection.on("err", (err) => {
        console.log(err)
    })

    mongoose.connection.on("disconnected", (disconnected) => {
        console.log(disconnected)
    })

}
module.exports = dbConnect