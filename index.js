const express = require('express');
const bodyParser = require("body-parser");
const routes = require("./routes/setupRoutes");
const cors = require('cors');


const app = express()

app.use( cors()); 
app.use(bodyParser.json())

routes.setUpRoutes(app)

app.listen(3000, () => {
    console.log("server started at port number 3000")
})