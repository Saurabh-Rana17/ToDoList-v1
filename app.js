const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs')
app.get("/", function (req, res) {
    var date = new Date();
    var today = date.getDay();
    res.send("today");
})
app.listen(3000, function () {
    console.log("listening on 3000");
})
