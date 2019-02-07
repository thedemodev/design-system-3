import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const getCheckboxButtons = props => {
  const checkboxButtons = React.Children.map(props.children, checkbox => {
    const {
      value,
      disabled,
      ...checkboxProps
    } = checkbox.props;
    return (
      <Checkbox
        { ...checkboxProps }
        disabled={ props.disabled || disabled }
        name={ props.name }
        value={ value }
        defaultChecked={ props.defaultChecked ? props.defaultValue.includes(value) : undefined }
        checked={ props.checkedValue ? props.checkedValue.includes(value) : undefined }
        onChange={ props.onChange }
      />
    );
  });
  return (checkboxButtons);
};

const BaseCheckboxGroup = ({
  className,
  ...props
}) => (
  <div className={ className }>
    { getCheckboxButtons(props) }
  </div>
);

BaseCheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Checkbox]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Checkbox]),
      })
    ),
  ]).isRequired,
  defaultValue: PropTypes.string,
  checkedValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

BaseCheckboxGroup.defaultProps = {
  defaultValue: undefined,
  checkedValue: undefined,
  onChange: undefined,
  className: null,
};

const CheckboxGroup = styled(BaseCheckboxGroup)`
`;

export default CheckboxGroup;
