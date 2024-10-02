var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HabitTask = new Schema(
	{
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
	{ timestamps: true },
);
// /BeforeDate/AfterDate/InBetween of dates/name&desc

module.exports = mongoose.model("HabitTask", HabitTask);