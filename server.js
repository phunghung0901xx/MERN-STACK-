const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
const movieRoutes = require("./routes/movies");
const dbConnect = require("./dbConnect")
dotenv.config();

dbConnect()
app.use(cors())
app.use(express.json())
app.post("/api/test", () => {
    console.log("test is successfull")
})
app.use("/api", movieRoutes);
app.listen(process.env.PORT, () => {
    console.log("backend sever is running")
})