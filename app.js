const express = require("express");
const bodyParser = require("body-parser");
const app = express();
values = [];
const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/todolistdb");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  const itemsSchema = new mongoose.Schema({
    name: String,
  });

  const itemsModel = mongoose.model("itemsModel", itemsSchema);

  //   const item1 = new itemsModel({ name: "wake up" });
  //   const item2 = new itemsModel({ name: "study hard" });
  //   const item3 = new itemsModel({ name: "sleep" });
  //   let defaultArray = [item1, item2, item3];
  //   await itemsModel.insertMany(defaultArray);
  let data = await itemsModel.find({});
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  console.log(data);
  res.render("list", { listTitle: "Today", newItems: values });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work ", newItems: workItem });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/work", function (req, res) {
  let value = req.body.item;
  workItem.push(value);
  res.redirect("/work");
});

app.post("/", function (req, res) {
  // console.log(req.body);
  let value = req.body.item;

  if (req.body.list == "Work") {
    workItem.push(value);
    res.redirect("/work");
  } else {
    values.push(value);
    res.redirect("/");
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("listening on 3000");
});
