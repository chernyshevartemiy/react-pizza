import React from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState({});
  const { id } = useParams();
  const navigate = useNavigate()
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://630c81af83986f74a7c2ada9.mockapi.io/items/${id}`)
        setPizza(data)
      } catch (error) {
        alert('ошибка при получении пиццы!')
        navigate('/')
      }
    }
    fetchPizza();
  }, [])
  if (!pizza) {
    return 'Загрузка'
  }
  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt=""/>
      <h2>
        {pizza.title}
      </h2>
      <h4>{pizza.price} rub</h4>
    </div>
  );
};

export default FullPizza;