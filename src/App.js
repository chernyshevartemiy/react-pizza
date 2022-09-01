import "./scss/app.scss";
import Header from "./components/header/Header";
import React from "react";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart"

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
						<Route path = "/cart" element = {<Cart/>}/>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
