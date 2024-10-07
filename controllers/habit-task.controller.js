const TaskModel = require("../models/habit-task");

const create = async (req, res) => {
  
  const resData = [];
  
  for(let item of req.body.tasks){
    
    item.createdBy = "yp";
    item._id = item.id;
    
    delete item.id;
    item.syncStatus = 1;
    
    const addedItem = await TaskModel.findOneAndUpdate({ _id: item._id }, {...item}, { upsert: true, new: true, setDefaultsOnInsert: true });
    
    // const addedItem = await newTask.save();
    if (addedItem.err) {
      res.send("error saving new habit task");
    } else {
      resData.push(addedItem)
    }
  }
  
  res.send(resData.map(uploadedItem => uploadedItem._id));
  
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
