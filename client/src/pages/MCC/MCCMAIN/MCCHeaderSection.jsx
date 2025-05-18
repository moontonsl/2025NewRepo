import { Img } from "../../../components";
import React from "react";
import { Link } from "react-router-dom";

export default function MCCHeaderSection() {
  const bgStyle = {
    backgroundImage: "url('/src/pages/MCC/images/MCC2_BG.png')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "#000000", 
  };

  const navItems = [
    {
      image: "/src/pages/MCC/images/Overview.png",
      alt: "Tournament Structure",
      path: "/tournament-structure"
    },
    {
      image: "/src/pages/MCC/images/OrgEnlist.png",
      alt: "Org Enlist",
      path: "/org-enlist"
    },
    {
      image: "/src/pages/MCC/images/Rulebook.png",
      alt: "Rulebook",
      path: "/rulebook"
    },
    {
      image: "/src/pages/MCC/images/Roadmap.png",
      alt: "Calendar",
      path: "/mcc/calendar"
    },
    {
      image: "/src/pages/MCC/images/Reg.png",
      alt: "Registration",
      path: "/registration"
    }
  ];

  // First 4 items for the 2x2 grid
  const mainNavItems = navItems.slice(0, 4);
  // Registration item
  const registrationItem = navItems[4];

  return (
    <>
      {/* MCC header section */}
      <div className="w-full">
        <div className="flex flex-col items-center py-5 min-h-screen" style={bgStyle}>
          {/* MCC Logo and Title */}
          <div className="flex flex-col items-center justify-center w-full mt-2 mb-4 md:mt-4 md:mb-6 ">
            
            <Img
              src="/src/pages/MCC/images/MCC_HLOGO.png"
              alt="MCC Logo"
              className="h-[200px] md:h-[383px] object-contain"
            />
          </div>

          {/* Category Images */}
          <div className="w-full">
            {/* Desktop view - single row */}
            <div className="hidden lg:flex justify-center flex-wrap">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path} className="">
                  <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                      src={item.image}
                      alt={item.alt}
                      className="w-[300px] h-[300px] object-contain"
                />
              </div>
            </Link>
              ))}
            </div>
            
            {/* Mobile/Tablet view (2x2 grid + centered registration) */}
            <div className="lg:hidden">
              {/* 2x2 Grid for main items */}
              <div className="grid grid-cols-2">
                {mainNavItems.map((item, index) => (
                  <Link key={index} to={item.path}>
                    <div className="cursor-pointer transition-transform hover:scale-110 flex flex-col items-center ">
                <Img
                        src={item.image}
                        alt={item.alt}
                        className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] object-contain  scale-125"
                />
              </div>
            </Link>
                ))}
              </div>
              
              {/* Centered Registration */}
              <div className="flex justify-center">
                <Link to={registrationItem.path}>
                  <div className="cursor-pointer transition-transform hover:scale-110 flex flex-col items-center">
                <Img
                      src={registrationItem.image}
                      alt={registrationItem.alt}
                      className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] object-contain  scale-125"
                />
              </div>
            </Link>
              </div>
            </div>
          </div>

          {/* Logos at bottom */}
          <div className="flex justify-center items-center gap-6 md:gap-12 mt-6 md:mt-10 mb-2">
            <Img
              src="/src/pages/MCC/images/MSL LOGO.png"
              alt="MSL Logo"
              className="h-[40px] md:h-[60px] object-contain"
            />
            <Img
              src="/src/pages/MCC/images/MLBB NEW LOGO.png"
              alt="MLBB Logo"
              className="h-[40px] md:h-[60px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
