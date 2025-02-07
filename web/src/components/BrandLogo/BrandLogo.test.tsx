import { render } from "@redwoodjs/testing/web";

import BrandLogo from "./BrandLogo";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("BrandLogo", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<BrandLogo />);
    }).not.toThrow();
  });
});
