import React from "react";
import Card from "./Card/Card.jsx";
import Jumbotron from "./Jumbotron/Jumbotron.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />				
			</div>
			<Footer />
		</>
	);
};

export default Home;
