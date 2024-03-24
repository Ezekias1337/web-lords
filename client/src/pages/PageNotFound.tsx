// Library Imports
import { useSelector } from "react-redux";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/page-not-found.scss";

const PageNotFound = () => {
  return (
    <div className="container-fluid home-page p-0">
      {/* <NavBar adminVariant={false} />

      <Footer /> */}
    </div>
  );
};

export default PageNotFound;
