import React from "react";

function Categories() {
	const [pizza, setPizza] = React.useState(0);

	function onClickCategory(index) {
		setPizza(index);
	}

	const categories = [
		"все",
		"мясные",
		"вегетарианская",
		"гриль",
		"острые",
		"закрытые",
	];

	return (
		<div className="categories">
			<ul>
				{categories.map((e, i) => {
					return (
						<li
							onClick={() => onClickCategory(i)}
							className={i === pizza ? "active" : ""}
						>
							{e}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Categories;
