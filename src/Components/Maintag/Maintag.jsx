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
    const matchedCart = carts.find((pd) => pd.idMeal === product.idMeal);
    if (!matchedCart) {
      product.quantity = 1;
      setCart([...carts, product]);
    } else {
      matchedCart.quantity += 1;
      const deductExistingCart = carts.filter(
        (pd) => pd.idMeal !== product.idMeal
      );
      const sortCart = [...deductExistingCart, matchedCart];
      sortCart.sort((a, b) => b.quantity - a.quantity);
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
    const getDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    let newCart = [];
    for (const idMeal in getDataFromLocalStorage) {
      if (products.length > 0) {
        const matchedProduct = products.find((pd) => pd.idMeal === idMeal);
        const storedQuanitity = getDataFromLocalStorage[idMeal];
        matchedProduct.quantity = storedQuanitity;
        newCart.push(matchedProduct);
        // setCart([...carts, matchedProduct]);   //! won't work properly because setCart function is an asynchronous process.
      }
    }
    setCart(newCart);
  }, [products]);
  return (
    <div>
      <main className="grid grid-cols-[3fr_1fr] py-12">
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
