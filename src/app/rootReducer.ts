import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../services/reducers/auth";
import testReducer from "../services/reducers/test";

const rootReducer = combineReducers({ auth: authReducer, test: testReducer })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;