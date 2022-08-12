import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import {v4 as uuidv4 } from "uuid";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers: {
        addExpense(state, { payload } ){
            const { description = '', note = '', amount = 0, createdAt = 0 } = payload;
            state.push({
                id: uuidv4(),
                description,
                note,
                amount,
                createdAt,
            }) 
        },
        removeExpense: (state, { payload }) => {
            const { id } = payload;
            return state.filter((expense) => {
                return id !== expense.id;
            })
        },
         
        editExpense(state, { payload } ){
            const { id, updates } = payload;
            return state.map((expense) => {
                if(id === expense.id){
                    return {
                        ...expense,
                        ...updates
                    }
                }else {
                    return expense;
                }
            })
        }
    }
});

const { addExpense, removeExpense, editExpense } = expensesSlice.actions;

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    },
    reducers: {
        setTextFilter(state, { payload }){
           return {...state, text: payload}
        },

        sortByDate(state){
           return {...state, sortBy: 'date'}
        },

        sortByAmount(state){
            return {...state, sortBy: 'amount'}
        },

        setStartDate(state, action){
            return {...state, startDate: action.payload}
        },

        setEndDate(state, action){
            return {...state, endDate: action.payload}
        }
    }
});

const { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } = filtersSlice.actions;

function getVisibleExpense(expenses, { text, sortBy, startDate, endDate }){
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
        const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt > b.createdAt;
        } else if(sortBy === 'amount'){
            return a.amount > b.amount;
        }
    });
}

const store = configureStore({
    reducer: {
        expenses: expensesSlice.reducer,
        filters: filtersSlice.reducer,
    }
});

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpense(state.expenses, state.filters);
//     console.log(visibleExpenses);
// })

// store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000}));
// store.dispatch(addExpense({description: 'Bill', amount: 5600}));

// const state = store.getState();
// // store.dispatch(removeExpense({ id: state.expenses[0].id }))

// store.dispatch(editExpense(
//      { id: state.expenses[1].id, updates: { description: 'Water Bill', amount: 60, createdAt: 1000}}
//     ))

// // store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setEndDate(36100));

// store.dispatch(setStartDate());

const demoState = {
    expenses: [{
        id: 'euguhg',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}