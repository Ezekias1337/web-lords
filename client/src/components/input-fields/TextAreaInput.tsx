// Library Imports
import { FC } from "react";
// Functions, Helpers, and Utils
import {
  handleFormChange,
  FormUpdateEvent,
} from "../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";

/* 
  TODO: Need to change styling of resize handle
  TODO: Need to make it so Form component doesn't re-render when the
  field is resized
*/

export const TextAreaInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  placeholder,
  theme,
  defaultValue = "",
  inputMode = "text",
  maxLength = 100,
  setStateHook,
  setErrorHook,
}) => {
  const handleInputChange = (e: FormUpdateEvent) => {
    handleFormChange(e, setStateHook, setErrorHook);
  };

  return (
    <div className={`mt-2 input-wrapper`}>
      <label
        htmlFor={kebabCasifyString(name)}
        className={`form-label ${theme}-label`}
      >
        {label}
      </label>
      <textarea
        className={`input-field ${theme}-input ${additionalClassNames}`}
        name={camelCasifyString(name)}
        id={kebabCasifyString(name)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        inputMode={inputMode}
        maxLength={maxLength}
        onChange={handleInputChange}
      />
    </div>
  );
};
