import produce from "immer";
import { DEFAULT_ACTION } from "./actions";

export const HOME_REDUCER = "homeReducer";

export const initialState = {
  defaultProp: null,
};

const homeReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    if (type === DEFAULT_ACTION) {
      draft.defaultProp = "default";
    }
  });

export default {
  key: HOME_REDUCER,
  reducer: homeReducer,
};
