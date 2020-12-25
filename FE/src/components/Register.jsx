import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Button from "@material-ui/core/Button";
function Register() {
	// const history = useHistory()
	const [msg, setMsg] = useState("");
	const [image, setImage] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [qualif, setqualif] = useState("");
	const [gender, setGender] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("file", image);
		data.append("upload_preset", "Social");
		data.append("cloud_name", "dsseuwzzr");
		fetch("https://api.cloudinary.com/v1_1/dsseuwzzr/image/upload", {
			method: "post",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				const url = data.url;
				Axios.post(`http://localhost:5000/Register`, {
					name,
					email,
					qualif,
					gender,
					image: url,
				})
					.then((results) => {
						console.log(results);
						if (results.data.message === results.data.message) {
							setMsg(results.data.message);
						}else if(results.data === results.data._id){
							console.log('all good')
						}
					})
					.catch((err) => {
						console.log(err);
					});
				// console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<h1 className="title"> Register yorself</h1>
			<button>
				<Link to="/dashboard">Dashboard</Link>
			</button>
			<form className="reg_form" onSubmit={onSubmit}>
				<h2 className="error">{msg}</h2>
				<div className="name">
					<label> Enter your name : </label>
					<input
						type="text"
						name="name"
						placeholder="Enter fullName .max 15 char"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="email">
					<label> Enter your Email : </label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="class">
					<label>Class: </label>
					<select
						name="qualif"
						value={qualif}
						onChange={(e) => setqualif(e.target.value)}>
						<option value="10th">select</option>
						<option value="10th">10th</option>
						<option value="12th">12th</option>
						<option value="Graduate">Graduate</option>
						<option value="PostGraduate">Post graduate</option>
					</select>
				</div>
				<div className="gender">
					<label>Gender: </label>
					<input
						type="radio"
						name="gender"
						value="male"
						onChange={(e) => setGender(e.target.value)}
						required
					/>
					<label>Male</label>
					<input
						type="radio"
						name="gender"
						value="female"
						onChange={(e) => setGender(e.target.value)}
						required
					/>
					<label>Female</label>
				</div>
				<div className="image">
					<label>Select image: </label>
					<input
						type="file"
						name="image"
						onChange={(e) => setImage(e.target.files[0])}
					/>
				</div>

				{/* <button type="submit">Submit</button> */}
				<div className="button">
					<Button type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
}

export default Register;
