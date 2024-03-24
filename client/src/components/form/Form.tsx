// Library Imports
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Functions, Helpers, and Utils
import { handleSubmit, renderInputFields } from "./dependents/formFunctions";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import { FormProps, CustomSubmitArgs } from "./dependents/formTypes";
// Components
import { Button } from "../button/Button";
// CSS
import "./dependents/inputFields.scss";

export const Form: FC<FormProps> = ({
  language,
  formTheme,
  inputFields,
  apiEndpoint,
  formId,
  setStateHook,
  setErrorHook,
  formState,
  formErrors,
  button1Text,
  button1Variant,
  button1Loading = undefined,
  button2Text = undefined,
  button2Type = undefined,
  button2Variant = undefined,
  button2Loading,
  formBackgroundIsImage,
  buttonSize = "small",
  customSubmitFunction,
  customSubmitArgs,
  redirectUrl,
}) => {
  const navigate = useNavigate();
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
  const [postingToServerInProgress, setPostingToServerInProgress] =
    useState(false);

  const initialFormData: Record<string, string> = {};
  inputFields.forEach((field) => {
    initialFormData[camelCasifyString(field.name)] = "";
  });

  useEffect(() => {
    if (submissionSuccessful && redirectUrl) {
      navigate(redirectUrl);
    }
  }, [submissionSuccessful]);

  return (
    <form
      onSubmit={(e) => {
        if (customSubmitFunction) {
          customSubmitArgs
            ? customSubmitFunction(e, customSubmitArgs)
            : console.error("customSubmitArgs is undefined");
        } else {
          handleSubmit(
            e,
            inputFields,
            formState,
            setErrorHook,
            apiEndpoint,
            "POST",
            {
              "Content-Type": "application/json",
            },
            redirectUrl,
            setSubmissionSuccessful,
            setPostingToServerInProgress
          );
        }
      }}
      id={formId}
      className="padding-left-and-right container form"
    >
      <div className="row">
        {renderInputFields(
          inputFields,
          formErrors,
          formTheme,
          setStateHook,
          setErrorHook
        )}
      </div>
      <div
        className={`form-button-container ${
          formBackgroundIsImage === true ? "position-relative" : ""
        }`}
      >
        <Button
          variant={button1Variant}
          type="submit"
          text={button1Text}
          buttonId={`${formId}-button-1`}
          buttonSize={buttonSize}
          loading={
            button1Loading !== undefined
              ? button1Loading
              : postingToServerInProgress
          }
        />
        {button2Text !== undefined &&
        button2Type !== undefined &&
        button2Variant !== undefined ? (
          <Button
            variant={button2Variant}
            type={button2Type}
            text={button2Text}
            buttonId={`${formId}-button-2`}
            buttonSize={buttonSize}
          />
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};
