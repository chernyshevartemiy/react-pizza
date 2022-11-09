import "./scss/app.scss";
import Header from "./components/header/Header";
import React from "react";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";

export const SearchContext = React.createContext('')

function App() {
const [searchValue, setSearchValue] = React.useState('');
	return (
		<div className="wrapper">
			<SearchContext.Provider value = {{searchValue, setSearchValue}}>
			<Header/>
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
			</SearchContext.Provider>
		</div>
	);
}

export default App;
