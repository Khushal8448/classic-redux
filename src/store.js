import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware);

export default store;
