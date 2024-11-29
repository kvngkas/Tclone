import { Todo, TodoState } from "@/types/enums";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodoState = {
  todoData: [], // Array to hold todos
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Reducer to add a new todo object
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoData.push(action.payload); // Add the new todo to the array
    },

    // Reducer to set the todoData array with fetched data
    getTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todoData = action.payload; // Replace todoData with the fetched list
    },
  },
});

// Export the actions and reducer
export const { addTodo, getTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
