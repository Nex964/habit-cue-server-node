const UserModel = require("../models/user");

const create = async (req, res) => {
  try {
    const { userId, name } = req.body;

    if (!userId) {
      return res.status(400).send({ error: "userId is required" });
    }

    const userData = { userId };
    if (name) userData.name = name;

    // Use `upsert` to update if exists or insert a new record
    const addedItem = await UserModel.findOneAndUpdate(
      { userId },
      { $set: userData },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    if (!addedItem) {
      return res.status(500).send({ error: "Failed to save user data" });
    }

    // Send back the ID of the updated/created document
    return res.status(200).send({ id: addedItem._id });
  } catch (error) {
    console.error("Error in create function:", error);
    return res.status(500).send({ error: "An internal error occurred" });
  }
};


const get = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).send({ error: "userId is required" });
    }

    const user = await UserModel.findOne({ userId });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    return res.status(200).send(user);
  } catch (error) {
    console.error("Error in getUser function:", error);
    return res.status(500).send({ error: "An internal error occurred" });
  }
};

module.exports = { create, get };
