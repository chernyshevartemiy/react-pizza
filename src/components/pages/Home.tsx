import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import PizzaBlock from "../pizza-block/PizzaBlock";
import Skeleton from "../pizza-block/Skeleton";
import Pagination from "../pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, setCategoryId, setCurrentPage, setFilters} from "../../redux/slices/filterSlice";
import qs from "qs"
import {useNavigate} from "react-router-dom";
import {list} from "../sort/Sort";
import {fetchPizzas, selectPizzaData} from "../../redux/slices/pizzaSlice";

const Home:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)
  const {sort, categoryId, currentPage, searchValue} = useSelector(selectFilter)
  const {items, status} = useSelector(selectPizzaData)
  const onClickCategory = (idx: number) => {
    dispatch(setCategoryId(idx))
  }
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }
  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (<Skeleton key={index}/>));
  const getPizzas = async () => {
    const search = searchValue ? `&search=${searchValue}` : '';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    // fetch(`https://630c81af83986f74a7c2ada9.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setLoading(false);
    //   });
    dispatch(
      // @ts-ignore
      fetchPizzas({
      search,
      category,
      sortBy,
      order,
      currentPage,
    }))
    window.scrollTo(0, 0);
  }
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty)
      const {currentPage, categoryId} = params;
      // or just {...params}
      dispatch(setFilters({
          currentPage,
          categoryId,
          sort
        }
      ))
      isSearch.current = true
    }
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0);
      getPizzas()
  }, [categoryId, sort.sortProperty, currentPage, searchValue]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      })
      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [categoryId, sort.sortProperty, currentPage])

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory}/>
        <Sort/>
      </div>
      <h2 className="content__title">все пиццы</h2>
      {status === 'error' ? (
        <div className='content__error-info'>
          <h2>произошла ошибка 😕</h2>
          <p>к сожалению, не удалось получить питсы, попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className='content__items'>{status === 'loading' ? skeletons : pizzas}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  );
}

export default Home;
