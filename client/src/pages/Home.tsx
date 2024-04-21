// Library Imports
import { Helmet, HelmetProvider } from "react-helmet-async";
// Functions, Helpers, Utils and Hooks
// Constants
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import Hero from "../components/page-specific/home/Hero";
import BusinessIntroduction from "../components/page-specific/home/BusinessIntroduction";
import AvailableTiers from "../components/page-specific/home/AvailableTiers";
// CSS
import "../css/page-specific/home.scss";

/* 
  TODO: Add Cookies disclaimer
*/

const Home = () => {
  return (
    <div className="home-page">
      <HelmetProvider>
        <Helmet>
          <title>WebLords | Home</title>
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/desktop/layered-waves.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/desktop/layered-waves-2.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/desktop/layered-waves-3.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/desktop/layered-waves-4.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/desktop/layered-waves-5.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/desktop/layered-waves-6.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/desktop/layered-waves-7.svg"
            as="image"
          />
          
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/mobile/layered-waves.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/mobile/layered-waves-2.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/mobile/layered-waves-3.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/mobile/layered-waves-4.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/mobile/layered-waves-5.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/mobile/layered-waves-6.svg"
            as="image"
          />
          <link
            rel="preload"
            href="/assets/images/svgs/layered-waves/mobile/layered-waves-7.svg"
            as="image"
          />
        </Helmet>
      </HelmetProvider>

      <NavBar />
      <Hero />
      <BusinessIntroduction />
      <AvailableTiers />

      <Footer />
    </div>
  );
};

export default Home;
