
//Import necessary packages
const express = require("express")


//init server app
const app = express();
const PORT = process.env.PORT || 8080;

//listen to HTML Requests
require("./requests/html/htmlcalls.js")();

//listen to API Requests
require("./requests/api/apicalls.js")();

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});