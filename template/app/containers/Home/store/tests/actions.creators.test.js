import { defaultActions } from "../actions.creator";
import { DEFAULT_ACTION } from "../actions";

describe("App actions", () => {
  it("has a type of DEFAULT_ACTION", () => {
    const expected = {
      type: DEFAULT_ACTION,
    };
    expect(defaultActions()).toEqual(expected);
  });
});
