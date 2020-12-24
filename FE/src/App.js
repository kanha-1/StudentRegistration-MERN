import React from "react";
import { Route,Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";

function App() {
	return (
		<div className="App">
			
			<Router>
				<Route exact path="/" component={Register} />
				<Route exact path="/dashboard" component={Dashboard} />
			</Router>
		</div>
	);
}

export default App;
