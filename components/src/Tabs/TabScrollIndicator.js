import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import theme from "../theme";
import { Icon } from "../Icon";

const TabScrollIndicatorButton = styled.button.attrs(({ side, scrollLeft }) => ({
  style: {
    left: side === "left" ? scrollLeft : undefined,
    right: side === "right" ? scrollLeft * -1 : undefined
  }
}))({
  position: "absolute",
  color: theme.colors.black,
  top: 0,
  bottom: 0,
  height: theme.space.x5,
  width: theme.space.x5,
  background: theme.colors.white,
  opacity: 0.8,
  zIndex: theme.zIndex.tabsScollIndicator,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: theme.fontWeights.medium,
  textDecoration: "none",
  verticalAlign: "middle",
  lineHeight: theme.lineHeights.base,
  backgroundColor: theme.colors.white,
  border: `0px solid`,
  margin: theme.space.none,
  "&:hover": {
    backgroundColor: theme.colors.lightBlue
  },
  "&:focus": {
    outline: "none"
  },
  "&:active": {},
  "&:disabled": {
    opacity: ".5"
  }
});

class TabScrollIndicator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, side } = this.props;

    onClick(side);
  }

  render() {
    const { side, scrollLeft } = this.props;

    return (
      <TabScrollIndicatorButton {...this.props} onClick={this.handleClick} side={side} scrollLeft={scrollLeft}>
        <Icon icon={side === "right" ? "rightArrow" : "leftArrow"} />
      </TabScrollIndicatorButton>
    );
  }
}

TabScrollIndicator.propTypes = {
  onClick: PropTypes.func,
  side: PropTypes.oneOf(["left", "right"]),
  scrollLeft: PropTypes.number
};

TabScrollIndicator.defaultProps = {
  onClick: () => {},
  side: "left",
  scrollLeft: 0
};

export default TabScrollIndicator;
