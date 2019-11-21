import React from "react";
import { create } from "react-test-renderer";
import ReactRouterNative from "react-router-native";

describe("react router native", () => {
  it("works", () => {
    let root = create(<ReactRouterNative message="hello world" />);
    expect(root.toJSON()).toMatchInlineSnapshot();
  });
});
