import { render } from "@redwoodjs/testing/web";

import PageCenter from "./PageCenter";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("PageCenter", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<PageCenter />);
    }).not.toThrow();
  });
});
