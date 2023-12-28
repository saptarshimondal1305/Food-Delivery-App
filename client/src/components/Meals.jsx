import React from "react";
import { useState, useEffect } from "react";
import MealItems from "./MealItems";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
import { backendUrl } from "../url";
const requestConfig={};//request config is created here so that the useHttp doest get into infinite loop
// as after each render a new config will be created if it is declared under function body
function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  const {data:loadedMeals,isLoading,error,sendRequest}=useHttp(`${backendUrl}/meals`,requestConfig,[])
  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  if(error){
    return <Error title="Failed to Fetch Data" message={error}></Error>
  }

  return (
    <>
      <ul id="meals">{loadedMeals.map((meal)=>(<MealItems key={meal.id} meal={meal}/>))}</ul>
    </>
  );
}

export default Meals;
