import React from "react";
import * as ReactDOM from "react-dom";
import "./style.scss";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Listings from "./Components/Listings";
import About from "./Components/About";
import NavigationBar from "./Components/NavigationBar";

ReactDOM.render(
	<Router>
		<NavigationBar />
		<Routes>
			<Route path="/" element={<Dashboard />}/>
			<Route path="/listings" element={<Listings />}/>
			<Route path="/about" element={<About />}/>
		</Routes>
	</Router>,
	document.getElementById("root")
);