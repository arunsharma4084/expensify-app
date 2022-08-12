import React from "react";
import { createRoot } from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import createStore from "./store/configureStore";
import { addExpense } from "./slices/expensesSlice";
// import { setTextFilter } from "./slices/filtersSlice";
import getVisibleExpenses from "./selectors/getVisibleExpenses"
import { Provider } from "react-redux"
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = createStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500, createdAt: 1500}));
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1659785080000}));
store.dispatch(addExpense({description: 'Rent', amount: 464300, createdAt: 5400}));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
const root = createRoot(document.getElementById('app'));
root.render(jsx);

