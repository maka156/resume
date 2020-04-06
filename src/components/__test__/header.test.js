import React from "react";
import { mount } from "enzyme";
import Header from "components/header";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Header />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has two buttons", () => {
  expect(wrapped.find("button").length).toEqual(2);
});

it("has two images", () => {
  expect(wrapped.find("img").length).toEqual(2);
});
