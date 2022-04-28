import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    console.log("foods: ", foods);
    setFoods([...foods, newFood]);
  }

  function handleClick(id) {
    //const newArray = foods.filter(food => food.id !== id);
    const newArray = foods.map(food => {
      if (food.id === id) {
        food.heatLevel++;
        return food;
      } else {
        return food;
      }
    });
    setFoods(newArray);
  }

  const foodsToDisplay = foods.filter((food) => {
    return filterBy === "All" || food.cuisine === filterBy;
    // if (filterBy === "All") {
    //   return true;
    // } else {
    //   return food.cuisine === filterBy;
    // }
  });

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)} >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
