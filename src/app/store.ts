import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import todoReducer from '../features/tasks/tasksSlice';
import categoriesReducer from "../comingSoon/categoriesSlice";
import filtersReducer from "../comingSoon/filtersSlice";
import { useSelector, useStore } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
    categories: categoriesReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(sagaMiddleware)
});


sagaMiddleware.run(rootSaga)


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useSelector.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();