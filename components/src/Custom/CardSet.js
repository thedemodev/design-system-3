import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import PropTypes from "prop-types";
import {
    Box,
    Card,
} from "ComponentsRoot";
import theme from "../theme";

const UnstyledCardSet = ({
  children,
  ...props
}) => (
  <Box { ...props }>
    {children}
  </Box>
);

const CardSet = styled(UnstyledCardSet)(
  space,
  {
      border: "solid 1px gold",
        [`${Card}`]: {
            marginBottom: theme.space.x1,
            border: "solid 1px red",
            "&:last-child": {
                marginBottom: theme.space.none,
                border: "solid 1px green",
            },
        },
  },
);

CardSet.propTypes = {
    children: PropTypes.node,
    ...space.PropTypes,
};

CardSet.defaultProps = {
    children: [],
};

export default CardSet;
