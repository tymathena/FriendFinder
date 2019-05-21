
//Import necessary packages
const express = require("express")


//init server app
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//listen to HTML Requests
require("./requests/html/htmlcalls.js")(app);

//listen to API Requests
require("./requests/api/apicalls.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});