const express = require('express')
const app = express()
const cors = require("cors");
PORT = process.env.PORT || 5000
require('./db')

var whitelist = ["http://localhost:3000",];
var corsOptions = {
	credentials: true, //to allow cookes from front-end
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
};


app.use(cors(corsOptions));
// import router
const studentData = require('./router/studentRouter')

// middlewere
app.use(express.json());

// route middlewere
app.use(studentData)

//Testing application
app.get('/', (req, res) =>{
    res.send('hello world')
})
// lstening port
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})