import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import ServiceLocations from "@/components/ServiceLocations";
import ImportPartners from "@/components/ImportPartners";
import CustomerCare from "@/components/CustomerCare";
import NationalService from "@/components/NationalService";
// import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaBuilding, FaGlobeAsia, FaHandshake, FaUsers, FaFlag } from "react-icons/fa";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home", icon: <FaHome /> },
    { name: "About", link: "#about", icon: <FaBuilding /> },
    { name: "Locations", link: "#locations", icon: <FaGlobeAsia /> },
    { name: "Partners", link: "#partners", icon: <FaHandshake /> },
    { name: "Customers", link: "#customers", icon: <FaUsers /> },
    { name: "Services", link: "#services", icon: <FaFlag /> },
  ];

  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-ful">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <CompanyOverview />
        <ServiceLocations />
        <ImportPartners />
        <CustomerCare />
        <NationalService />
      </div>
    </main>
  );
}
