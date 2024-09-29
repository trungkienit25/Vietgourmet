// import React from "react";
// import dynamic from "next/dynamic";

// import AppData from "@data/app.json";

// import PageBanner from "@components/PageBanner";
// import AboutTwoSection from "@components/sections/AboutTwo";
// import FeaturesOneSection from "@/src/app/_components/sections/Features";
// import PromoVideoSection from "@components/sections/PromoVideo";
// import TeamSection from "@components/sections/Team";
// import CallToActionTwoSection from "@components/sections/CallToActionTwo";

// const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

// export const metadata = {
//   title: {
// 		default: "About",
// 	},
//   description: AppData.settings.siteDescription,
// }

// const About1 = () => {
//   return (
//     <>
//       <PageBanner pageTitle={"About us."} breadTitle={"About us"} type={1} />
//       <AboutTwoSection />
//       <FeaturesOneSection />
//       <PromoVideoSection />
//       <TeamSection />
//       <TestimonialSlider />
//       <CallToActionTwoSection />
//     </>
//   );
// };
// export default About1;
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import FeaturesOneSection from "@/src/app/_components/sections/Features";
import PageBanner from "@components/PageBanner";
import AboutTwoSection from "@components/sections/AboutTwo";
import CallToActionSection from "@components/sections/CallToAction";
import PromoVideoSection from "@components/sections/PromoVideo";
import TeamSection from "@components/sections/Team";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "About 2",
	},
  description: AppData.settings.siteDescription,
}

const About2 = () => {
  return (
    <>
      <PageBanner pageTitle={"There is no <span>love</span> more sincere <br> than the love of <span>food</span>."} breadTitle={"About us"} description={"Consectetur numquam poro nemo veniam<br>eligendi rem adipisci quo modi."} type={2} />
      <AboutTwoSection />
      <FeaturesOneSection />
      <PromoVideoSection />
      <TeamSection items={3} />
      <TestimonialSlider />
      <CallToActionSection />
    </>
  );
};
export default About2;