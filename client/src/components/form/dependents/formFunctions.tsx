// Library Imports
import { FormEvent, ReactNode, SetStateAction, Dispatch } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Functions, Helpers, and Utils
import { camelCasifyString } from "../../../../../shared/utils/strings/camelCasifyString";
import fetchData from "../../../functions/network/fetchData";
// Interfaces and Types
/* import {
  InputFieldProps,
  DropdownFieldProps,
  CreditCardFieldProps,
} from "../../../constants/interfaces/InputFieldProps"; */
import {
  Field,
  FieldType,
  InputField,
  DropdownField,
  CreditCardField,
  FormProps,
} from "./formTypes";
import { SetStateHookForm } from "../../../constants/interfaces/InputFieldProps";
import { FormState } from "../../../constants/interfaces/InputFieldProps";
// Components
import { CreditCardInput } from "../../input-fields/CreditCardInput";
import { DateInput } from "../../input-fields/DateInput";
import { DropdownInput } from "../../input-fields/DropdownInput";
import { EmailInput } from "../../input-fields/EmailInput";
import { PasswordInput } from "../../input-fields/PasswordInput";
import { PhoneNumberInput } from "../../input-fields/PhoneNumberInput";
import { QuantityStepper } from "../../input-fields/QuantityStepper";
import { SwitchInput } from "../../input-fields/SwitchInput";
import { TextAreaInput } from "../../input-fields/TextAreaInput";
import { TextInput } from "../../input-fields/TextInput";
import { Button } from "../../button/Button";
import { FormError } from "./FormError";

/* 
    ? These is type of field x functions would be basically useless in vanillaJS,
    ? These are simply used to please the compiler for accessing attributes of types that aren't present
    ? in all of the types, without them the compiler will complain
*/

const isDropdownField = (field: Field): field is DropdownField =>
  (field as DropdownField).dropdownOptions !== undefined;

/* 
    ? The input fields share the majority of their props. In order to reduce clutter and superflousness this function
    ? is used to provide the input components their props
*/

const generateSharedInputProps = (
  inputField: Field,
  formErrors: FormState,
  formTheme: "dark" | "light",
  setStateHook: SetStateHookForm,
  setErrorHook: SetStateHookForm
): InputField => {
  const sharedInputProps: InputField = {
    name: inputField.name,
    label: inputField.label,
    additionalClassNames: `${inputField.additionalClassNames} ${
      formErrors[inputField.name] ? "form-error" : ""
    }`,
    placeholder: `${inputField.placeholder}`,
    theme: formTheme,
    columns: inputField.columns,
    defaultValue: `${
      inputField.defaultValue !== undefined ? inputField.defaultValue : ""
    }`,
    required: inputField.required === true ? true : false,
    inputType: inputField.inputType,
    inputMode: inputField.inputMode,
    pattern: inputField.pattern,
    autoComplete: `${
      inputField.autoComplete !== undefined ? inputField.autoComplete : ""
    }`,
    maxLength: inputField.maxLength !== undefined ? inputField.maxLength : 200,
    childrenToRender:
      inputField.childrenToRender !== undefined
        ? inputField.childrenToRender
        : undefined,
    icon: inputField.icon !== undefined ? inputField.icon : undefined,
    setStateHook: setStateHook,
    setErrorHook: setErrorHook,
    type: inputField.type,
  };

  return sharedInputProps;
};

export const handleSubmit = async (
  e: FormEvent,
  inputFields: InputField[],
  formState: FormState,
  setErrorHook: SetStateHookForm,
  apiEndpoint: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  headers: HeadersInit,
  redirectUrl?: string,
  setSubmissionSuccessful?: Dispatch<SetStateAction<boolean>>,
  setPostingToServerInProgress?: Dispatch<SetStateAction<boolean>>
) => {
  e.preventDefault();

  // ! Validate the form data here based on inputFields
  const errors: Record<string, string> = {};
  const formStateWithDefaultValues = { ...formState };
  inputFields.forEach((field) => {
    /* 
      ! In order to handle the use case of submitting a form with only defaultValues
      ! and not changing any values must use this variable and update it. If you try to use
      ! setStateHook instead because it's async it'll just send an empty object to the server
    */

    if (!formState[camelCasifyString(field.name)]) {
      if (field.defaultValue) {
        const e = {
          target: {
            name: field.name,
            value: field.defaultValue,
          },
        };

        formStateWithDefaultValues[camelCasifyString(field.name)] =
          field.defaultValue;
      } else {
        errors[camelCasifyString(field.name)] = `${field.name} is required`;
      }
    } /* else if (
        field.validation &&
        !field.validation(formState[camelCasifyString(field.name)])
      ) {
        errors[camelCasifyString(field.name)] = `Invalid ${field.placeholder}`;
      } */
  });

  setErrorHook(errors);

  if (Object.keys(errors).length === 0 && setPostingToServerInProgress) {
    setPostingToServerInProgress(true);
    try {
      const response = await fetchData(apiEndpoint, {
        method: method,
        headers: headers,
        credentials: "include",
        body: JSON.stringify(formStateWithDefaultValues),
      });

      // Assuming the login is successful based on the response status
      if (response.ok && setSubmissionSuccessful) {
        // Redirect to the specified URL or a default URL after a successful login
        setSubmissionSuccessful(true);
        return response.json();
      }
    } catch (error) {
      setPostingToServerInProgress(false);
      errors["password"] = "Failed to login, check your email and password.";
      setErrorHook(errors);
    }
  }
};

export const renderInputFields = (
  inputFields: Field[],
  formErrors: FormState,
  formTheme: "dark" | "light",
  setStateHook: SetStateHookForm,
  setErrorHook: SetStateHookForm
): ReactNode[] => {
  const arrayOfInputFields: ReactNode[] = [];

  for (const inputField of inputFields) {
    let inputFieldToBePushed: ReactNode;

    const generalInputProps = generateSharedInputProps(
      inputField,
      formErrors,
      formTheme,
      setStateHook,
      setErrorHook
    );

    switch (inputField.type) {
      case "creditCard":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`col col-12 col-md-6`}
          >
            <CreditCardInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "date":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`col col-12 col-md-6`}
          >
            <DateInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;

      case "dropdown":
        if (isDropdownField(inputField)) {
          inputFieldToBePushed = (
            <div
              key={inputField.name}
              className={`col col-12 col-md-6`}
            >
              <DropdownInput
                {...generalInputProps}
                dropdownOptions={inputField.dropdownOptions}
              />
              <FormError formErrors={formErrors} inputField={inputField} />
            </div>
          );
        }

        break;
      case "email":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`col col-12 col-md-6`}
          >
            <EmailInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "password":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`col col-12 col-md-6`}
          >
            <PasswordInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "phoneNumber":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`col col-12 col-md-6`}
          >
            <PhoneNumberInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      /* case "quantity":
            already has pattern for regex inside component  
            break;
            case "switch": */

      case "text":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`col col-12 col-md-6`}
          >
            <TextInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "textArea":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`col col-12`}
          >
            <TextAreaInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      default:
        console.log(
          `inputField.type of: ${inputField.type} does not match any of the options in the switch statement, returning warning in DOM`
        );
        inputFieldToBePushed = (
          <div>
            "{inputField.type}" does not match any input type available, check
            your spelling. 🗿
          </div>
        );
    }

    arrayOfInputFields.push(inputFieldToBePushed);
  }

  return arrayOfInputFields;
};
