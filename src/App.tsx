import "./scss/app.scss";
import React from "react";
import Home from "./components/pages/Home";
import {Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'./components/pages/Cart'))
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'./components/fullpizza/fullPizza'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./components/pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="*" element={
          <React.Suspense>
            <NotFound/>
          </React.Suspense>
        }/>
        <Route path="/pizza/:id" element={
          <React.Suspense>
            <FullPizza/>
          </React.Suspense>
        }/>
        <Route path="/cart" element={
          <React.Suspense>
            <Cart/>
          </React.Suspense>
        }/>
      </Route>
    </Routes>
  );
}

export default App;
