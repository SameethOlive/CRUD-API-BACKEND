const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute=require('./routes/product.route.js')
require('dotenv').config()

const app = express()
var myUrl=process.env.URL
var myPort=process.env.port




//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products',productRoute)



mongoose.connect(myUrl)
    .then(() => {
        console.log("Connected to Database")
        app.listen(myPort, () => {
            console.log(`Server is running on port ${myPort}`)
        });
    })
    .catch(() => {
        console.log("Failed to connect!!")
    })