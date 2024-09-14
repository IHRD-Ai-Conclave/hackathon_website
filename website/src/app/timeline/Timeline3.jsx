import React from "react";
import { Timeline } from "../components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "14/08/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient font-bold text-base md:text-lg mb-4 text-center">
           <u>
            Registration Starts
            </u>
          </p>
          <p className="text-gradient text-base md:text-lg font-medium mb-4 text-center">
            Form a team of 2-4 and register.
          </p>
        </div>
      ),
    },
    {
      title: "06/09/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 text-center">
            Registration form closes
          </p>
        </div>
      ),
    },
    {
      title: "13/09/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 text-center">
            Selected teams receive emails
          </p>
        </div>
      ),
    },
    {
      title: "17/09/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 text-center">
            Selected Teams to pay the registration fee of 500
          </p>
        </div>
      ),
    },
    {
      title: "09/10/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 text-center">
            Hackathon begins
          </p>
        </div>
      ),
    },
    {
      title: "10/10/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-gradient text-base md:text-lg font-medium mb-4 text-center">
            Hackathon ends
          </p>
          <p className="text-gradient font-bold text-base md:text-lg mb-4 text-center">
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
