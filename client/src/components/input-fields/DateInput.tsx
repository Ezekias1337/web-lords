// Library Imports
import { FC } from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
// Constants
import { americanDatePattern } from "../../../../shared/constants/regexPatterns";
// Components
import { TextInput } from "./TextInput";

export const DateInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames,
  placeholder = "mm/dd/yyyy",
  theme,
  columns = "6",
  defaultValue = "",
  required,
  setStateHook,
  setErrorHook,
  autoComplete = "",
}) => {
  return (
    <TextInput
      name={name}
      label={label}
      additionalClassNames={`date-input ${additionalClassNames}`}
      placeholder={placeholder}
      theme={theme}
      columns={columns}
      defaultValue={defaultValue}
      required={required}
      inputType="date"
      inputMode="numeric"
      autoComplete={autoComplete}
      pattern={americanDatePattern}
      maxLength={8}
      icon={faCalendar}
      setStateHook={setStateHook}
      setErrorHook={setErrorHook}
    />
  );
};
