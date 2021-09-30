import produce from "immer";
import reducer, { initialState } from "../reducer";

import { defaultActions } from "../actions.creator";

describe("app Reducer", () => {
  let state = null;
  beforeEach(() => {
    state = {
      ...initialState,
    };
  });

  it("should return initial state", () => {
    const expected = { ...state };
    expect(reducer(state, {})).toStrictEqual(expected);
  });

  it("defaultAction handler", () => {
    const expected = produce(state, (draft) => {
      draft.defaultProp = "default";
    });
    expect(reducer(state, defaultActions())).toStrictEqual(expected);
  });
});
