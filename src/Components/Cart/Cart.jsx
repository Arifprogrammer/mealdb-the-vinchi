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
    <div className="p-6 text-xl font-semibold space-y-4 bg-slate-50 sticky top-5 rounded-xl mr-4">
      <h1 className="text-center">Cart</h1>
      <h1 className="">Selected Items: {selectedItems}</h1>
      <ol className="ps-3 space-y-2">
        {carts.map((cart) => (
          <li className="flex gap-2 items-center" key={cart.idMeal}>
            <img
              src={cart.strMealThumb}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-[#7ff485]"
            />
            <span>
              {cart.strMeal} {cart.quantity}
            </span>
            <br />
          </li>
        ))}
      </ol>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
