import React from "react";
import { storiesOf } from "@storybook/react";
import { Tab, Tabs } from ".";

class ControlledTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null
    };

    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(e, index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <>
        <Tabs onTabClick={this.setSelectedTab} selectedIndex={selectedIndex}>
          <Tab label="Tab 1">Uncontrolled Content: Tab 1</Tab>
          <Tab label="Tab 2">Uncontrolled Content: Tab 2</Tab>
          <Tab label="Tab 3">Uncontrolled Content: Tab 3</Tab>
          <Tab label="Tab 4">Uncontrolled Content: Tab 4</Tab>
        </Tabs>
        {selectedIndex !== null && <div>Controlled Content: Tab {selectedIndex + 1}</div>}
      </>
    );
  }
}

storiesOf("Tabs", module)
  .add("Tabs", () => (
    <Tabs>
      <Tab label="Tab 1">Tab 1 Content</Tab>
      <Tab label="Tab 2">Tab 2 Content</Tab>
      <Tab label="Tab 3">Tab 3 Content</Tab>
      <Tab label="Tab 4">Tab 4 Content</Tab>
    </Tabs>
  ))
  .add("with a defaultSelectedIndex", () => (
    <Tabs defaultSelectedIndex={0}>
      <Tab label="Tab 1">Tab 1 Content</Tab>
      <Tab label="Tab 2">Tab 2 Content</Tab>
      <Tab label="Tab 3">Tab 3 Content</Tab>
      <Tab label="Tab 4">Tab 4 Content</Tab>
    </Tabs>
  ))
  .add("set to fitted", () => (
    <Tabs fitted>
      <Tab label="Tab 1">Tab 1 Content</Tab>
      <Tab label="Tab 2">Tab 2 Content</Tab>
      <Tab label="Tab 3">Tab 3 Content</Tab>
      <Tab label="Tab 4">Tab 4 Content</Tab>
    </Tabs>
  ))
  .add("with all tab states", () => (
    <div>
      <Tab label="Tab" />
      <Tab label="Tab" selected />
      <Tab label="Tab" disabled />
      <Tab label="Tab" disabled selected />
    </div>
  ))
  .add(
    "with scrolling tabs",
    () => (
      <Tabs>
        <Tab label="Tab 1">Tab 1 Content</Tab>
        <Tab label="Tab 2">Tab 2 Content</Tab>
        <Tab label="Tab 3">Tab 3 Content</Tab>
        <Tab label="Tab 4">Tab 4 Content</Tab>
        <Tab label="Tab 5">Tab 5 Content</Tab>
        <Tab label="Tab 6">Tab 6 Content</Tab>
        <Tab label="Tab 7">Tab 7 Content</Tab>
        <Tab label="Tab 8">Tab 8 Content</Tab>
        <Tab label="Tab 9">Tab 9 Content</Tab>
        <Tab label="Tab 10">Tab 10 Content</Tab>
        <Tab label="Tab 11">Tab 11 Content</Tab>
        <Tab label="Tab 12">Tab 12 Content</Tab>
      </Tabs>
    ),
    { viewport: { defaultViewport: "extraSmall" } }
  )
  .add("controlled Tabs", () => <ControlledTabs />);
