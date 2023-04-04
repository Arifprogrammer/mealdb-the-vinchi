import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const SingleMealDetails = () => {
  const [meal, setMeal] = useState({});
  const { mealid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadSingleCardData = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const { meals } = await response.json();
      setMeal(meals[0]);
    };
    loadSingleCardData();
  }, []);
  return (
    <div className="flex justify-center py-24">
      <div className="card w-[40rem] bg-base-100 shadow-xl">
        <figure className="py-10">
          <img
            src={meal.strMealThumb}
            alt="Shoes"
            className="rounded-xl w-3/4"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {meal.strMeal}</h2>
          <p>
            <span className="font-semibold tex-xl">Instruction:</span>{" "}
            {meal.strInstructions}
          </p>
          <button onClick={() => navigate(-1)}>
            <ArrowLeftCircleIcon className="h-8 w-8 text-slate-500 mt-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMealDetails;
