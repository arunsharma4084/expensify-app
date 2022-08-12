import { createSlice } from '@reduxjs/toolkit';

function getFirstDayOfMonth(date){
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

function getLastDayOfMonth(date){
    return new Date(date.getFullYear(), date.getMonth()+1, 0)
}
const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        text: '',
        sortBy: 'date',
        startDate: Date.parse(getFirstDayOfMonth(new Date())),
        endDate: Date.parse(getLastDayOfMonth(new Date()))
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

export const { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } = filtersSlice.actions;
export default filtersSlice.reducer;