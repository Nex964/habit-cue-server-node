const UserModel = require("../models/user");

const create = async (req, res) => {
  
  const resData = [];
  
  for(let item of req.body.tasks){
    
    if(item.createdBy === undefined){
      item.createdBy = "yp"; 
    }
    item._id = item.id;
    
    delete item.id;
    item.syncStatus = 1;
    
    const addedItem = await UserModel.findOneAndUpdate({ _id: item._id }, {...item}, { upsert: true, new: true, setDefaultsOnInsert: true });
    
    // const addedItem = await newTask.save();
    if (addedItem.err) {
      res.send("error saving new habit task");
    } else {
      resData.push(addedItem)
    }
  }
  
  res.send(resData.map(uploadedItem => uploadedItem._id));
  
};