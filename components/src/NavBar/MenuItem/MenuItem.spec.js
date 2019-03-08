import React from "react";
import { mount } from "enzyme";
import { MenuItem, SubMenuItem } from "ComponentsRoot";

it("opens the menu when clicked", () => {
  const wrapper = mount(
    <MenuItem key="Menu Item 1" labelText="Menu Item 1">
      <SubMenuItem>Sub Menu 1</SubMenuItem>
      <SubMenuItem>Sub Menu 2</SubMenuItem>
    </MenuItem>
  );

  expect(wrapper.find(SubMenuItem).exists()).toEqual(false);
  console.log(wrapper.debug());

  wrapper.find("button").simulate("click");
  console.log(wrapper.debug());
  expect(wrapper.find(SubMenuItem).exists()).toEqual(true);
});
