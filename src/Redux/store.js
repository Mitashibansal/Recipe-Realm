import {configureStore} from "@reduxjs/toolkit";
import recipeReducer from "./reducer";


const store = configureStore({
        reducer: {
            recipes: recipeReducer,
        },
    })

export default store; 
