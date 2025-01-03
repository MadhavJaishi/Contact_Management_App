const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 8800
app.use(express.json())

app.use("/api/contacts", require("./routes/contactRoutes"))

app.listen(port, () => {
    console.log(`Server created succesfully ${port}`);
})