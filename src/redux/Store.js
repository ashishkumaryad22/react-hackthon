import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./reducers/Index";

const store = configureStore({ reducer: rootReducers });

export default store;
