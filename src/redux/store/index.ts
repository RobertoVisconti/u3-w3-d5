import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducers";


const mainReducer = combineReducers({
    fetch: fetchReducer,
})

const store = configureStore({
    reducer: mainReducer,
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof mainReducer>;
export default store