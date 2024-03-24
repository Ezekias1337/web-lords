// Library Imports
import { FC, useMemo } from "react";
// Functions, Helpers, and Utils
import { handleFormChange } from "../../functions/forms/handleFormChange";
import { renderSelectOptions } from "../../functions/forms/renderSelectOptions";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { DropdownFieldProps } from "../../constants/interfaces/InputFieldProps";

export const DropdownInput: FC<DropdownFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  theme,
  columns = "6",
  defaultValue = "",
  dropdownOptions,
  required,
  setStateHook,
  setErrorHook,
}) => {
  const arrayOfOptions = useMemo(
    () => renderSelectOptions(dropdownOptions),
    [dropdownOptions]
  );

  return (
    <div className={`mt-2 input-wrapper`}>
      <label
        htmlFor={kebabCasifyString(name)}
        className={`form-label ${theme}-label`}
      >
        {label}
      </label>
      <select
        className={`input-field ${theme}-input ${additionalClassNames}`}
        name={camelCasifyString(name)}
        aria-label={camelCasifyString(name)}
        id={kebabCasifyString(name)}
        defaultValue={defaultValue !== "" ? defaultValue : ""}
        required={required}
        onChange={(e) => {
          handleFormChange(e, setStateHook, setErrorHook);
        }}
      >
        {arrayOfOptions}
      </select>
    </div>
  );
};
