import Image from "next/image";
import React from "react";
import { Timeline } from '../components/ui/timeline'

export default function TimelineDemo() {
  const data = [
    {
      title: "14/08/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Registration Starts
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Form a team of 2-4 and register.
          </p>
        </div>
      ),
    },
    {
      title: "06/09/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Registration form closes
          </p>
        </div>
      ),
    },
    {
      title: "13/09/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Selected teams receive emails
          </p>
        </div>
      ),
    },
    {
      title: "17/09/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Selected Teams to pay the registration fee of 500
          </p>
        </div>
      ),
    },
    {
      title: "09/10/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Hackathon begins
          </p>
        </div>
      ),
    },
    {
      title: "10/10/2024",
      content: (
        <div className="flex flex-col items-center">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Hackathon ends
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-normal mb-4 text-center">
            Winners announced
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
