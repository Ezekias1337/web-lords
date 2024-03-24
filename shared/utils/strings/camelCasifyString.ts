export const camelCasifyString = (string: string): string => {
  const stringToCamelCase = string.charAt(0).toLowerCase() + string.slice(1);
  const stringToCamelCaseJoined = stringToCamelCase.split(" ").join("");

  return stringToCamelCaseJoined;
};
