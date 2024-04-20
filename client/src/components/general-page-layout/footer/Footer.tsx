// Library Imports
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Components
import { FooterSocialIcon } from "./dependents/FooterSocialIcon";
import { FooterLink } from "./dependents/FooterLink";
// CSS
import "./footer.scss";
// Assets and Images
import logo from "../../../../public/assets/images/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-and-social-row display-flex align-items-center">
        <div className="footer-logo-col">
          <Link to="/">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Link>
        </div>

        <div className="social-col">
          <FooterSocialIcon
            icon={faInstagram}
            url="https://www.instagram.com/weblordshub?igsh=MzRlODBiNWFlZA=="
          />
          <FooterSocialIcon icon={faFacebook} url="https://www.facebook.com/profile.php?id=61558349652239&mibextid=ZbWKwL" />
          <FooterSocialIcon
            icon={faXTwitter}
            url="https://twitter.com/WebLordsHub"
          />
        </div>
      </div>
      <div className="footer-navigation display-flex justify-content-space-around">
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">
            Contact
          </h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="(864) 666-9727"
              url="tel:+18646669727"
              openInNewTab={false}
            />
            <FooterLink
              linkText="Email"
              url="mailto: overlord@weblordshub.com"
              openInNewTab={false}
            />
          </div>
        </div>
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">Info</h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="About Us"
              url="/about-us"
              openInNewTab={false}
            />
            <FooterLink
              linkText="Free Consultation"
              url="/contact-us"
              openInNewTab={false}
            />
          </div>
        </div>
        <div className="footer-navigation-column">
          <h5 className="footer-navigation-header bold-text full-flex">
            Other
          </h5>

          <div className="footer-link-column display-flex">
            <FooterLink
              linkText="Client Reviews"
              url="/under-construction"
              openInNewTab={false}
            />
            <FooterLink
              linkText="Our Work"
              url="/under-construction"
              openInNewTab={false}
            />
          </div>
        </div>
      </div>
      <div className="footer-copywrite-disclaimer-wrapper align-items-center display-flex justify-content-space-between">
        <div className="copywrite-container display-flex">
          <small className="copywrite-disclaimer">© 2024 by WebLord LLC</small>
        </div>

        <div className="footer-bottom-navigation-wrapper display-flex justify-content-right">
          <div>
            <FooterLink linkText="Admin" url="/login" openInNewTab={false} />
          </div>
          <div>
            <FooterLink
              linkText="Terms of Service"
              url="/terms-of-service"
              openInNewTab={false}
            />
          </div>
          <div>
            <FooterLink
              linkText="Privacy Policy"
              url="/privacy-policy"
              openInNewTab={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
