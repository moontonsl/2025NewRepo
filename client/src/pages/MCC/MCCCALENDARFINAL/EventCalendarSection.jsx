import { Heading, Text, Img } from "../../../components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample event data for different months
const eventData = {
  
  "May": [
    { dayOfWeek: "Saturday", dayNum: 3, month: "MAY", event: "University Rivals Visayas Day 1", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 4, month: "May", event: "University Rivals Visayas Day 2", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 17, month: "May", event: "University Rivals Luzon A Day 1", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 18, month: "May", event: "University Rivals Luzon A Day 2", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 24, month: "May", event: "University Rivals Luzon B Day 1", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 25, month: "May", event: "University Rivals Luzon B Day 2", status: "UPCOMING" }
  ],
  "June": [
    { dayOfWeek: "Saturday", dayNum: 1, month: "June", event: "University Rivals Mindanao Day 1", status: "UPCOMING" },
    { dayOfWeek: "Sunday", dayNum: 2, month: "June", event: "University Rivals Mindanao Day 2", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 15, month: "June", event: "Quarter Finals", status: "UPCOMING" },
    { dayOfWeek: "Sunday", dayNum: 16, month: "June", event: "Semi Finals", status: "UPCOMING" },
    { dayOfWeek: "Saturday", dayNum: 29, month: "June", event: "Grand Finals", status: "UPCOMING" },
  ],
};

// Available months for navigation
const availableMonths = ["May", "June"];

export default function EventCalendarSection() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0); // Start with May (index 0)
  const currentMonth = availableMonths[currentMonthIndex];
  const eventSchedule = eventData[currentMonth];

  // Navigation functions
  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthIndex < availableMonths.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[url('/src/pages/MCC/images/MCC2_CALENDAR_BG.png')] bg-cover bg-center flex items-center justify-center">
        <div className="w-full max-w-[92%] sm:max-w-[800px] mx-auto my-4 sm:my-8">
          {/* Calendar Container with Frame */}
          <div className="relative w-full">
            <Img
              src="/src/pages/MCC/images/CalendarFrame.png"
              alt="Calendar Frame"
              className="w-full h-auto"
            />
            
            {/* Calendar Content - Positioned inside the frame */}
            <div className="absolute top-[5%] left-[5%] right-[5%] bottom-[5%] flex flex-col">
              {/* Calendar Header */}
              <div className="flex items-center justify-center mb-2 sm:mb-5 relative">
                <button 
                  className={`absolute left-0 focus:outline-none ${currentMonthIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                  onClick={goToPreviousMonth}
                  disabled={currentMonthIndex === 0}
                >
                  <ChevronLeft size={20} className="sm:w-8 sm:h-8" color="#F3C718" />
                </button>
                
                <h1 className="text-center text-white text-2xl sm:text-4xl font-bold">EVENT CALENDAR</h1>
                
                <button 
                  className={`absolute right-0 focus:outline-none ${currentMonthIndex === availableMonths.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                  onClick={goToNextMonth}
                  disabled={currentMonthIndex === availableMonths.length - 1}
                >
                  <ChevronRight size={20} className="sm:w-8 sm:h-8" color="#F3C718" />
                </button>
              </div>
              
              {/* Month Banner */}
              <div className="bg-[#F3C718] flex justify-center items-center py-1 sm:py-3 mb-2 sm:mb-4">
                <span className="text-xl sm:text-3xl font-bold text-black">{currentMonth}</span>
              </div>
              
              {/* Table Headers */}
              <div className="flex justify-between items-center py-1 sm:py-2 border-b border-[#F3C718]">
                <div className="w-1/4 text-center font-bold text-[#F3C718] text-sm sm:text-xl">DATE</div>
                <div className="w-2/4 text-center font-bold text-[#F3C718] text-sm sm:text-xl">EVENT</div>
                <div className="w-1/4 text-center font-bold text-[#F3C718] text-sm sm:text-xl">STATUS</div>
              </div>
              
              {/* Calendar Events */}
              <div className="flex-grow overflow-y-auto overflow-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {eventSchedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 sm:py-4 border-b border-[#F3C718]">
                    {/* DATE Column */}
                    <div className="w-1/4 flex justify-center">
                      <div className="rounded-md overflow-hidden border border-[#F3C718] w-[55px] sm:w-[90px]">
                        <div className="text-[#F3C718] text-[9px] sm:text-sm text-center font-bold py-0.5 sm:py-1">{item.dayOfWeek}</div>
                        <div className="text-[#F3C718] text-2xl sm:text-4xl font-bold text-center leading-none py-0.5 sm:py-1">{item.dayNum}</div>
                        <div className="bg-[#F3C718] text-black text-[9px] sm:text-sm text-center font-bold py-0.5 sm:py-1">{item.month}</div>
                      </div>
                    </div>
                    
                    {/* EVENT Column */}
                    <div className="w-2/4 px-1 text-center">
                      <div className="text-[#F3C718] text-[11px] sm:text-lg font-bold">
                        {item.event}
                      </div>
                    </div>
                    
                    {/* STATUS Column */}
                    <div className="w-1/4 flex justify-center">
                      <div className="text-[#F3C718] border border-[#F3C718] rounded-md px-2 sm:px-6 py-0.5 sm:py-2 text-center text-[10px] sm:text-base font-bold">
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 