// Library Imports
import { FC } from "react";
import { Link, To } from "react-router-dom";
// CSS
import "./general-link.scss";

type LinkProps = {
  text: string;
  url: To;
  theme: "dark" | "light";
  openInNewTab: Boolean;
  additionalClassNames?: string;
};

export const GeneralLink: FC<LinkProps> = ({
  text,
  url,
  theme,
  openInNewTab,
  additionalClassNames,
}) => {
  return (
    <Link
      to={url}
      className={`general-link ${theme}-link ${
        additionalClassNames !== undefined ? additionalClassNames : ""
      }`}
      target={openInNewTab ? "_blank" : ""}
    >
      {text}
    </Link>
  );
};
