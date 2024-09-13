import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  const listUniqueCategories = () => {
    const UniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(UniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white
         ${selectedCategory === "All" && "bg-green-500 : text-white"}`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white
         ${selectedCategory === category && "bg-green-500 : text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;

{
  /* <button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white'>
Lunch
</button>

<button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white'>
BreakFast
</button>

<button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white'>
Dinnner
</button>

<button className='px-3 py-2 bg-gray-200 rounded-lg font-bold hover:bg-green-500 hover:text-white'>
Snacks
</button> */
}
