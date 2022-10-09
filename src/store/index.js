
import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from './reducers/todoSlice';

const store = configureStore({
    reducer:{
        todosReducer 
    }
})

export default store;


