import { render } from "@redwoodjs/testing/web";

import CalendarWrapper from "./CalendarWrapper";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("CalendarWrapper", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<CalendarWrapper />);
    }).not.toThrow();
  });
});
