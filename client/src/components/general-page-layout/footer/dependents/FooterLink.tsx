// Library Imports
import { Link, To, useLocation } from "react-router-dom";

export const FooterLink = ({
  linkText,
  url,
  preserveState,
  openInNewTab,
}: {
  linkText: String;
  url: string;
  preserveState: [string, string][];
  openInNewTab: Boolean;
}) => {
  const location = useLocation();

  // Merge the existing search params with the preserved state
  const newSearchParams = new URLSearchParams(location.search);
  for (const [key, value] of preserveState) {
    newSearchParams.set(key, value);
  }

  return (
    <Link
      to={{ pathname: url, search: `?${newSearchParams.toString()}` }}
      className="full-flex"
      target={openInNewTab ? "_blank" : ""}
    >
      <div className="footer-navigation-link-wrapper">
        <span className="footer-navigation-link">{linkText}</span>
        <div className="footer-navigation-underline"></div>
      </div>
    </Link>
  );
};
