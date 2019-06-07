import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { default as theme, NDSProvider } from "@nulogy/components";

const req = require.context("../src", true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => (
  <div style={{ padding: theme.space.x3 }}>
    <NDSProvider>{story()}</NDSProvider>
  </div>
));

configure(loadStories, module);
