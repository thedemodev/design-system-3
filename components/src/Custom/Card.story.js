import React from "react";
import { storiesOf } from "@storybook/react";
import {
  SubsectionTitle,
  Text,
  Box
} from "ComponentsRoot";
import Card from "./Card";
import CardSet from "./CardSet";

storiesOf("Card", module)
  .add("Card", () => (
    <CardSet>
        <Card title="10285" item="Some item" quantity="600 ea" dueDate="June 26, 2019" dueTime="9:00am" />
        <Card title="13652" item="Another item" quantity="1200 ea" dueDate="August 27, 2019" dueTime="7:00am" />
    </CardSet>
  ));
