// Library Imports
import { FC } from "react";
// Interfaces and Types

// CSS
import "./alert.scss";

type AlertProps = {
  variant?:
    | "primary"
    | "primaryDark"
    | "warning"
    | "info"
    | "neutral"
    | "neutralDark"
    | "success"
    | "error";
  bodyText: string;
};

export const Alert: FC<AlertProps> = ({ variant = "primary", bodyText }) => {
  return (
    <div className={`alert ${variant}-alert`}>
      <span>{bodyText}</span>
    </div>
  );
};
