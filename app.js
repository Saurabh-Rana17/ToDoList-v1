const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var values = ['one', 'two', 'three'];
var workItem = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var date = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = date.toLocaleDateString("en-IN", option);
    
    res.render("list", { listTitle: day, newItems: values });
});
app.get("/work", function (req,res) {
    res.render("list",{listTitle:"Work ",newItems:workItem});
});
app.post("/work", function (req, res) {
    let value = req.body.item;
    workItem.push(value);
    res.redirect("/work");
})



app.post("/", function (req, res) {
    console.log(req.body);
    let value = req.body.item;
    
    if (req.body.list == "Work") {
        workItem.push(value);
        res.redirect("/work");
    } else {
        values.push(value);
    }
    
    values.push(value);
    res.redirect("/");

});

app.listen(3000, function () {
    console.log("listening on 3000");
});
