import "./scss/app.scss";
import Header from "./components/header/Header";
import React from "react";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";

function App() {
	const [searchValue, setSearchValue] = React.useState('')

	return (
		<div className="wrapper">
			<Header searchValue = {searchValue} setSearchValue = {setSearchValue} />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home searchValue = {searchValue} />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
