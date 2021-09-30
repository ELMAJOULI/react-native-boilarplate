import { combineReducers } from "redux";
import appReducer from "../containers/Home/store/reducer";

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    app: appReducer.reducer,
    ...injectedReducers,
  });
}
