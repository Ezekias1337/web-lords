// Library Imports
import { FC, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
import {
  phoneNumberPattern,
  numberOnlyPattern,
} from "../../../../shared/constants/regexPatterns";
import { phoneNumberAutocomplete } from "../../constants/formAutocompleteStrings";
import { FormUpdateEvent } from "../../functions/forms/handleFormChange";
// Components
import { TextInput } from "./TextInput";
import { CountryCodeInput } from "./CountryCodeInput";

/* 
    ! THIS COMPONENT IS NOT COMPLETED
    ! FOR NOW JUST BASIC INPUT FIELD, WILL REVISE
    ! need selecting country to add the country code
    ! need to make user input formatted to (555) 555-5555
    ! Need to make auto complete select the correct country
    ! Need to make default value select the correct country
    ! Need to make copy paste select the correct country
    ! Make typing country name jump towards option in country dropdown (or have search bar)
    ! Need to have unique functions for each type of format, not all follow (555) 555-5555
    ! Should make country code display inside the text field and be undeletable
*/

interface BackspacePresentObject {
  isPresent: boolean;
  spacesToDelete: number;
}

export const PhoneNumberInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  theme,
  columns = "6",
  defaultValue = "",
  required,
  setStateHook,
  setErrorHook,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [countryImage, setCountryImage] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  return (
    <>
      <TextInput
        name={name}
        label={label}
        additionalClassNames={`phone-number-input z-index-1 ${additionalClassNames}`}
        placeholder="5555555555"
        theme={theme}
        columns={columns}
        defaultValue={defaultValue}
        required={required}
        inputType="tel"
        inputMode="tel"
        pattern={numberOnlyPattern}
        autoComplete={phoneNumberAutocomplete}
        maxLength={15}
        setStateHook={setStateHook}
        setErrorHook={setErrorHook}
        childrenToRender={[
          <CountryCodeInput
            theme={theme}
            key={`${name}-country-code-selector`}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            countryImage={countryImage}
            setCountryImage={setCountryImage}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          />,
          <div
            className={`flag-separator ${theme}-separator`}
            key={`${name}-flag-selector`}
          ></div>,
          <FontAwesomeIcon
            icon={showMenu === false ? faChevronDown : faChevronUp}
            className={`country-code-arrow country-arrow-${theme}`}
            onClick={() => setShowMenu(!showMenu)}
            key={`${name}-menu-arrow`}
          />,
        ]}
      />
    </>
  );
};
