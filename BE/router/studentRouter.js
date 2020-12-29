const routers = require("express").Router();
const StudentsM = require("../model/Students");
const { registervalidate } = require("../validation");
routers.post("/Register", async (req, res) => {
	// check errors validation
	const { error } = registervalidate(req.body);
	if (error) return res.json({message:error.details[0].message});
	// check emial
	const emailexit = await StudentsM.findOne({ email: req.body.email });
	if (emailexit) return res.json({message:"email alredy registered"});

	// save the data
	const student = new StudentsM({
		name: req.body.name,
		email: req.body.email,
		qualif: req.body.qualif,
		gender: req.body.gender,
		image: req.body.image,
	});
	try {
		const savedStudent = await student.save();
		res.status(200).json({message:"Register successfully",user:savedStudent});
	} catch (err) {
		res.status(400).send(err.message);
	}
});
routers.get("/getallstudents", async (req, res) => {
    try{
        const allStudent = await StudentsM.find({}).sort("-createdAt");
        res.status(200).send(allStudent);
    } catch(err){
        res.status(400).send(err.message);
    }
	
});

module.exports = routers;
