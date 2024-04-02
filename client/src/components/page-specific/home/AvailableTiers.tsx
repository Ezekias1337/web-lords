// Library Imports

// Redux

// Functions, Helpers, Utils, and Hooks

// Constants

// Interfaces and Types

// Assets

// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";
import { Card } from "../../card/Card";
// CSS

// Assets and Images

const AvailableTiers = () => {
  return (
    <section className="available-tiers padding-top-40 padding-bottom-80">
      <PageHeader title="Our Tiers" />
      <div className="option-card-wrapper display-flex justify-content-center">
        <Card
          cardVariant="imageAndBody"
          headerText="Social Hub"
          bodyText="This tier is perfect for individuals or businesses looking to create a simple online presence. /nWith our Basic Profile package, you'll get a personalized landing page, where you can showcase all your social media links in one place."
          buttonCount={1}
          button1Text="Get Started"
          button1Link="/contact-us"
          button1Variant="primary-dark"
          imageSource="https://cdn.mos.cms.futurecdn.net/vBqsjHWH9NnkiUEwtQjUxL-1200-80.jpg"
        />
        <Card
          cardVariant="imageAndBody"
          headerText="Static Showcase"
          bodyText="Take your online presence to the next level with our Static Showcase package./n Ideal for small businesses or portfolios, this tier offers a static webpage with sleek design and no server functionality. Perfect for displaying your brand or portfolio in a professional manner."
          buttonCount={0}
          button1Text="Get Started"
          button1Link="/contact-us"
          button1Variant="primary-dark"
          imageSource="https://cdn.mos.cms.futurecdn.net/vBqsjHWH9NnkiUEwtQjUxL-1200-80.jpg"
        />
        <Card
          cardVariant="imageAndBody"
          headerText="Interact Pro"
          bodyText="Elevate your online experience with our Dynamic Engagement package. /nDesigned for businesses that require server interaction, this tier offers a fully functional webpage with dynamic content and features."
          buttonCount={0}
          button1Text="Get Started"
          button1Link="/contact-us"
          button1Variant="primary-dark"
          imageSource="https://cdn.mos.cms.futurecdn.net/vBqsjHWH9NnkiUEwtQjUxL-1200-80.jpg"
        />
      </div>
    </section>
  );
};

export default AvailableTiers;
