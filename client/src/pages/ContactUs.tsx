// Library Imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Functions, Helpers, Utils and Hooks
import fetchData from "../functions/network/fetchData";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import { FormEvent } from "react";
import {
  FormState,
  SetStateHookForm,
} from "../components/form/dependents/constants/formProps";
import {
  Field,
  InputField,
} from "../components/form/dependents/constants/formTypes";
// Constants
import {
  fullNameAutocomplete,
  phoneNumberAutocomplete,
  emailAutocomplete,
} from "../components/form/dependents/constants/formAutocompleteStrings";
import {
  textOnlyPattern,
  phoneNumberPattern,
  emailPattern,
  textAndNumbersPattern,
} from "../../../shared/constants/regexPatterns";
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Loader } from "../components/general-page-layout/loader/Loader";
import { Form } from "../components/form/Form";
// CSS
//import "../css/page-specific/contact-us.scss";

const ContactUs = () => {
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});
  const [submissionSuccessful, setSubmissionSuccessful] =
    useState<boolean>(false);
  const [submissionInProgress, setSubmissionInProgress] =
    useState<boolean>(false);
  const [inputFieldColumns, setInputFieldColumns] = useState("6");
  const navigate = useNavigate();
  const [arrayOfInputFields, setArrayOfInputFields] = useState<Field[]>();

  useEffect(() => {
    if (submissionSuccessful) {
      navigate("/case-submitted");
    }
  }, [submissionSuccessful, navigate]);

  /* 
    Instantiate the Input Fields array with the appropriate information
  */

  useEffect(() => {
    let tempInputFields: InputField[] = [];

    tempInputFields = [
      {
        name: "Name",
        label: "Name",
        additionalClassNames: "",
        placeholder: "Name",
        theme: "light",
        columns: inputFieldColumns,
        type: "text",
        inputType: "text",
        inputMode: "text",
        pattern: textOnlyPattern,
        autoComplete: fullNameAutocomplete,
        maxLength: 60,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Phone Number",
        label: "Phone Number",
        additionalClassNames: "",
        placeholder: "Phone Number",
        theme: "light",
        columns: inputFieldColumns,
        type: "phoneNumber",
        inputType: "tel",
        inputMode: "tel",
        pattern: phoneNumberPattern,
        autoComplete: phoneNumberAutocomplete,
        maxLength: 30,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Email Address",
        label: "Email Address",
        additionalClassNames: "",
        placeholder: "Email Address",
        theme: "light",
        columns: inputFieldColumns,
        type: "email",
        inputType: "email",
        inputMode: "email",
        pattern: emailPattern,
        autoComplete: emailAutocomplete,
        maxLength: 30,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Business Logo",
        label: "Business Logo",
        additionalClassNames: "",
        defaultValue: "Have Logo",
        placeholder: "Business Logo",
        theme: "light",
        columns: inputFieldColumns,
        type: "dropdown",
        inputType: "text",
        inputMode: "text",
        maxLength: 30,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Website Description",
        label: "Website Description",
        additionalClassNames: "",
        placeholder: "Website Description",
        theme: "light",
        columns: "12",
        type: "textArea",
        inputType: "text",
        inputMode: "text",
        pattern: textAndNumbersPattern,
        maxLength: 3000,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
    ];

    const haveLogoField = {
      ...tempInputFields[3],
      dropdownOptions: ["Have Logo", "Need Logol"],
    };

    tempInputFields[3] = haveLogoField;

    setArrayOfInputFields(tempInputFields);
  }, [formInputData, inputFieldColumns]);

  const customSubmitArgsSubmitCase = {
    argument1: arrayOfInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/cases/create-case",
    argument5: "POST",
  };

  const createNewConsultation = async (
    e: FormEvent,
    inputFields: InputField[],
    formState: FormState,
    setErrorHook: SetStateHookForm,
    apiEndpoint: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  ): Promise<unknown> => {
    e.preventDefault();
    setSubmissionInProgress(true);

    const errors: Record<string, string> = {};
    const formStateWithDefaultValues = { ...formState };

    inputFields.forEach((field) => {
      if (!formState[camelCasifyString(field.name)]) {
        if (field.defaultValue) {
          formStateWithDefaultValues[camelCasifyString(field.name)] =
            field.defaultValue;
        } else {
          errors[camelCasifyString(field.name)] = `${field.name} is required`;
          setSubmissionInProgress(false);
        }
      }
    });
    formStateWithDefaultValues.caseStatus = "Pending";

    setErrorHook(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetchData(apiEndpoint, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formStateWithDefaultValues),
        });

        setFormInputData({});
        setErrorHook({});

        setSubmissionSuccessful(true);
        return response.json();
      } catch (error) {
        console.log(error);
        setSubmissionInProgress(false);

        errors[
          camelCasifyString(inputFields[inputFields.length - 1].name)
        ] = `Failed to submit case, please call us at (864) 666-9727.`;
        setErrorHook(errors);
      }
    }
  };

  return (
    <div className="container-fluid contact-us-container home-page p-0">
      <NavBar />
      <PageHeader title="Contact Us" />

      {arrayOfInputFields ? (
        <Form
          formTheme="light"
          inputFields={arrayOfInputFields}
          apiEndpoint="/api/cases/create-case"
          formId="contact-us-form"
          setStateHook={setFormInputData}
          setErrorHook={setFormErrorData}
          formState={formInputData}
          formErrors={formErrorData}
          button1Text="Submit"
          button1Variant="primary"
          button1Loading={submissionInProgress}
          customSubmitFunction={(e) =>
            createNewConsultation(
              e,
              arrayOfInputFields,
              formInputData,
              setFormErrorData,
              "/api/cases/create-case",
              "POST"
            )
          }
          customSubmitArgs={customSubmitArgsSubmitCase}
        />
      ) : (
        <Loader variant="primary" />
      )}

      <Footer />
    </div>
  );
};

export default ContactUs;
