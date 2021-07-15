//the following are required for us to have a connection
const mongoose = require('mongoose')
require('dotenv').config();

const connection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    } catch (error) {
        console.log(error)
    }
}

connection();