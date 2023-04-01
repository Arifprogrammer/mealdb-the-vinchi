import React from "react";

const Cart = ({ carts }) => {
  const selectedItems = carts.reduce(
    (initial, current) => initial + current.quantity,
    0
  );
  const total = carts
    .map((cart) => cart.idMeal.slice(0, 2) * cart.quantity)
    .reduce((p, c) => p + c, 0);

  return (
    <div className="p-6 text-xl font-semibold space-y-4 bg-slate-50 sticky top-0">
      <h1 className="text-center">Cart</h1>
      <h1 className="">Selected Items: {selectedItems}</h1>
      <ol className="list-disc ps-3">
        {carts.map((cart) => (
          <li>
            {cart.strMeal} <span>{cart.quantity}</span>
          </li>
        ))}
      </ol>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
