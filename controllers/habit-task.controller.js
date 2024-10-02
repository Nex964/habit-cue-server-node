const TaskModel = require("../models/habit-task");

const create = async (req, res) => {
  
  req.body.tasks.forEach(item => {
    console.log("Adding", item.title)
    const newTask = new TaskModel();
    
    Object.keys(item).forEach(key => {
      newTask[key] = item[key];
    })
    
    console.log("New", item.title)
    
    newTask.createdBy = "YoloPolo";
    
    newTask.save(function (err, book) {
      if (err) {
        res.send("error saving new habit task");
      } else {
        console.log(book);
        res.send(book);
      }
    });
  })


  
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
