import authReducer from "../services/reducers/auth";
import testReducer from "../services/reducers/test";

const rootReducer = { auth: authReducer, test: testReducer }

export default rootReducer;
