import React from "react";
import { storiesOf } from "@storybook/react";
import List from "./List";
import ListItem from "./ListItem";

storiesOf("List", module)
  .add("List", () => (
    <List>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2 that is really really really really really really really really really long</ListItem>
      <ListItem>List Item 3</ListItem>
    </List>
  ))
  .add("With custom colour", () => (
    <List color="red">
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2 that is really really really really really really really really really long</ListItem>
      <ListItem>List Item 3</ListItem>
    </List>
  ))
  .add("With custom font size and line height", () => (
    <List fontSize={ 0 } lineHeight="smallTextBase">
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2 that is really really really really really really really really really long</ListItem>
      <ListItem>List Item 3</ListItem>
    </List>
  ))
  .add("With compact spacing", () => (
    <List compact>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2 that is really really really really really really really really really long</ListItem>
      <ListItem>List Item 3</ListItem>
    </List>
  ));
