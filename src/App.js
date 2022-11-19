import "./scss/app.scss";
import Header from "./components/header/Header";
import React from "react";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import {Routes, Route} from "react-router-dom";
import Cart from "./components/pages/Cart";
import FullPizza from "./components/fullpizza/fullPizza";
import MainLayout from "./layouts/MainLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/pizza/:id" element={<FullPizza/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
