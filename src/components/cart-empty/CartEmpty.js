import React from 'react';
import cartEmptyImg from "../../assets/img/empty-cart.png"
import {Link} from "react-router-dom";
const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>корзина пустая 😕</h2>
        <p>вероятней всего, вы не заказывали еще пиццу
          <br/>
          для того, чтобы заказать пиццу, перейдите на главную страницу
        </p>
        <img src={cartEmptyImg} alt=""/>
        <Link to="/" className="button button--black" href="/">
          <span>вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;