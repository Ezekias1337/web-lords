// Library Imports
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Constants
import { footerStrings } from "../../../constants/language-strings/footerStrings";
// Components
import { FooterSocialIcon } from "./dependents/FooterSocialIcon";
import { FooterLink } from "./dependents/FooterLink";
// CSS
import "./footer.scss";
// Assets and Images
import logo from "../../../assets/images/logo/Full_Logo.png";

const Footer = () => {
  const {
    contactColumn,
    infoColumn,
    otherColumn,
    copywrite,
    termsOfService,
    privacyPolicy,
    admin,
  } = footerStrings;

  const { header: contactHeader, getDirections, email } = contactColumn;
  const {
    header: infoHeader,
    aboutUs,
    practiceAreas,
    googleReviews,
  } = infoColumn;
  const {
    header: otherHeader,
    freeConsultation,
    faqs,
    communityInteraction,
  } = otherColumn;

  return (
    <footer className="container-fluid footer">
      <div className="row mx-5 pt-5">
        <div className="col col-8 col-lg-6 social-col">
          {/* <FooterSocialIcon
            icon={faInstagram}
            url="https://www.instagram.com/theolivelawfirm_1957/"
          />
          <FooterSocialIcon
            icon={faFacebook}
            url="https://www.facebook.com/TheOliveLawFirm"
          />
          <FooterSocialIcon
            icon={faTwitter}
            url="https://twitter.com/OliveLawFirm"
          /> */}
        </div>
      </div>
      <div className="row footer-navigation mx-5 mt-5 pb-5">
        <div className="col col-12 col-lg-4 mt-5">
          <h5 className="footer-navigation-header bold-text full-flex">
            {language === "English"
              ? contactHeader.english
              : contactHeader.spanish}
          </h5>
          <FooterLink
            linkText="(704) 377-9222"
            url="tel:+17043779222"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
          <FooterLink
            linkText={language === "English" ? email.english : email.spanish}
            url="mailto: receptionist@osa-law.com"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
          <FooterLink
            linkText={
              language === "English"
                ? getDirections.english
                : getDirections.spanish
            }
            url="https://goo.gl/maps/GdLK2JYiZnwMtetr5"
            openInNewTab={true}
            preserveState={[["language", language]]}
          />
        </div>
        <div className="col col-12 col-lg-4 mt-5">
          <h5 className="footer-navigation-header bold-text full-flex">
            {language === "English" ? infoHeader.english : infoHeader.spanish}
          </h5>
          <FooterLink
            linkText={
              language === "English" ? aboutUs.english : aboutUs.spanish
            }
            url="/about-us"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
          <FooterLink
            linkText={
              language === "English"
                ? practiceAreas.english
                : practiceAreas.spanish
            }
            url="/practice-areas"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
          <FooterLink
            linkText={
              language === "English"
                ? googleReviews.english
                : googleReviews.spanish
            }
            url="/client-reviews"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
        </div>
        <div className="col col-12 col-lg-4 mt-5">
          <h5 className="footer-navigation-header bold-text full-flex">
            {language === "English" ? otherHeader.english : otherHeader.spanish}
          </h5>
          <FooterLink
            linkText={
              language === "English"
                ? freeConsultation.english
                : freeConsultation.spanish
            }
            url="/contact-us"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
          <FooterLink
            linkText={language === "English" ? faqs.english : faqs.spanish}
            url="/faqs"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
          <FooterLink
            linkText={
              language === "English"
                ? communityInteraction.english
                : communityInteraction.spanish
            }
            url="/community-involvement"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
        </div>
      </div>
      <div className="footer-copywrite-disclaimer-wrapper row pb-5 pt-3 mx-5">
        <div className="copywrite-container display-flex col col-12 ps-0">
          <small className="copywrite-disclaimer">
            {language === "English" ? copywrite.english : copywrite.spanish}
          </small>
        </div>
        <div className="col col-12 col-lg-4">
          <FooterLink
            linkText={language === "English" ? admin.english : admin.spanish}
            url="/login"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
        </div>
        <div className="col col-12 col-lg-4">
          <FooterLink
            linkText={
              language === "English"
                ? termsOfService.english
                : termsOfService.spanish
            }
            url="/terms-of-service"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
        </div>
        <div className="col col-12 col-lg-4">
          <FooterLink
            linkText={
              language === "English"
                ? privacyPolicy.english
                : privacyPolicy.spanish
            }
            url="/privacy-policy"
            openInNewTab={false}
            preserveState={[["language", language]]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
