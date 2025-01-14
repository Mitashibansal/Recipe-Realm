import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = {
    recipes: [],
    query: "",
    loading: false,
    page: 0,
    totalResults: 0,
    filters: {
        diet: "",
        cuisine: "",
        mealType: "",
        minCalories: 0,
        maxCalories: 1000,
        // calories: "",
    },
    sort: "popularity",// Default sorting by popularity
};

// Create a slice
const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        setRecipes(state, action){
            state.recipes = action.payload;
        },
        setQuery(state, action){
            state.query = action.payload;
        },
        setLoading(state,action){
            state.loading = action.payload;
        },
        setPage(state, action){
            state.page = action.payload;
        },
        setTotalResults(state,action){
            state.page = action.payload;
        },
        setFilters(state, action){
            state.filters = { ...state.filters, ...action.payload};
        },
        setSort(state,action){
            state.sort = action.payload;
        },
    },
});

export const {
    setRecipes,
    setQuery,
    setLoading,
    setPage,
    setTotalResults,
    setFilters,
    setSort,
} = recipeSlice.actions;

export default recipeSlice.reducer;