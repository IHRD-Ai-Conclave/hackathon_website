import React from "react";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "15-10-2024",
      content: (
        <div className="flexr">
          <p className="text-gradient font-bold text-base md:text-lg mb-4 ">
           <u>
            Registration Starts
            </u>
          </p>
          <p className="text-gradient text-base md:text-lg font-medium mb-4 ">
            Form a team of 2-4 and register.
          </p>
        </div>
      ),
    },
    {
      title: "10-11-2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 ">
            Registration form closes
          </p>
        </div>
      ),
    },
    {
      title: "15-11-2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 ">
            Selected teams receive emails
          </p>
        </div>
      ),
    },
    {
      title: "20-11-2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 ">
            Last date to pay the registration fee of 500
          </p>
        </div>
      ),
    },
    {
      title: "09-12-2024",
      content: (
        <div className="flex flex-col items-center ">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 text-center p-3">
            Hackathon begins
          </p>
        </div>
      ),
    },
    {
      title: "10-12-2024",
      content: (
        <div className="flex flex-col ">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 ">
            Hackathon ends
          </p>
          <p className="text-gradient font-bold text-base md:text-lg mb-4 ">
            <u>
            Winners announced
            </u>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="timeline" className="w-full overflow-hidden bg-[#003399]">
      <Timeline data={data} />
    </div>
  );
}
