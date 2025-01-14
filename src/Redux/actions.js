//Action Types
export const SET_RECIPES = "SET_RECIPES";
export const SET_QUERY = "SET_QUERY";
export const SET_LOADING = "SET_LOADING";
export const SET_PAGE = "SET_PAGE";
export const SET_TOTAL_RESULTS = "SET_TOTAL_RESULTS";
export const SET_FILTERS = "SET_FILTERS";
export const SET_SORT = "SET_SORT";

//Action to set recipes
export const setRecipes = (recipes) =>({
    type: SET_RECIPES,
    payload: recipes,
});

//Action to set the search query
export const setQuery = (query) => ({
    type: SET_QUERY,
    payload: query,
});

// Action to set the loading state
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});

//Action to set the current page 
export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page,
});

//Action to set total results
export const setTotalResults = (totalResults) => ({
    type: SET_TOTAL_RESULTS,
    payload: totalResults,
});

//Action to set filters
export const SET_FILTER = (filters) => ({
    type: SET_FILTERS,
    payload: filters,
});

// Action to set sort option 
export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
});


