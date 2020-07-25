import React from "react";

import { shallow } from "enzyme";
import CardList from "./CardList";
it("tests the card list component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "test1",
      email: "test1@rad.com",
    },
  ];
  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(wrapper.debug()).toMatchSnapshot();
});
