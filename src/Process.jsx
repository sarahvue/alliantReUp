import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import laptop from "./assets/laptop.jpg";

function ProcessStep({ imageLeft, text, description }) {
  // Apply flex-row-reverse only when imageLeft is true
  const rowClass = imageLeft ? "row my-5 flex-md-row-reverse" : "row my-5";

  return (
    <div className={rowClass + " align-items-center"}>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h4>{text}</h4>
        <p>{description}</p>
      </div>
      <div className="col-md-6">
        <img src={laptop} alt="Laptop" className="img-fluid rounded-4" />
      </div>
    </div>
  );
}

export function Process() {
  const steps = [
    {
      imageLeft: false,
      text: "Send Your Referral",
      description:
        "Easily send your referral to us through AllScripts, NaviHealth, email (care@alliantliving.com), or fax (720-501-6686) — whichever method works best for you.",
    },
    {
      imageLeft: true,
      text: "We Will Review Your Referral",
      description:
        "Our Accounts team will review the referral to determine fit.",
    },
    {
      imageLeft: false,
      text: "We Process your Referral",
      description:
        "Our team will process the referral in our internal systems to get the patient started.",
    },
    {
      imageLeft: true,
      text: "Scheduling Our Patient",
      description:
        "We will contact the patient to schedule a start of care date with a clinician.",
    },
    {
      imageLeft: false,
      text: "Care Begins",
      description:
        "Our clinician will meet with the patient and determine a plan of care.",
    },
  ];

  return (
    <div className="Process">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          imageLeft={step.imageLeft}
          text={step.text}
          description={step.description} // Add this
        />
      ))}
    </div>
  );
}
