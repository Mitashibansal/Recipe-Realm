import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setRecipes,
  setQuery,
  setLoading,
  setPage,
  setTotalResults,
  setFilters,
  setSort
} from "./Redux/reducer"; // Import actions from your slice
import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const { recipes, query, loading, page, totalResults, filters, sort } = useSelector((state) => state.recipes); // Ensure the reducer is properly connected in your store

  const apiKey = "YOUR_API_KEY";
  const resultsPerPage = 10;

  const fetchRecipes = async (pageNumber = 0) => {
    if (!query) return;

    dispatch(setLoading(true));
    try {
      const offset = pageNumber * resultsPerPage;

      let calorieParams = {};
      if (filters.calories) {
        const [minCalories, maxCalories] = filters.calories.split("-").map(Number);
        calorieParams = {
          minCalories,
          maxCalories,
        };
      }

      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            query,
            apiKey,
            number: resultsPerPage,
            offset,
            ...filters,
            ...calorieParams,
            sort,
          },
        }
      );

      dispatch(setRecipes(response.data.results));
      dispatch(setTotalResults(response.data.totalResults));
      dispatch(setPage(pageNumber));
    } catch (error) {
      console.error("Error fetching recipes", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (query) {
      fetchRecipes();
    }
  }, [query, filters, sort]);


  return (
    <div className="App">
      <h1>Recipe Realm</h1>
      <input
        type="text"
        placeholder="Search ingredients"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))} //Dispatch setQuery action
      />
      <button onClick={() => fetchRecipes(0)}>Find Recipes</button>

      {/* Filter Section */}
      <div>
        <select
          value={filters.diet || ""}
          onChange={(e) => dispatch(setFilters({ ...filters, diet: e.target.value }))
          }>
          <option value="">Diet</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="gluetenFree">Gluten-Free</option>
        </select>
        <select
          value={filters.cuisine || ""}
          onChange={(e) => dispatch(setFilters({ ...filters, cuisine: e.target.value }))
          }>
          <option value="">Cuisine</option>
          <option value="italian">Italian</option>
          <option value="mexican">Mexican</option>
          <option value="asian">Asian</option>
        </select>
        <select
          value={filters.mealType || ""}
          onChange={(e) => dispatch(setFilters({ ...filters, mealType: e.target.value }))
          }>
          <option value="">Meal Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <select
          value={filters.calories || ""}
          onChange={(e) => dispatch(setFilters({ ...filters, calories: e.target.value }))
          }>
          <option value="">Calories</option>
          <option value="0-1000">0 - 1000</option>
          <option value="1001-2000">1001 - 2000</option>
          <option value="2001-3000">2001 - 3000</option>
        </select>
      </div>

      {/* Sorting section */}
      <div className="sorting">
        <select
          value={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}>
          <option value="popularity">Sort by porpularity</option>
          <option value="time">Sort by Time</option>
          <option value="Healthiness">Sort by Healthiness</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}

      {/* Dispaly Section */}
      <div className="recipes">
        {
          recipes.length > 0 ? (
            recipes.map((recipe, index) => (<div key={index} className="recipe-card">
              <h2>
                {recipe.title}
              </h2>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image" />
              <a
                href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
                target = "blank"
                rel="noopener noreferrer"
                className="recipe-link" >
                View Recipe
              </a>
            </div>))
          ) : (<p>
            No recipes Found</p>)
        }
      </div>

      {/* Pagenation Controls */}
      <div className="pagination">
        <button disabled = {page === 0} onClick={() => fetchRecipes(page - 1)} >
          Previous
        </button>
        <span>
          Page {page + 1} of {Math.ceil(totalResults / resultsPerPage)}
        </span>
        <button disabled = {(page + 1) * resultsPerPage >= totalResults}  onClick={() => fetchRecipes(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}



