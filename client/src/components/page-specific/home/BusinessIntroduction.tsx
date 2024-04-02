import { Button } from "../../button/Button";

const BusinessIntroduction = () => {
  return (
    <section className="business-introduction padding-left-and-right padding-top-80 padding-bottom-80">
      <p>
        Our websites are fully optimized for mobile devices, providing a
        seamless browsing experience on any screen size. Plus, our future-proof
        solutions ensure your website stays ahead of the curve in the
        ever-changing digital landscape.
      </p>
      <br />
      <p>Let's modernize and grow your business together. Contact us today!</p>

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
