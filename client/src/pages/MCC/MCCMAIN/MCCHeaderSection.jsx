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

  return (
    <>
      {/* MCC header section */}
      <div className="w-full">
        <div className="flex flex-col items-center py-[30px] min-h-screen" style={bgStyle}>
          {/* MCC Logo and Title */}
          <div className="flex flex-col items-center justify-center w-full mt-8 mb-12">
            <Img
              src="/images/MCC_HLOGO.png"
              alt="MCC Logo"
              className="h-[150px] md:h-[180px] object-contain mb-4"
            />

          </div>

          {/* Category Images in a single row */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full max-w-6xl px-4">
            {/* Tournament Structure */}
            <Link to="/tournament-structure" className="flex-shrink-0">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Overview.png"
                  alt="Tournament Structure"
                  className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] object-contain"
                />

              </div>
            </Link>
            
            {/* Org Enlist */}
            <Link to="/org-enlist" className="flex-shrink-0">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/OrgEnlist.png"
                  alt="Org Enlist"
                  className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] object-contain"
                />
               
              </div>
            </Link>
            
            {/* Rulebook */}
            <Link to="/rulebook" className="flex-shrink-0">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Rulebook.png"
                  alt="Rulebook"
                  className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] object-contain"
                />
               
              </div>
            </Link>
            
            {/* Calendar */}
            <Link to="/mcc/calendar" className="flex-shrink-0">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Roadmap.png"
                  alt="Calendar"
                  className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] object-contain"
                />
               
              </div>
            </Link>
            
            {/* Registration */}
            <Link to="/registration" className="flex-shrink-0">
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Img
                  src="/images/Reg.png"
                  alt="Registration"
                  className="w-[170px] h-[170px] md:w-[200px] md:h-[200px] object-contain"
                />
           
              </div>
            </Link>
          </div>

          {/* Logos at bottom */}
          <div className="flex justify-center items-center gap-8 md:gap-12 mt-16 mb-8">
            <Img
              src="/images/MSL LOGO.png"
              alt="MSL Logo"
              className="h-[60px] md:h-[80px] object-contain"
            />
            <Img
              src="/images/MLBB NEW LOGO.png"
              alt="MLBB Logo"
              className="h-[60px] md:h-[80px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
