const mongoose = require("mongoose")
require("dotenv").config()
const conn = async () => {
    try {
        mongoose.connect(process.env.URI)
    }
    catch(err) {
        
    }
}
