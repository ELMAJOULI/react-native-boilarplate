import { defaultActionWorker } from "../saga";
import * as actionCreators from "../actions.creator";

describe("default  saga", () => {
  it("default action ", () => {
    const executionContext = defaultActionWorker(actionCreators.defaultActions);
    const { done } = executionContext.next();
    expect(done).toBeTruthy();
  });
});
