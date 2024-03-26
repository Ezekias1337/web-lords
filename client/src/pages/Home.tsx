// Library Imports
//import { useSelector } from "react-redux";
// Functions, Helpers, Utils and Hooks
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/home.scss";
/* 
  TODO: Add Cookies disclaimer
*/

const Home = () => {
  return (
    <div className="container-fluid home-page p-0">
      <NavBar />

      <Footer />
    </div>
  );
};

export default Home;
