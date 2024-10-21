import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import MenuData from "@data/menu.json";

import PageBanner from "@components/PageBanner";
import PromoSection from "@components/sections/Promo";

const MenuFiltered = dynamic( () => import("@components/menu/MenuFiltered"), { ssr: false } );

export const metadata = {
  title: {
		default: "Thực đơn",
	},
  description: AppData.settings.siteDescription,
}

const Menu3 = () => {
  return (
    <>
      <PageBanner pageTitle={"Thực đơn món ăn"} breadTitle={"Thực đơn"} type={1} />
      
      {/* menu section 1 */}
      <section className="sb-menu-section sb-p-90-60">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <MenuFiltered categories={MenuData.categories} columns={1} />
        </div>
      </section>
      {/* menu end */}

      <PromoSection />
    </>
  );
};
export default Menu3;