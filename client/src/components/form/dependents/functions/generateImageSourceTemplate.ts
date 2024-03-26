// Interfaces and Types
import { PhoneNumberCountryCode } from "../constants/formProps";

const getImgUrl = (fileName: string, fileExtension: string = "svg"): string => {
  const imgUrl = new URL(
    `../../assets/icons/country-flags/${fileName}.${fileExtension}`,
    import.meta.url
  ).href;
  return imgUrl;
};

export const generateImageSourceTemplate = (
  phoneCodeObject: PhoneNumberCountryCode
): string => {
  return getImgUrl(
    `${phoneCodeObject.abbreviation} - ${phoneCodeObject.country}`
  );
};
