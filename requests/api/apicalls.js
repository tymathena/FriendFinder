
const path = require("path");

var fs = require("fs");

module.exports = function (app) {

    let users;

    fs.readFile(path.join(__dirname, "../../data/friends.json"), "utf8", function (err, data) {

        users = JSON.parse(data);
        console.log(users)
    })

    app.get("/api/users", function (req, res) {
        res.sendFile(path.join(__dirname, "../../data/friends.json"))
    })

    app.post("/api/users", function (req, res) {

        console.log(req.body);

        users.push(req.body)

        console.log(users)

        fs.writeFile(path.join(__dirname, "../../data/friends.json"), JSON.stringify(users, null, 2), function (err) {
            if (err) {
                res.end(err);
            } else {
                res.sendFile(path.join(__dirname, "../../data/friends.json"))
            }
        })


    })

}