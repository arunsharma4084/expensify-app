import { createSlice, configureStore } from "@reduxjs/toolkit";
console.log("redux 101");

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, { payload = 1 }) => { state.count += payload },
        decrement(state, { payload = 1}) { state.count -= payload },
        reset: state => { state.count = 0 },
        set: (state, { payload }) => { state.count = payload}
    }
});

const { increment, decrement, reset, set } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer,
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(increment());

// unsubscribe();

store.dispatch(increment(5));
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(set(100));

