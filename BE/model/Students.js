const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
	name: {
		type: "string",
		required: true,
		min: 5,
		max: 50,
    },
    email: {
        type: "string",
        required: true,
        max: 255,
        min: 6,
    },
    qualif:{
        type:"string",
        required: true,
    },
    gender:{
        type:"string",
        required: true,
    },
    image:{
        type:"string",
        required: true,
    }
},
{ timestamps: true },
);
module.exports = mongoose.model("students",studentSchema)
