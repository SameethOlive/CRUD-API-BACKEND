const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute=require('./routes/product.route.js')
require('dotenv').config()

const app = express()
var myUrl=process.env.URL


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products',productRoute)

app.get('/', (req, res) => {
    res.send("Sonaksha,Oliver")
})

mongoose.connect(myUrl)
    .then(() => {
        console.log("Connected to Database")
        app.listen(3000, () => {
            console.log(`Server is running on port ${3000}`)
        });
    })
    .catch(() => {
        console.log("Failed to connect!!")
    })