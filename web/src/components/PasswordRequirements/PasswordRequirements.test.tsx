import { render } from "@redwoodjs/testing/web";

import PasswordRequirements from "./PasswordRequirements";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("PasswordRequirements", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<PasswordRequirements />);
    }).not.toThrow();
  });
});
