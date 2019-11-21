import React from "react";
import { create } from "react-test-renderer";
import ReactRouter from "react-router";

describe("react router", () => {
  it("works", () => {
    let root = create(<ReactRouter message="hello world" />);
    expect(root.toJSON()).toMatchInlineSnapshot(`
      <p>
        hello world
      </p>
    `);
  });
});
