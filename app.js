const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var values = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var date = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = date.toLocaleDateString("en-IN", option);
    
    res.render("list", { KindOfDay: day,newItems:values });
})

app.listen(3000, function () {
    console.log("listening on 3000");
})

app.post("/", function (req,res) {
    
    var value = req.body.item;
    values.push(value);
    res.redirect("/"); 

})
