import { TodoType, TodoState } from '@/@types/global';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addTodo: (state, action: PayloadAction<TodoType | TodoType[]>) => {
      if (Array.isArray(action.payload)) {
        state.todos = [...state.todos, ...action.payload];
      } else {
        state.todos.unshift(action.payload);
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;