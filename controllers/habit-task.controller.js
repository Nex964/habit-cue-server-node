const TaskModel = require("../models/habit-task");

const create = async (req, res) => {
  
  const resData = [];
  
  for(let item of req.body.tasks){
    
    const newTask = new TaskModel();
    
    Object.keys(item).forEach(key => {
      if(key === "id"){
        newTask.localId = item.id
      }
      newTask[key] = item[key];
    })
    
    newTask.createdBy = "YoloPolo";
    
    const addedItem = await newTask.save();
    if (addedItem.err) {
      res.send("error saving new habit task");
    } else {
      resData.push(addedItem)
    }
  }
  
  res.send(resData.map(item => item.localId));
  
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
