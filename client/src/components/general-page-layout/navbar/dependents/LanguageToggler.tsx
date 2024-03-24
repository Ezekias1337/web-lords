// Library Imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useSearchParams } from "react-router-dom";
// Redux
import { updateLanguageAction } from "../../../../redux/action-creators/languageCreators";
// Functions, Helpers, and Utils
import { SwitchUpdateEvent } from "../../../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { ReduxStoreState } from "../../../../constants/interfaces/ReduxStoreState";
// CSS
import "../../../../css/partials/_input-themes.scss";
import "../../../../css/partials/_switch-input.scss";

export const LanguageToggler = () => {
  const dispatch = useDispatch();
  const updateLanguage = bindActionCreators(updateLanguageAction, dispatch);
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const [languageParams, setLanguageParams] = useSearchParams({});

  const paramsLanguage = languageParams.get("language");
  const [isChecked, setIsChecked] = useState(false);

  const setLanguage = (language: string) => {
    updateLanguage(language);
    setLanguageParams({ language });
    setIsChecked(language === "Spanish");
  };

  const handleInputChange = () => {
    const newLanguage = isChecked ? "English" : "Spanish";
    setLanguage(newLanguage);
  };

  useEffect(() => {
    if (paramsLanguage === null) {
      setLanguage("English");
    } else {
      if (paramsLanguage === "English") {
        setLanguage("English");
      } else if (paramsLanguage === "Spanish") {
        setLanguage("Spanish");
      }
    }
  }, [reduxLanguage, paramsLanguage]);

  const componentDomName = "Language Toggler";

  return (
    <div className={`input-wrapper form-check form-switch toggler-align`}>
      <label
        htmlFor={kebabCasifyString(componentDomName)}
        className={`form-label dark-label ms-3 mb-0${
          isChecked === false ? "" : " bold-text"
        }`}
      >
        Español
      </label>
      <input
        className={`dark-input form-check-input`}
        name={camelCasifyString(componentDomName)}
        aria-label={camelCasifyString(componentDomName)}
        id={kebabCasifyString(componentDomName)}
        inputMode="text"
        type="checkbox"
        role="switch"
        checked={isChecked}
        onChange={handleInputChange}
      ></input>
      <label
        htmlFor={kebabCasifyString(componentDomName)}
        className={`form-label dark-label me-3 mb-0${
          isChecked === true ? "" : " bold-text"
        }`}
      >
        English
      </label>
    </div>
  );
};
