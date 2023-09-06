import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [isSelectedCategory, setisSelectedCategory]= useState("All")

const itemsToShow = items.filter((food) => {
  if (isSelectedCategory === "All"){
    return true;
  }else{
    return food.category === isSelectedCategory
  }
})

console.log(itemsToShow)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setisSelectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" >
        {itemsToShow.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
