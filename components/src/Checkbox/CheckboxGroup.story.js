import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";
import Field from "../Field/Field";

storiesOf("CheckboxGroup", module)
  .add("Checkbox Group", () => (
    <CheckboxGroup name="settingSelection" defaultValue="a">
      <Checkbox value="a" labelText="Option A" />
      <Checkbox value="b" labelText="Option B" />
      <Checkbox value="c" labelText="Option C" />
    </CheckboxGroup>
  ))
  .add("Checkbox Group Field", () => (
    <Field labelText="Setting Selection" helpText="Select a setting from the menu below:">
      <CheckboxGroup name="settingSelection" defaultValue="a">
        <Checkbox value="a" labelText="Option A" />
        <Checkbox value="b" labelText="Option B" />
        <Checkbox value="c" labelText="Option C" />
      </CheckboxGroup>
    </Field>
  ))
  .add("Set to disabled", () => (
    <CheckboxGroup disabled name="settingSelection" defaultValue="a">
      <Checkbox value="a" labelText="Option A" />
      <Checkbox value="b" labelText="Option B" />
      <Checkbox value="c" labelText="Option C" />
    </CheckboxGroup>
  ))
  .add("Controlled", () => (
    <CheckboxGroup
      name="settingSelection" onChange={ () => {} }
      checkedValue={ ["a", "c"] }
    >
      <Checkbox value="a" labelText="Option A" />
      <Checkbox value="b" labelText="Option B" />
      <Checkbox value="c" labelText="Option C" />
      <Checkbox value="d" labelText="Option D" />
      <Checkbox value="e" labelText="Option E" />
    </CheckboxGroup>
  ));
