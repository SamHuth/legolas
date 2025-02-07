import { render } from "@redwoodjs/testing/web";

import PageNavigation from "./PageNavigation";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("PageNavigation", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<PageNavigation />);
    }).not.toThrow();
  });
});
