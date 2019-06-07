"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@storybook/react");
const components_1 = require("@nulogy/components");
react_2.storiesOf("Box", module)
    .add("Box", () => react_1.default.createElement(components_1.Box, { p: "x3" }, "Hello World"))
    .add("With a text colour", () => (react_1.default.createElement(components_1.Box, { p: "x3", color: "blue" }, "Hello World")))
    .add("With a background colour", () => (react_1.default.createElement(components_1.Box, { p: "x3", color: "white", bg: "blue" }, "Hello World")))
    .add("With a set width", () => (react_1.default.createElement(components_1.Box, { p: "x3", width: 1 / 2, bg: "whiteGrey" }, "Half Width")))
    .add("With a responsive width", () => (react_1.default.createElement(components_1.Box, { p: "x3", width: { extraSmall: 1, small: 1 / 2, medium: 1 / 4 }, bg: "whiteGrey" }, "Full width on extra small screens, 1/2 width on small and 1/4 width on medium")))
    .add("With padding", () => (react_1.default.createElement(components_1.Box, { p: "x2" },
    react_1.default.createElement(components_1.Box, { m: "x1", p: "x3", bg: "whiteGrey" }, "Padding"),
    react_1.default.createElement(components_1.Box, { m: "x1", p: "x3", bg: "whiteGrey" }, "Padding top"),
    react_1.default.createElement(components_1.Box, { m: "x1", pr: "x3", bg: "whiteGrey" }, "Padding right"),
    react_1.default.createElement(components_1.Box, { m: "x1", pb: "x3", bg: "whiteGrey" }, "Padding bottom"),
    react_1.default.createElement(components_1.Box, { m: "x1", pl: "x3", bg: "whiteGrey" }, "Padding left"),
    react_1.default.createElement(components_1.Box, { m: "x1", px: "x3", bg: "whiteGrey" }, "Padding x"),
    react_1.default.createElement(components_1.Box, { m: "x1", py: "x3", bg: "whiteGrey" }, "Padding y"))))
    .add("With margin", () => (react_1.default.createElement(components_1.Box, { p: "x3" },
    react_1.default.createElement(components_1.Box, { m: "x3", bg: "whiteGrey" }, "Margin"),
    react_1.default.createElement(components_1.Box, { mt: "x3", bg: "whiteGrey" }, "Margin top"),
    react_1.default.createElement(components_1.Box, { mr: "x3", bg: "whiteGrey" }, "Margin right"),
    react_1.default.createElement(components_1.Box, { mb: "x3", bg: "whiteGrey" }, "Margin bottom"),
    react_1.default.createElement(components_1.Box, { ml: "x3", bg: "whiteGrey" }, "Margin left"),
    react_1.default.createElement(components_1.Box, { mx: "x3", bg: "whiteGrey" }, "Margin x"),
    react_1.default.createElement(components_1.Box, { my: "x3", bg: "whiteGrey" }, "Margin y"))))
    .add("With a shadow", () => react_1.default.createElement(components_1.Box, { boxShadow: 0 }, "Shadow"));
//# sourceMappingURL=Box.story.js.map