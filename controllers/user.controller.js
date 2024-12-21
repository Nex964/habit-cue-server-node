const UserModel = require("../models/user");

const create = async (req, res) => {
  
  const userId = req.body.userId;
  
  const userData = {
    userId
  };
  
  const resData = {};
  
  const addedItem = await UserModel.findOneAndUpdate({ userId: userId }, {userId}, { upsert: true, new: true, setDefaultsOnInsert: true });
    
  // const addedItem = await newTask.save();
  if (addedItem.err) {
    res.send("error saving new habit task");
  } else {
    resData.push(addedItem)
  }

res.send(resData.map(uploadedItem => uploadedItem._id));
  
};