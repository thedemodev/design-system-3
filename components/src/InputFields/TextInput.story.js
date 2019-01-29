import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./TextInput"
import List from "../List/List";
import ListItem from "../List/ListItem";

storiesOf("TextInput", module)
  .add("TextInput", () => (
    <TextInput
      labelText = "Text Input"
      id = "textinput"  
    />
  ))
  ;
