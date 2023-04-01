import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import addToLocalStorage from "../../../resources/fakedb";

const Maintag = () => {
  //! states
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);

  //!functions
  const getProductId = (product) => {
    addToLocalStorage(product.idMeal);
    let newCart = [];
    const matchedCart = carts.find((pd) => pd.idMeal === product.idMeal);
    if (!matchedCart) {
      product.quantity = 1;
      newCart.push(product);
      setCart([...carts, ...newCart]);
    } else {
      matchedCart.quantity += 1;
      const deductExistingCart = carts.filter(
        (pd) => pd.idMeal !== product.idMeal
      );
      const sortCart = [...deductExistingCart, matchedCart];
      sortCart.sort((a, b) => b.quantity - a.quantity);
      // setCart([...deductExistingCart, matchedCart]);
      setCart(sortCart);
    }
  };

  //!effects
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
      );
      const data = await res.json();
      setProducts(data.meals);
    };
    loadData();
  }, []);
  useEffect(() => {
    // console.log(carts);
  }, [carts]);
  return (
    <div>
      <main className="grid grid-cols-[4fr_1fr] py-12">
        <div className="card-conatiner flex justify-center gap-8 flex-wrap">
          {products.map((product) => (
            <Card
              product={product}
              key={product.idMeal}
              getProductId={getProductId}
            ></Card>
          ))}
        </div>
        <div className="cart-container">
          <Cart carts={carts}></Cart>
        </div>
      </main>
    </div>
  );
};

export default Maintag;
