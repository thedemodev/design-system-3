import React from "react";
import { storiesOf } from "@storybook/react";
import Toggle from "./Toggle";
import Field from "../Field/Field";

class ToggleStateDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage(toggled, id) {
    const message = `Toggle id: (${id}) has been turned ${toggled ? "on!" : "off!"}`;
    this.setState({ message });
  }

  render() {
    const { message } = this.state;
    return (
      <React.Fragment>
        <div>{message}</div>
        <Toggle
          id="toggle1"
          onToggle={ this.updateMessage }
          onText="on"
          offText="off"
        />
        <Toggle
          id="toggle2"
          onToggle={ this.updateMessage }
          onText="on"
          offText="off"
          toggled
        />
        <Toggle
          id="toggle3"
          onToggle={ this.updateMessage }
          onText="on"
          offText="off"
        />
        <Toggle
          disabled
          id="toggle3"
          onToggle={ this.updateMessage }
          onText="on"
          offText="off"
        />
      </React.Fragment>
    );
  }
}

storiesOf("Toggle", module)
  .add("Toggle", () => (
    <Toggle />
  ))
  .add("Toggle set to disabled", () => (
    <Toggle disabled />
  ))
  .add("With text", () => (
    <Toggle
      onText="on"
      offText="off"
    />
  ))
  .add("Toggle Field", () => (
    <Field
      labelText="Setting"
      helpText="Turns setting on/off"
    >
      <Toggle
        onText="on"
        offText="off"
      />
    </Field>
  ))
  .add("<TEMP> Toggle demo", () => (
    <ToggleStateDisplay />
  ));