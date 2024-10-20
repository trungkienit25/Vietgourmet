// import React from "react";
// import dynamic from "next/dynamic";

// import AppData from "@data/app.json";
// import Products from '@data/products';

// import HeroSection from "@components/sections/Hero"
// import AboutSection from "@components/sections/About";
// import CategoriesSection from "@components/sections/Categories";
// import TeamSection from "@components/sections/Team";
// import CallToActionSection from "@components/sections/CallToAction";

// const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );

// export const metadata = {
//   title: {
// 		default: "Home",
// 		template: "%s | " + AppData.settings.siteName,
// 	},
//   description: AppData.settings.siteDescription,
// }

// async function Home1() {
//   return (
//     <>
//       <HeroSection type={1} />
//       <AboutSection />
//       <CategoriesSection />
//       <ProductsSlider items={Products.collection['popular']} slidesPerView={4} />
//       <TeamSection />
//       <CallToActionSection />
//     </>
//   );
// };
// export default Home1;
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from '@data/products';

import AboutTwoSection from "@components/sections/AboutTwo";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import FeaturesOneSection from "@components/sections/Features";
import HeroSection from "@components/sections/Hero";

const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "Trang chủ",
	},
  description: AppData.settings.siteDescription,
}

const Home2 = () => {
  return (
    <>
      <HeroSection type={2} />
      <AboutTwoSection />
      {/* <FeaturesOneSection /> */}
      <ProductsSlider items={Products.collection['popular']} slidesPerView={3} />
      <TestimonialSlider />
      <CallToActionTwoSection />
    </>
  );
};
export default Home2;