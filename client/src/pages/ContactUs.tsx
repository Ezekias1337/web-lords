// Library Imports
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Functions, Helpers, Utils and Hooks
import fetchData from "../functions/network/fetchData";
import useWindowWidth from "../hooks/useWindowWidth";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import { FormEvent } from "react";
import {
  FormState,
  SetStateHookForm,
} from "../components/form/dependents/constants/formProps";
import { Field, InputField } from "../components/form/dependents/constants/formTypes";
// Constants
import {
  fullNameAutocomplete,
  phoneNumberAutocomplete,
  emailAutocomplete,
} from "../components/form/dependents/constants/formAutocompleteStrings";
import {
  textOnlyPattern,
  americanDatePattern,
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
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// CSS
import "../css/page-specific/contact-us.scss";
// Assets and Images
import googleMapsLocation from "../assets/images/google-maps-location.png";

const ContactUs = () => {
  const windowWidth = useWindowWidth();
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
    if (windowWidth <= 700) {
      setInputFieldColumns("12");
    } else {
      setInputFieldColumns("6");
    }
  }, [windowWidth]);

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
        name: fullName.english,
        label: fullName.english,
        additionalClassNames: "",
        placeholder: fullName.english,
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
        name: phoneNumber.english,
        label: phoneNumber.english,
        additionalClassNames: "",
        placeholder: phoneNumber.english,
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
        name: emailAddress.english,
        label: emailAddress.english,
        additionalClassNames: "",
        placeholder: emailAddress.english,
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
        name: preferredLanguage.english,
        label: preferredLanguage.english,
        additionalClassNames: "",
        defaultValue: "English",
        placeholder: preferredLanguage.english,
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
        name: dateOfIncident.english,
        label: dateOfIncident.english,
        additionalClassNames: "",
        placeholder: dateOfIncident.english,
        theme: "light",
        columns: inputFieldColumns,
        type: "date",
        inputType: "date",
        inputMode: "text",
        pattern: americanDatePattern,
        maxLength: 30,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: treatmentStatus.english,
        label: treatmentStatus.english,
        additionalClassNames: "",
        defaultValue: "Not Started",
        placeholder: treatmentStatus.english,
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
        name: incidentDescription.english,
        label: incidentDescription.english,
        additionalClassNames: "",
        placeholder: incidentDescription.english,
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

    const preferredLanguageField = {
      ...tempInputFields[3],
      dropdownOptions: ["English", "Español"],
    };

    const treatmentStatusField = {
      ...tempInputFields[5],
      dropdownOptions: ["Not Started", "In Progress"],
    };

    tempInputFields[3] = preferredLanguageField;
    tempInputFields[5] = treatmentStatusField;

    setArrayOfInputFields(tempInputFields);
  }, [reduxLanguage, formInputData]);

  const customSubmitArgsSubmitCase = {
    argument1: arrayOfInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/cases/create-case",
    argument5: "POST",
    argument6: reduxLanguage,
  };

  const createNewCase = async (
    e: FormEvent,
    inputFields: InputField[],
    formState: FormState,
    setErrorHook: SetStateHookForm,
    apiEndpoint: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    language: string
  ): Promise<any> => {
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
      /* 
        Translate the user input to english for data validation purposes
      */
      if (language === "Spanish") {
        let translatedLanguageChoice =
          formStateWithDefaultValues.preferredLanguage;
        let translatedTreatmentStatusChoice =
          formStateWithDefaultValues.treatmentStatus;

        if (translatedLanguageChoice === "Inglés") {
          translatedLanguageChoice = "English";
        }

        if (translatedTreatmentStatusChoice === "No Empezado") {
          translatedTreatmentStatusChoice = "Not Started";
        } else {
          translatedTreatmentStatusChoice = "In Progress";
        }

        formStateWithDefaultValues.preferredLanguage = translatedLanguageChoice;
        formStateWithDefaultValues.treatmentStatus =
          translatedTreatmentStatusChoice;
      }

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

        if (language === "English") {
          errors[
            camelCasifyString(inputFields[inputFields.length - 1].name)
          ] = `Failed to submit case, please call us at (704) 377-9222.`;
        } else {
          errors[
            camelCasifyString(inputFields[inputFields.length - 1].name)
          ] = `No se pudo enviar el caso, llámenos al (704) 377-9222.`;
        }
        setErrorHook(errors);
      }
    }
  };

  return (
    <div className="container-fluid contact-us-container home-page p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      {arrayOfInputFields ? (
        <Form
          language={reduxLanguage}
          formTheme="light"
          inputFields={arrayOfInputFields}
          apiEndpoint="/api/cases/create-case"
          formId="contact-us-form"
          setStateHook={setFormInputData}
          setErrorHook={setFormErrorData}
          formState={formInputData}
          formErrors={formErrorData}
          button1Text={reduxLanguage === "English" ? "Submit" : "Entregar"}
          button1Variant="primary"
          button1Loading={submissionInProgress}
          customSubmitFunction={(e) =>
            createNewCase(
              e,
              arrayOfInputFields,
              formInputData,
              setFormErrorData,
              "/api/cases/create-case",
              "POST",
              reduxLanguage
            )
          }
          customSubmitArgs={customSubmitArgsSubmitCase}
        />
      ) : (
        <Loader variant="primary" />
      )}

      <div className="contact-info-wrapper padding-left-and-right container">
        <div className="row">
          <div className="col col-12 col-md-6 google-maps-image-link-wrapper">
            <a
              className="google-maps-image-link"
              href="https://maps.app.goo.gl/y4c2grr8xZhsGh4L9"
              target="_blank"
            >
              <img
                src={googleMapsLocation}
                className="google-maps-image"
                alt="Google Maps Location of Law Firm"
              ></img>
            </a>
          </div>

          <div className="col col-12 col-md-6 text-wrapper">
            <h3>
              {reduxLanguage === "English"
                ? businessPhone.english
                : businessPhone.spanish}
            </h3>
            <h4>(704) 377-9222</h4>

            <h3>
              {reduxLanguage === "English"
                ? businessEmail.english
                : businessEmail.spanish}
            </h3>
            <h4>receptionist@osa-law.com</h4>

            <h3>
              {reduxLanguage === "English"
                ? businessAddress.english
                : businessAddress.spanish}
            </h3>
            <h4>200 Queens Rd Suite #200</h4>
            <h4>Charlotte, NC 28204</h4>

            <a href="https://maps.app.goo.gl/y4c2grr8xZhsGh4L9" target="_blank">
              <FontAwesomeIcon icon={faMap} size="lg" />
              <h3>
                {reduxLanguage === "English"
                  ? getDirections.english
                  : getDirections.spanish}
              </h3>
            </a>
          </div>
        </div>
      </div>
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default ContactUs;
