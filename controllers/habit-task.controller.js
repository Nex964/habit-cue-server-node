const TaskModel = require("../models/habit-task");

const create = async (req, res) => {
  const newTask = new TaskModel();

  newTask.title = req.body.title;
  newTask.category = req.body.category;
  newTask.note = req.body.note;
  newTask.type = req.body.type;
  newTask.tags = req.body.tags;

  
  newTask.save(function (err, book) {
    if (err) {
      res.send("error saving new habit task");
    } else {
      console.log(book);
      res.send(book);
    }
  });
};

const get = async (req, res) => {
  TaskModel.find({}).exec(function (err, habitTasks) {
    if (err) {
      res.send("error has occured");
    } else {
      console.log(habitTasks);
      res.json(habitTasks);
    }
  });
};

module.exports = { create, get };
