const mongoose = require("mongoose")
require("dotenv").config()
const conn = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.URI}`);
        console.log(
            "Database connected: ", 
            connect.connection.host, 
            connect.connection.name
        )
    }
    catch(err) {
        console.log("Couldn't connect to the database")
    }
}
conn();
module.exports = conn;