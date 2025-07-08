import { configureStore } from "@reduxjs/toolkit";
import   todoReducer from "../features/todo/todoSlice";

// first config a store that can be done using this prebuilt method from redux-toolkit;
// and all it takes is the list of all the reducers from all the slice.
// why cuz it's like a manager it(store) is the one how take cares of all the updation and connection of state/data.

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})