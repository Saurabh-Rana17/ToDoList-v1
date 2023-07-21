const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs')
app.get("/", function (req, res) {
    var date = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = date.toLocaleDateString("en-IN", option);
    
    res.render("list", { KindOfDay: day });
})
app.listen(3000, function () {
    console.log("listening on 3000");
})
