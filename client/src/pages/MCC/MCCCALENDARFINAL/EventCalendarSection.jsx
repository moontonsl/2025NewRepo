import { Heading, Text, Img } from "../../../components";
import { Link } from "react-router-dom";
import React, { useState } from "react";

// Sample event data for different months
const eventData = {
  
  "May": [
    { dayOfWeek: "Saturday", dayNum: 3, month: "May", event: "University Rivals Visayas Day 1", status: "UPCOMING" },
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
      {/* event calendar section */}
      <div className="w-full">
        <div className="flex flex-col items-center justify-center bg-[url('/images/MCC2_CALENDAR_BG.png')] bg-cover bg-center min-h-screen py-8">
          {/* Calendar Container with Frame */}
          <div className="w-full max-w-[800px] mx-auto px-4">
            {/* Calendar Frame */}
            <div className="relative">
              <Img
                src="/images/CalendarFrame.png"
                alt="Calendar Frame"
                className="w-full h-auto object-contain"
              />
              
              {/* Calendar Content - Positioned inside the frame */}
              <div className="absolute top-[5%] left-[5%] right-[5%] bottom-[5%] flex flex-col">
                {/* Calendar Header with arrows */}
                <div className="flex justify-center items-center py-2 relative">
                  <button 
                    className={`focus:outline-none absolute left-2 ${currentMonthIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                    onClick={goToPreviousMonth}
                    disabled={currentMonthIndex === 0}
                  >
                    <img src="/images/LeftButton.png" alt="Previous" className="w-6 h-6" />
                  </button>
                  <h1 className="text-2xl font-bold text-white px-12">EVENT CALENDAR</h1>
                  <button 
                    className={`focus:outline-none absolute right-2 ${currentMonthIndex === availableMonths.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-transform'}`}
                    onClick={goToNextMonth}
                    disabled={currentMonthIndex === availableMonths.length - 1}
                  >
                    <img src="/images/RightButton.png" alt="Next" className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Month Banner */}
                <div className="bg-[#F3C718] flex justify-center items-center py-1 my-2">
                  <span className="text-xl font-bold text-black">{currentMonth}</span>
                </div>
                
                {/* Table Headers */}
                <div className="flex justify-between items-center py-2 border-b border-[#F3C718]">
                  <div className="w-1/3 text-center font-bold text-[#F3C718] text-sm">DATE</div>
                  <div className="w-1/3 text-center font-bold text-[#F3C718] text-sm">EVENT</div>
                  <div className="w-1/3 text-center font-bold text-[#F3C718] text-sm">STATUS</div>
                </div>
                
                {/* Calendar Events */}
                <div className="flex-1 overflow-y-auto">
                  {eventSchedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-[#F3C718]">
                      {/* DATE Column */}
                      <div className="w-1/3 flex justify-center">
                        <div className="rounded-md overflow-hidden border border-[#F3C718] w-[60px]">
                          <div className="text-[#F3C718] text-xs text-center font-bold py-0.5">{item.dayOfWeek}</div>
                          <div className="text-[#F3C718] text-2xl font-bold text-center py-0.5">{item.dayNum}</div>
                          <div className="bg-[#F3C718] text-black text-xs text-center font-bold py-0.5">{item.month}</div>
                        </div>
                      </div>
                      
                      {/* EVENT Column */}
                      <div className="w-1/3 text-sm text-center text-[#F3C718] font-bold">
                        {item.event}
                      </div>
                      
                      {/* STATUS Column */}
                      <div className="w-1/3 flex justify-center">
                        <div className="text-[#F3C718] border border-[#F3C718] rounded-md px-3 py-1 text-center text-xs font-bold">
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
      </div>
    </>
  );
} 