import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectApp = (state) => state.homeReducer || initialState;

const getDefaultProp = () =>
  createSelector(selectApp, (appState) => appState.defaultProp);

export { getDefaultProp };
