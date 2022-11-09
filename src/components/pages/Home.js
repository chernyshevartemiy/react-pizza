import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizza-block/PizzaBlock";
import Skeleton from "../pizza-block/Skeleton";
import Pagination from "../pagination/Pagination";
import {SearchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId, setCurrentPage} from "../../redux/slices/filterSlice";
import axios from "axios";

function Home() {
  const {sort, categoryId, currentPage} = useSelector((state) => state.filterSlice)
  const dispatch = useDispatch()
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  const onChangePage = (page) => {
    dispatch(setCurrentPage(page))
  }
  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (<Skeleton key={index}/>));
  React.useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    // setLoading(true)
    // fetch(`https://630c81af83986f74a7c2ada9.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setLoading(false);
    //   });

    axios.get(`https://630c81af83986f74a7c2ada9.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`).then((response) => {
      setItems(response.data)
      setLoading(false)
    })
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory}/>
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? skeletons
          : pizzas}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  );
}

export default Home;
