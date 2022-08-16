import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "../slices/expensesSlice";
import filtersReducer from "../slices/filtersSlice"

export default function createStore() {
    const store = configureStore({
        reducer: {
            expenses: expensesReducer,
            filters: filtersReducer,
        }
    });

    return store;
}
