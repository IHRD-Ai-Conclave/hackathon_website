import React from 'react'
import Collapsible from './Collapsable'

const Faq = () => {
  return (
    <div id="faq" className="w-full flex flex-col items-center justify-center px-4 py-8 space-y-8 mt-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-3xl space-y-4">
        <Collapsible title="What is the duration of the hackathon?">
          The hackathon will last for 24 hours.
        </Collapsible>
        <Collapsible title="Where will the event take place?">
          The event will be held in Kanakakunnu Palace, Trivandrum, Kerala.
        </Collapsible>
        <Collapsible title="Who can participate in the event?">
          Participants should be college students from arts, polytechnic, or engineering backgrounds. The event is open to both beginners and experienced developers.
        </Collapsible>
        <Collapsible title="What is the selection criteria for shortlisting?">
             Shortlisting will be based on your github profile.
           </Collapsible>
        <Collapsible title="Is this hackathon a standalone program?">
          No, the hackathon is part of the IHRD GenAI Conclave 2.0.
        </Collapsible>
        <Collapsible title="What activities are included in the program?">
          The program includes coding sessions, workshops, mentoring, and presentations. Participants will work on their projects, attend expert talks, and present their solutions to a panel of judges.
        </Collapsible>
        <Collapsible title="How can I register for the event?">
          You can register by visiting our official website and completing the registration form.
        </Collapsible>
      </div>
    </div>
  )
}

export default Faq