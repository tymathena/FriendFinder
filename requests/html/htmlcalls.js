
const path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/index.html"));
    })

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/survey.html"));
    })

    app.get("/find", function (req, res) {
        res.sendFile(path.join(__dirname, "../../public/find.html"));
    })

    
}