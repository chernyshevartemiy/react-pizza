import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizza-block/PizzaBlock";
import Skeleton from "../pizza-block/Skeleton";

function Home() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch("https://630c81af83986f74a7c2ada9.mockapi.io/items")
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setLoading(false);
			});
		window.scrollTo(0, 0)
	}, []);
	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, index) => (
							<Skeleton key={index} />
					  ))
					: items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	);
}

export default Home;
