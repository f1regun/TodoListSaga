import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

export type TasksState = {
  data: Task[];
  fetchTasksStatus: string;
  deleteTaskStatus: string;
  addTaskStatus: string;
  toggleTaskStatus: string;
}

const initialState: TasksState = {
  data: [],
  fetchTasksStatus: "idle",
  deleteTaskStatus: "idle",
  addTaskStatus: "idle",
  toggleTaskStatus: "idle",
}


export const todoSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchTasksPending: (state) => {
      state.fetchTasksStatus = "pending";
    },
    fetchTasksSucces: (state, action) => {
      state.fetchTasksStatus = "success";
      state.data = action.payload; 
    },
    fetchTasksFailed: (state, action: PayloadAction<string>) => {
      state.fetchTasksStatus = "failed";
    },
    deleteTaskPending: (state, action) => {
      state.deleteTaskStatus = "pending";
      state.data = state.data.filter((task) => task.id !== action.payload);
    },
    deleteTaskSucces: (state) => {
      state.deleteTaskStatus = "success";
    },
    deleteTaskFailed: (state, action: PayloadAction<string>) => {
      state.deleteTaskStatus = "failed";
    },
    addTaskPending: (state, action: PayloadAction<Task>) => {
      state.addTaskStatus = "pending";
    },
    addTaskSucces: (state, action) => {
      state.addTaskStatus = "success";
      state.data.push(action.payload)
    },
    addTaskFailed: (state, action: PayloadAction<string>) => {
      state.addTaskStatus = "failed";
    },
    toggleTaskPending: (state, action) => {
      state.toggleTaskStatus = "pending";
      const index = state.data.findIndex(task => task.id === action.payload.id);
      state.data[index].completed = action.payload.completed;
    },
    toggleTaskSucces: (state) => {
      state.toggleTaskStatus = "success";
    },
    toggleTaskFailed: (state, action: PayloadAction<string>) => {
      state.toggleTaskStatus = "failed";
    },
  },
});



export const { 
  fetchTasksPending, fetchTasksSucces, fetchTasksFailed, 
  deleteTaskPending, deleteTaskSucces, deleteTaskFailed,
  addTaskPending, addTaskSucces, addTaskFailed,
  toggleTaskPending, toggleTaskSucces, toggleTaskFailed,
} = todoSlice.actions;

export default todoSlice.reducer;

