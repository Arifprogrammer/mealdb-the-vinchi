import React from "react";

const Card = ({ product, getProductId }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product.strMealThumb} alt="food" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.strMeal}</h2>
          <p>Price: ${product.idMeal.slice(0, 2)}</p>
          <span className="card-actions" onClick={() => getProductId(product)}>
            <button className="btn btn-accent py-0 px-6">Add to Cart</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;