
if(process.env.NODE_ENV !== "production"){
require("dotenv").config()
}
const express =require("express")
const app = express()
const mongoose = require("mongoose")
const expressEjsLayouts = require("express-ejs-layouts")
const indexRouter = require("./routes/index")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout","layouts/layout")
app.use(expressEjsLayouts)
app.use(express.static("public"))


mongoose.connect(process.env.DatabaseUrl)
mongoose.connection.on("open",() =>{console.log("dB connected")})
 
 app.use(indexRouter)

 
 app.listen(process.env.PORT)  