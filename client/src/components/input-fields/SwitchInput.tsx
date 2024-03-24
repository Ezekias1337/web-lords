// Library Imports
import { FC, useState } from "react";
// Functions, Helpers, and Utils
import {
  handleFormChange,
  FormUpdateEvent,
  SwitchUpdateEvent,
  handleSwitchChange,
} from "../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";

export const SwitchInput: FC<InputFieldProps> = ({
  name,
  additionalClassNames = "",
  theme,
  columns = "6",
  setStateHook,
  setErrorHook
}) => {
  const handleInputChange = (e: SwitchUpdateEvent) => {
    handleSwitchChange(e, setStateHook, setErrorHook);
    setIsChecked(!isChecked);
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      className={`mt-2 input-wrapper form-check form-switch`}
    >
      <label
        htmlFor={camelCasifyString(name)}
        className={`form-label ${theme}-label`}
      >
        {name}
      </label>
      <input
        className={`${theme}-input form-check-input ${additionalClassNames}`}
        name={camelCasifyString(name)}
        aria-label={camelCasifyString(name)}
        id={kebabCasifyString(name)}
        inputMode="text"
        type="checkbox"
        role="switch"
        checked={isChecked}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};
