var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HabitTask = new Schema(
	{
    _id: String,
		title: String,
		note: String,
		author: String,
		assignedTo: String,
		parent: String,
		childs: [String],
		category: [String],
		type: String,
		tags: [String],
    extraData: {
      count: Number,
      unit: String
    },
    isCompleted: Boolean,
    createdAt: String,
    createdBy: String
	},
	{ timestamps: true, _id: false },
);

module.exports = mongoose.model("HabitTask", HabitTask);