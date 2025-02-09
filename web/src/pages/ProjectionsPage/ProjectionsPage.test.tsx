import { render } from "@redwoodjs/testing/web";

import ProjectionsPage from "./ProjectionsPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("ProjectionsPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<ProjectionsPage />);
    }).not.toThrow();
  });
});
