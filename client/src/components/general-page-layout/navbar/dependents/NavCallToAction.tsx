// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Components
import { LanguageToggler } from "./LanguageToggler";
// Constants
import { navbarStrings } from "../../../../constants/language-strings/navbarStrings";

export const NavCallToAction = ({
  theme,
  language,
}: {
  theme: string;
  language: string;
}) => {
  const { callUs, afterHours } = navbarStrings;

  return (
    <div className="nav-call-to-action container-fluid">
      <div className="row">
        <div className="col col-12 col-xl-6 phone-info-col">
          <h3 className="navbar-call-us">
            {language === "English" ? callUs.english : callUs.spanish}
          </h3>
          <div className="icon-and-number-wrapper">
            <FontAwesomeIcon icon={faPhone} size="xl" />
            <h3>+1 (704) 377-9222</h3>
          </div>
        </div>
        <div className="col col-12 col-xl-6 after-hours-column phone-info-col">
          <h3 className="navbar-call-us">
            {language === "English" ? afterHours.english : afterHours.spanish}
          </h3>
          <div className="icon-and-number-wrapper">
            <FontAwesomeIcon icon={faPhone} size="xl" />
            <h3>+1 (704) 999-6967</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-12 toggler-align display-flex language-toggler-col">
          <LanguageToggler />
        </div>
      </div>
    </div>
  );
};
