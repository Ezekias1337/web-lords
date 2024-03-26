// Library Imports
import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Functions, Helpers, Utils and Hooks
import {
  handleFormChange,
  FormUpdateEvent,
} from "../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../../../../shared/utils/strings/kebabCasifyString";
// Constants
import { textOnlyPattern } from "../../../../../../../shared/constants/regexPatterns";
// Interfaces and Types
import {
  InputFieldProps,
  InputFieldPropsState,
} from "../../constants/formProps";

export const TextInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  placeholder,
  theme,
  defaultValue = "",
  inputType = "text",
  inputMode = "text",
  pattern = textOnlyPattern,
  autoComplete = "",
  maxLength = 100,
  childrenToRender,
  icon,
  setStateHook,
  setErrorHook,
  handleInputChange = (e: FormUpdateEvent) => {
    handleFormChange(e, setStateHook, setErrorHook);
  },
}) => {
  /* 
    ? Because the autocomplete attribute is sometimes not used, in order
    ? to avoid an empty attribute which causes SEO damage and console errors,
    ? this ensures the attribute is only applied when the prop is provided
  */

  const [inputElementProps, setInputElementProps] =
    useState<InputFieldPropsState>({
      className: `input-field ${theme}-input ${additionalClassNames}`,
      name: camelCasifyString(name),
      id: kebabCasifyString(name),
      placeholder: placeholder,
      defaultValue: defaultValue,
      type: inputType,
      inputMode: inputMode,
      pattern: pattern,
      maxLength: maxLength,
      onChange: handleInputChange,
    });

  /* 
    ? Because of the way that this component is used in others such as the
    ? PasswordInput and updates based off errors, it was required to make
    ? These attributes cause re-renders of the component, this is all handled
    ? in the useEffect
  */  
    
  useEffect(() => {
    const newElementProps = {
      ...inputElementProps,
    };

    newElementProps.className = `input-field ${theme}-input ${additionalClassNames}`;
    newElementProps.placeholder = placeholder;
    newElementProps.type = inputType;

    if (autoComplete !== "") {
      newElementProps.autoComplete = autoComplete;
    }

    setInputElementProps(newElementProps);
  }, [additionalClassNames, placeholder, inputType, autoComplete, inputElementProps, theme]);

  return (
    <div className={`mt-2 input-wrapper`} key={name}>
      <label
        htmlFor={kebabCasifyString(name)}
        className={`form-label ${theme}-label`}
      >
        {label}
      </label>
      <input {...inputElementProps} />
      {icon !== undefined ? (
        <FontAwesomeIcon
          icon={icon}
          size="xl"
          className={`icon-input-right ${theme}-icon z-index-0`}
        />
      ) : (
        <></>
      )}
      {childrenToRender === undefined ? <></> : childrenToRender}
    </div>
  );
};
