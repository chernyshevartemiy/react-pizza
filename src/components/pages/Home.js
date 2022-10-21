import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizza-block/PizzaBlock";
import Skeleton from "../pizza-block/Skeleton";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({name: "популярности(DESC)", sortProperty: "rating"});
  const sortBy = sortType.sortProperty.replace('-', '');
  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const category = categoryId > 0 ? `category=${categoryId}` : '';

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://630c81af83986f74a7c2ada9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
    window.scrollTo(0, 0)
  }, [categoryId, sortType]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
        <Sort value={sortType} onClickSortType={(type) => setSortType(type)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
            <Skeleton key={index}/>
          ))
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
