import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

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
                createdAt
            }) 
        },
        removeExpense: (state, { payload }) => {
            const { id } = payload;
            return state.filter((expense) => {
                return id !== expense.id;
            })
        },
         
        editExpense(state, { payload } ){
            const { id } = payload;
            const updates = payload.expense;
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

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;