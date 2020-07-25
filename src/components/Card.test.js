import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("expect to render card component", () => {
  const wrapper = shallow(<Card name="test" email="email@tet.com" />);
  expect(wrapper.debug()).toMatchSnapshot();
});
