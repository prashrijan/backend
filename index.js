require('dotenv').config()
const express = require("express")
const app = express()
const port = 4000

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/login", (req, res) => {
    res.send("<h2>Please login</h2>")
})

app.get("/google", (req, res) => {
    res.send(`<a href = "https://www.google.com">Link to google</a>`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example server listening at port ${process.env.PORT}`);
})