// Library Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

type AnimatedNavLinkProps = {
  linkText: string;
  url: string;
  preserveState: [string, string][];
};

export const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({
  linkText,
  url,
  preserveState,
}) => {
  const location = useLocation();

  // Merge the existing search params with the preserved state
  const newSearchParams = new URLSearchParams(location.search);
  for (const [key, value] of preserveState) {
    newSearchParams.set(key, value);
  }

  // Use Link component with the new search params
  return (
    <div className="nav-link-wrapper">
      <Link
        to={{ pathname: url, search: `?${newSearchParams.toString()}` }}
        className="nav-link"
      >
        {linkText}
      </Link>
      <div className="nav-link-underline"></div>
    </div>
  );
};
