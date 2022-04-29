import authReducer from "../features/reducers/auth";
import testReducer from "../features/reducers/test";

const rootReducer = { auth: authReducer, test: testReducer }

export default rootReducer;
