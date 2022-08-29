import "./scss/app.scss";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Sort from "./components/sort/Sort";
import PizzaBlock from "./components/pizza-block/PizzaBlock";
import React from "react";

function App() {
	const [items, setItems] = React.useState([]);
	
	React.useEffect(() => {
		fetch("https://630c81af83986f74a7c2ada9.mockapi.io/items")
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr)
			});
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{items.map((e) => {
							return <PizzaBlock {...e} key={e.id} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
