const TaskModel = require("../models/habit-task");

const create = async (req, res) => {
  
  const resData = [];
  
  for(let item of req.body.tasks){
    
    if(item.createdBy === undefined){
      item.createdBy = "yp"; 
    }
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


const deleteTasksByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({ error: "userId is required" });
    }

    const result = await TaskModel.deleteMany({ createdBy: userId });

    if (result.deletedCount === 0) {
      return res.status(404).send({ message: "No tasks found for the given userId" });
    }

    res.status(200).send({ message: `Successfully deleted ${result.deletedCount} tasks for userId: ${userId}` });
  } catch (error) {
    console.error("Error in deleteTasksByUserId:", error);
    res.status(500).send({ error: "An internal error occurred" });
  }
};

module.exports = { create, get, deleteTasksByUserId };
