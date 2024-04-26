// Components
import { PageHeader } from "../../general-page-layout/page-header/PageHeader";

const HowItWorks = () => {
  return (
    <section className="how-it-works padding-left-and-right padding-top-40 padding-bottom-80">
      <div className="how-it-works-text-wrapper">
        <PageHeader title="How It Works" />

        <p>
          Once we're in touch, we'll chat about what you want your website to
          look like—colors, vibe, and even creating a new logo if you need one.
          Then, we'll start building your website. Once it's done, we'll show
          you a demo, and you can tell us if there's anything you want to
          change. You get two chances to tweak things.
        </p>
        <p className="padding-top-40">
          After we've made all the changes you want, we'll put your website live
          on your domain name. It's a straightforward process!
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
