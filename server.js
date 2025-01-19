var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 8080;
var db =
    "mongodb+srv://nex964:nex964@cluster0.4q3qz.mongodb.net/habits?retryWrites=true&w=majority";

var habitTasks = require("./routes/habit-task");

mongoose.connect(db);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);



// app.use("/books", books);
app.use("/habit-task", habitTasks);
app.use("/user", habitTasks);

app.get("/", function (req, res) {
    console.log("app starting on port: " + port);
    res.send("tes express nodejs mongodb");
});

app.listen(port, function () {
    console.log("app listening on port: " + port);
});