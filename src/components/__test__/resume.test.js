import React from "react";
import { mount } from "enzyme";
import Resume from "components/header";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Resume />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has container wrapper", () => {
  expect(wrapped.find(".container").length).toEqual(1);
});
