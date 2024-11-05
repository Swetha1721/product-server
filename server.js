
const express = require("express")
const app = express()

app.get("/products", (req, res)=>{
    res.send("Hello")

})

app.listen(3000, ()=>{
    console.log("listening to the port")
})