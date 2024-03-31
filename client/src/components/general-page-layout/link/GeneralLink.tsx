// Library Imports
import { FC } from "react";
import { Link, To } from "react-router-dom";
// CSS
import "./general-link.scss";

type LinkProps = {
  text: string;
  url: To;
  openInNewTab: boolean;
  additionalClassNames?: string;
};

export const GeneralLink: FC<LinkProps> = ({
  text,
  url,
  openInNewTab,
  additionalClassNames,
}) => {
  return (
    <Link
      to={url}
      className={`general-link ${
        additionalClassNames !== undefined ? additionalClassNames : ""
      }`}
      target={openInNewTab ? "_blank" : ""}
    >
      {text}
    </Link>
  );
};
