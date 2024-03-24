// Interfaces and Types
import { FormEvent } from "react";
import {
  InputFieldProps,
  DropdownFieldProps,
  CreditCardFieldProps,
} from "../../../constants/interfaces/InputFieldProps";
import { SetStateHookForm } from "../../../constants/interfaces/InputFieldProps";
import { FormState } from "../../../constants/interfaces/InputFieldProps";
import { FormUpdateEvent } from "../../../functions/forms/handleFormChange";

/* 
  ? This is a type guard to help the typescript compiler since
  ? I'm using a union type in the renderInputFields function
*/
export type Field = InputField | DropdownField | CreditCardField;

/* 
  ? This type is used for the switch statement just to determine the type
  ? of field to return
*/
export type FieldType =
  | "creditCard"
  | "date"
  | "dropdown"
  | "email"
  | "password"
  | "phoneNumber"
  | "quantity"
  | "switch"
  | "text"
  | "textArea";

export interface InputField extends InputFieldProps {
  type: FieldType;
}

export interface DropdownField extends DropdownFieldProps {
  type: FieldType;
}

export interface CreditCardField extends CreditCardFieldProps {
  type: FieldType;
}

export interface CustomSubmitArgs<
  T1 = any,
  T2 = any,
  T3 = any,
  T4 = any,
  T5 = any,
  T6 = any
> {
  argument1: T1;
  argument2: T2;
  argument3?: T3;
  argument4?: T4;
  argument5?: T5;
  argument6?: T6;
}

export interface FormProps {
  language: string;
  formTheme: "dark" | "light";
  inputFields: Field[];
  apiEndpoint: string;
  formId: string;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
  formState: FormState;
  formErrors: FormState;
  button1Text: string;
  button1Variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quinternary"
    | "neutral"
    | "success"
    | "error";
  button1Loading?: boolean;
  button2Text?: string;
  button2Type?: "button" | "reset";
  button2Variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quinternary"
    | "neutral"
    | "success"
    | "error";
  button2Loading?: boolean;
  buttonSize?: "small" | "medium" | "large";
  formBackgroundIsImage?: boolean;
  customSubmitFunction?: (
    e: FormEvent<HTMLFormElement>,
    args: CustomSubmitArgs
  ) => void;
  customSubmitArgs?: CustomSubmitArgs;
  redirectUrl?: string;
}
