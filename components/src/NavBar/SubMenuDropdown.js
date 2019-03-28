import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";
import theme from "ComponentsRoot/theme";
import SubMenuItems from "./SubMenuItems";
import SubMenu from "./SubMenu";
import SubMenuLink from "./SubMenuLink";
import { Text } from "ComponentsRoot";

const SubMenuDropdownButton = styled.button({
  display: "block",
  padding: `${theme.space.x1} ${theme.space.x2}`,
  "&:hover, &:focus": {
    outline: "none",
    backgroundColor: theme.colors.lightGrey,
  },
  "&:disabled": {
    opacity: ".5",
  },
  border: "none",
  backgroundColor: "transparent",
  textDecoration: "none",
  textAlign: "left",
  cursor: "pointer",
});

const keyCode = Object.freeze({
  "TAB": 9,
  "RETURN": 13,
  "ESC": 27,
  "SPACE": 32,
  "PAGEUP": 33,
  "PAGEDOWN": 34,
  "END": 35,
  "HOME": 36,
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40,
});

const isDropdown = subMenuItem => (subMenuItem.subMenuItems);

/* eslint-disable react/destructuring-assignment */
class SubMenuDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenuOpen: false,
      focusIndex: 0,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.hideSubMenu = this.hideSubMenu.bind(this);
    this.showSubMenu = this.showSubMenu.bind(this);
  }

  setSubMenuState(newState, skipTimer = false) {
    this.clearScheduled();
    if (!skipTimer) {
      this.showTimeoutID = setTimeout(() => this.setState({ subMenuOpen: newState }), this.props.showDelay);
    } else {
      this.setState({ subMenuOpen: newState });
    }
  }

  hideSubMenu(skipTimer) {
    this.setSubMenuState(false, skipTimer);
  }

  showSubMenu(skipTimer) {
    this.setSubMenuState(true, skipTimer);
  }

  focusFirstItem() {
    this.setState({ focusIndex: 0 });
  }

  focusLastItem() {
    this.setState({ focusIndex: this.props.children.length - 1 });
  }

  focusNextItem() {
    let nextIndex;
    if (this.state.focusIndex === this.props.children.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = this.state.focusIndex + 1;
    }
    this.setState({ focusIndex: nextIndex });
  }

  focusPrevItem() {
    let prevIndex;
    if (this.state.focusIndex === 0) {
      prevIndex = this.props.children.length - 1;
    } else {
      prevIndex = this.state.focusIndex - 1;
    }
    this.setState({ focusIndex: prevIndex });
  }

  subMenuEventHandlers() {
    return ({
      onFocus: () => (this.showSubMenu()),
      onBlur: () => (this.hideSubMenu()),
      onClick: () => (this.showSubMenu()),
      onKeyDown: e => (this.handleKeyDown(e)),
    });
  }

  SubMenuDropdownEventHandlers() {
    return ({
      onClick: () => {
        this.showSubMenu();
        this.focusFirstItem();
      },
      onBlur: () => (this.hideSubMenu()),
      onKeyDown: e => (this.handleKeyDown(e)),
    });
  }

  clearScheduled() {
    clearTimeout(this.hideTimeoutID);
    clearTimeout(this.showTimeoutID);
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case keyCode.ESC:
        this.hideSubMenu(true);
        break;
      case keyCode.UP:
        if (this.state.subMenuOpen) {
          this.focusPrevItem();
        } else {
          this.showSubMenu(true);
          this.focusLastItem();
        }
        break;
      case keyCode.DOWN:
        if (this.state.subMenuOpen) {
          this.focusNextItem();
        } else {
          this.showSubMenu(true);
          this.focusFirstItem();
        }
        break;
      case keyCode.ENTER:
        if (!this.state.subMenuOpen) {
          this.showSubMenu(true);
          this.focusFirstItem();
        }
        break;
      case keyCode.HOME:
        if (this.state.subMenuOpen) {
          this.focusFirstItem();
        }
        break;
      case keyCode.END:
        if (this.state.subMenuOpen) {
          this.focusLastItem();
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <li>
              <SubMenuDropdownButton tabIndex="-1" aria-haspopup="true" aria-expanded={ this.state.subMenuOpen } { ...this.props } { ...this.SubMenuDropdownEventHandlers() } ref={ ref }>
                  <Text color={ "darkBlue" }>{ this.props.text }</Text>
                    {this.props.subText && (
                      <Text color={ "darkGrey" } fontSize={ theme.fontSizes.small } lineHeight={ theme.lineHeights.smallTextBase }>
                    {this.props.subText}
                  </Text>
                  )}      
              </SubMenuDropdownButton>
            </li>
          )}
        </Reference>
        {true && (
        <Popper placement="right-start">
          {popperProps => (
            <SubMenu renderArrow={false} popperProps={ popperProps } { ...this.subMenuEventHandlers() }>
              <SubMenuItems focusIndex={ undefined }>
              {this.props.menuData.map(subMenuItem => {
                if (isDropdown(subMenuItem)) {
                  return (
                    <SubMenuDropdown key={ subMenuItem.text } text={ subMenuItem.text } subText={subMenuItem.subText} menuData={ subMenuItem.subMenuItems }/>      
                  );
                } else {
                  return (
                    <SubMenuLink key={ subMenuItem.text } text={subMenuItem.text} subText={subMenuItem.subText} href={ subMenuItem.href }/>
                  );
                }
              })}
              </SubMenuItems>
            </SubMenu>
          )}
        </Popper>
        )}
      </Manager>
    );
  }
}
/* eslint-enable react/destructuring-assignment */


SubMenuDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  menuData: PropTypes.arrayOf(PropTypes.shape({})),
  showDelay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hideDelay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SubMenuDropdown.defaultProps = {
  menuData: null,
  showDelay: "100",
  hideDelay: "350",
};

export default SubMenuDropdown;