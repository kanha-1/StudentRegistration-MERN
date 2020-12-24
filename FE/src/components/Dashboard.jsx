import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link} from "react-router-dom"
function Dashboard() {
	const [data, setData] = useState([]);
	console.log(data)
	useEffect(() => {
		Axios.get(`http://localhost:5000/getallstudents`).then((result) => {
			setData(result.data);
		});
	}, []);
	return (
		<div>
				<h1 className="title">All Registered User</h1>
				<button>
				<Link to="/">Back to register</Link>
			</button>
			<div>
				{data.map((item) => {
					console.log(item)
					return (
						<div className="parend_div">
							<div className="img_div">
								<img src={item.image} alt="user image" />
							</div>
							<div className="details">
								<h2>Name: {item.name}</h2>
								<h3>Email: {item.email}</h3>
								<h3>Qualifcation :{item.qualif}</h3>
								<h3>Gender: {item.gender}</h3>
							</div>
							<p>Time: {item.createdAt}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Dashboard;
