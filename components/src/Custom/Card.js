import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import PropTypes from "prop-types";
import {
  SubsectionTitle,
  Text,
  Box,
  Flex,
  IconicButton,
} from "ComponentsRoot";
import theme from "../theme";

const UnstyledCard = ({
  title,
  item,
  quantity,
  dueDate,
  dueTime,
  ...props
}) => (
  <Box { ...props }>
    <SubsectionTitle mr="x3">{ title }</SubsectionTitle>
    <IconicButton icon="menu" />
    <Flex justifyContent="space-between">
      <Box mr="x3">
        <Text>Item: { item }</Text>
        <Text>Quantity: { quantity }</Text>
      </Box>
      <Box>
        <Text>Due: { dueTime }</Text>
        <Text>{ dueDate }</Text>
      </Box>
      </Flex>
  </Box>
);

const Card = styled(UnstyledCard)(
  space,
  {
    backgroundColor: theme.colors.lightBlue,
    borderRadius: theme.radii.medium,
    padding: theme.space.x2,
    boxShadow: theme.boxShadows.small,
    position: "relative",
    "button": {
      position: "absolute",
      right: theme.space.none,
      top: theme.space.x1,
    },
  }
);

Card.propTypes = {
  title: PropTypes.string,
  item: PropTypes.string,
  quantity: PropTypes.string,
  dueDate: PropTypes.string,
  dueTime: PropTypes.string,
  ...space.PropTypes,
};

Card.defaultProps = {
  title: null,
  item: null,
  quantity: null,
  dueDate: null,
  dueTime: null,
};

export default Card;