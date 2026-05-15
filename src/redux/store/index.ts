import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/fetchReducers";
import playerReducer from "../reducers/playerReducers";

const mainReducer = combineReducers({
    fetch: fetchReducer,
    player: playerReducer,
})

const store = configureStore({
    reducer: mainReducer,
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof mainReducer>;
export default store