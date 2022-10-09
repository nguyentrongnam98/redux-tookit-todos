import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//  export const getTodos = () => async dispatch => {
// 	try {
// 		const response = await axios.get(
// 			'https://jsonplaceholder.typicode.com/todos?_limit=5'
// 		)
// 		dispatch(todosFetched(response.data))
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
export const getTodos = createAsyncThunk("todos/todosFetched", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
});

export const addTodo = createAsyncThunk("todos/todoAdded", async (title) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  };

  await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);

  return newTodo;
});

export const deleteTodo = createAsyncThunk(
  "todos/todoDeleted",
  async (todoId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    return todoId;
  }
);
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
  },
  reducers: {
    // addTodo: {
    //   reducer: (state, action) => {
    //     state.todoList.unshift(action.payload);
    //   },
    //   prepare: (title) => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         completed: false,
    //       },
    //     };
    //   },
    // },
    markCompleted: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
    // deleteTodo: (state, action) => {
    //   const todoId = action.payload;
    //   state.todoList = state.todoList.filter((todo) => todo.id !== todoId);
    // },
    todosFetched(state, action) {
      state.todoList = action.payload;
    },
  },
  extraReducers: {
    // get todos
    [getTodos.pending]: (state, action) => {
      console.log("Fetching data ...");
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log("Get todo failded !");
    },
    // add todo
    [addTodo.fulfilled]: (state, action) => {
      console.log(action.payload,123);
      state.todoList.unshift(action.payload);
    },

    // Delete todo
    [deleteTodo.fulfilled]: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== todoId);
    },
  },
});
export const todosReducer = todoSlice.reducer;
export const todosSelector = (state) => state.todosReducer.todoList;
export const {
  markCompleted,
  // addTodo,
  // deleteTodo,
  todosFetched,
} = todoSlice.actions;
