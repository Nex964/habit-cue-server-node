var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HabitTask = new Schema(
	{
		title: String,
		description: String,
		author: String,
		assignedTo: String,
		parentNode: String,
		childNodes: [String],
		category: [String],
		type: String,
		tags: [String],
    isCompleted: Boolean,
	},
	{ timestamps: true },
);
// /BeforeDate/AfterDate/InBetween of dates/name&desc

module.exports = mongoose.model("HabitTask", HabitTask);
