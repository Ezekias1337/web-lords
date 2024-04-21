// Library Imports
//import { useSelector } from "react-redux";
//import { useEffect, useState } from "react";
// Functions, Helpers, Utils and Hooks
//import useDeviceInfo from "../hooks/useDeviceInfo";
// Constants
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
//import { Loader } from "../components/general-page-layout/loader/Loader";
import Hero from "../components/page-specific/home/Hero";
import BusinessIntroduction from "../components/page-specific/home/BusinessIntroduction";
import AvailableTiers from "../components/page-specific/home/AvailableTiers";
// CSS
import "../css/page-specific/home.scss";

/* 
  TODO: Add Cookies disclaimer
*/

const Home = () => {
  /* const userInfo = useDeviceInfo();
  const isDev = import.meta.env.VITE_IS_DEV; */

  // Array of image URLs to preload
  /* const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (userInfo.device === "Desktop") {
      if (isDev === "TRUE") {
        setImageUrls([
          "../../public/assets/images/svgs/layered-waves/desktop/layered-waves.svg",
          "../../public/assets/images/svgs/layered-waves/desktop/layered-waves-2.svg",
          "../../public/assets/images/svgs/layered-waves/desktop/layered-waves-3.svg",
          "../../public/assets/images/svgs/layered-waves/desktop/layered-waves-4.svg",
          "../../public/assets/images/svgs/layered-waves/desktop/layered-waves-5.svg",
          "../../public/assets/images/svgs/layered-waves/desktop/layered-waves-6.svg",
          "../../public/assets/images/svgs/layered-waves/desktop/layered-waves-7.svg",
        ]);
      } else {
        setImageUrls([
          "./assets/images/svgs/layered-waves/desktop/layered-waves.svg",
          "./assets/images/svgs/layered-waves/desktop/layered-waves-2.svg",
          "./assets/images/svgs/layered-waves/desktop/layered-waves-3.svg",
          "./assets/images/svgs/layered-waves/desktop/layered-waves-4.svg",
          "./assets/images/svgs/layered-waves/desktop/layered-waves-5.svg",
          "./assets/images/svgs/layered-waves/desktop/layered-waves-6.svg",
          "./assets/images/svgs/layered-waves/desktop/layered-waves-7.svg",
        ]);
      }
    } else if (userInfo.device === "Mobile") {
      if (isDev === "TRUE") {
        setImageUrls([
          "../../public/assets/images/svgs/layered-waves/mobile/layered-waves.svg",
          "../../public/assets/images/svgs/layered-waves/mobile/layered-waves-2.svg",
          "../../public/assets/images/svgs/layered-waves/mobile/layered-waves-3.svg",
          "../../public/assets/images/svgs/layered-waves/mobile/layered-waves-4.svg",
          "../../public/assets/images/svgs/layered-waves/mobile/layered-waves-5.svg",
          "../../public/assets/images/svgs/layered-waves/mobile/layered-waves-6.svg",
          "../../public/assets/images/svgs/layered-waves/mobile/layered-waves-7.svg",
        ]);
      } else {
        setImageUrls([
          "./assets/images/svgs/layered-waves/mobile/layered-waves.svg",
          "./assets/images/svgs/layered-waves/mobile/layered-waves-2.svg",
          "./assets/images/svgs/layered-waves/mobile/layered-waves-3.svg",
          "./assets/images/svgs/layered-waves/mobile/layered-waves-4.svg",
          "./assets/images/svgs/layered-waves/mobile/layered-waves-5.svg",
          "./assets/images/svgs/layered-waves/mobile/layered-waves-6.svg",
          "./assets/images/svgs/layered-waves/mobile/layered-waves-7.svg",
        ]);
      }
    }
  }, [userInfo, isDev]); */

  // State to track the loading status of images
  /* const [imagesLoaded, setImagesLoaded] = useState(false); */

  // Function to preload images
  /* useEffect(() => {
    const loadImage = (url: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(undefined);
        img.onerror = () => reject();
        img.src = url;
      });
    };

    const preloadImages = async () => {
      try {
        await Promise.all(imageUrls.map(loadImage));
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };
    preloadImages();
  }, [imageUrls]); */

  return (
    <div className="home-page">
      <NavBar />
      {/* {!imagesLoaded ? (
        <>
          <Loader variant="primary" />
          <div className="prefetch"></div>
          <div className="link-to-preload"></div>
        </>
      ) : (
        <>
          <Hero />
          <BusinessIntroduction />
          <AvailableTiers />
        </>
      )} */}
      <div className="prefetch"></div>
      <div className="link-to-preload"></div>
      <Hero />
      <BusinessIntroduction />
      <AvailableTiers />

      <Footer />
    </div>
  );
};

export default Home;
