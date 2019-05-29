import styled from "styled-components";
import PropTypes from "prop-types";
import { Box } from "../Box";
import theme from "../theme";

const Card = styled(Box)({});

Card.propTypes = {
  children: PropTypes.node
};

Card.defaultProps = {
  children: [],
  borderRadius: "medium",
  // boxShadow: "small",
  bg: "whiteGrey",
  p: "x2",
  position: "relative",
  border: "2px solid #000",
  background: theme.colors.blue
};

export default Card;
