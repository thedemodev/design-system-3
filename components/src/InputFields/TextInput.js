import React from "react";
import PropTypes from "prop-types";
import Field from "../Field/Field";
import Input from "../Input/Input";
import InlineValidation from "../Validation/InlineValidation";

const TextInput = ({
  children,
  labelText,
  requirementText,
  helpText,
  formatText,
  htmlFor,
  id,
  disabled,
  error,
  required,
  onChange,
  onClick,
  errorMessage,
  errorList,
  ...props,
}) => (
  <Field
    labelText={labelText}
    requirementText={requirementText}
    helpText={helpText}
    formatText={formatText}
    htmlFor={htmlFor || id}
    {...props}
  >
    <Input 
      type = "text"
      id = {id}
      disabled = {disabled}
      error = {error}
      required = {required}
      onChange = {onChange}
      onClick = {onClick}
    />
    {(error) &&
    (<InlineValidation 
      message = {errorMessage}
      fieldId = {id}
    >
      {errorList}
    </InlineValidation>)}
  </Field>
);

export default TextInput;