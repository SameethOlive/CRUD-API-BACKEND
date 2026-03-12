const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute=require('./routes/product.route.js')

const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use('/api/products',productRoute)

app.get('/', (req, res) => {
    res.send("Sonaksha,Oliver")
})

mongoose.connect("mongodb+srv://sameethsoorju2_db_user:lXCcMRabFeooAolb@backenddb.siw4j4a.mongodb.net/Node-API?appName=BackendDB")
    .then(() => {
        console.log("Connected to Database")
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
    })
    .catch(() => {
        console.log("Failed to connect!!")
    })