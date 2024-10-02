const TaskModel = require("../models/habit-task");

const create = async (req, res) => {
  
  const resData = [];
  
  for(let item in req.body.tasks){
    
    console.log("Adding", item.title)
    const newTask = new TaskModel();
    
    Object.keys(item).forEach(key => {
      if(key === "id"){
        newTask[]
      }
      newTask[key] = item[key];
    })
    
    newTask.createdBy = "YoloPolo";
    
    console.log("New Task", newTask);
    
    const addedItem = await newTask.save();
    if (addedItem.err) {
      res.send("error saving new habit task");
    } else {
      resData.push(addedItem)
    }
  }
  
  res.send(resData.map(item => item.id));
  
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
