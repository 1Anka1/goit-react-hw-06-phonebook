import { configureStore, createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

const increment = createAction('myValue/increment');
const decrement = createAction('myValue/decrement');

const myReduce = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});
export const store = configureStore({
  reducer: {
    myValue: myReduce,
  },
});
