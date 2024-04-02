import { Button } from "../../button/Button";

const BusinessIntroduction = () => {
  return (
    <section className="business-introduction padding-left-and-right">
      <p>
        Welcome to Weblords. We specialize in crafting cutting-edge websites
        that propel your business into the digital forefront. Our designs
        captivate audiences with stunning visuals, while our user-centric
        approach ensures seamless navigation and engagement. We help you drive
        traffic, generate leads, and boost your online visibility.
      </p>
      <br />
      <p>
        Our websites are fully optimized for mobile devices, providing a
        seamless browsing experience on any screen size. Plus, our future-proof
        solutions ensure your website stays ahead of the curve in the
        ever-changing digital landscape. Let's modernize and grow your business
        together. Contact us today!
      </p>

      <div className="button-wrapper padding-top-40">
        <Button
          variant="primary"
          buttonSize="large"
          text="Get Started"
          additionalClassNames="animated-button"
        />
      </div>
    </section>
  );
};

export default BusinessIntroduction;
