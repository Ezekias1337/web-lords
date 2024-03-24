// Library Imports
import { FC } from "react";
// CSS
import "./page-header.scss";

interface PageHeaderProps {
  language: string;
  title: {
    english: string;
    spanish: string;
  };
  includeBanner?: boolean;
  additionalClassNames?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  language,
  title,
  includeBanner,
  additionalClassNames,
}) => {
  const { english, spanish } = title;

  return (
    <h1
      className={`page-title ${
        additionalClassNames !== undefined ? additionalClassNames : ""
      } ${includeBanner === true ? "banner-title" : ""}`}
    >
      {language === "English" ? english : spanish}
    </h1>
  );
};
