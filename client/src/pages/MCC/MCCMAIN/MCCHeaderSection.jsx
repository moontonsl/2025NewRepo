import { Img } from "../../../components";
import React from "react";
import { Link } from "react-router-dom";

export default function MCCHeaderSection() {
  const bgStyle = {
    backgroundImage: "url('/images/MCC2_BG.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "#000000", 
  };

  const navItems = [
    {
      image: "/images/Overview.png",
      alt: "Tournament Structure",
      path: "/tournament-structure"
    },
    {
      image: "/images/OrgEnlist.png",
      alt: "Org Enlist",
      path: "/org-enlist"
    },
    {
      image: "/images/Rulebook.png",
      alt: "Rulebook",
      path: "/rulebook"
    },
    {
      image: "/images/Roadmap.png",
      alt: "Calendar",
      path: "/mcc/calendar"
    },
    {
      image: "/images/Reg.png",
      alt: "Registration",
      path: "/registration"
    }
  ];

  return (
    <>
      {/* MCC header section */}
      <div className="w-full">
        <div className="flex flex-col items-center py-[30px] min-h-screen" style={bgStyle}>
          {/* MCC Logo and Title */}
          <div className="flex flex-col items-center justify-center w-full mt-4 mb-6 md:mt-8 md:mb-12">
            <Img
              src="/images/MCC_HLOGO.png"
              alt="MCC Logo"
              className="h-[130px] md:h-[180px] object-contain"
            />
          </div>

          {/* Category Images: grid on mobile, single row on large screens */}
          <div className="w-full max-w-7xl px-4">
            {/* Desktop view (single row) */}
            <div className="hidden lg:flex justify-center items-center gap-4 xl:gap-6">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path} className="flex-shrink-0">
                  <div className="cursor-pointer transition-transform hover:scale-105">
                    <Img
                      src={item.image}
                      alt={item.alt}
                      className="w-[230px] h-[230px] xl:w-[250px] xl:h-[250px] object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Tablet/Mobile view (grid) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
              {navItems.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} 
                  className={`${
                    index === 4 ? "col-span-2 md:col-span-1 mx-auto" : ""
                  }`}
                >
                  <div className="cursor-pointer transition-transform hover:scale-110 flex flex-col items-center">
                    <Img
                      src={item.image}
                      alt={item.alt}
                      className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Logos at bottom */}
          <div className="flex justify-center items-center gap-6 md:gap-12 mt-8 md:mt-16 mb-4 md:mb-8">
            <Img
              src="/images/MSL LOGO.png"
              alt="MSL Logo"
              className="h-[50px] md:h-[80px] object-contain"
            />
            <Img
              src="/images/MLBB NEW LOGO.png"
              alt="MLBB Logo"
              className="h-[50px] md:h-[80px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
