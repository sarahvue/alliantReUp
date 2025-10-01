import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Insurance() {
  const insurances = [
    "Medicare",
    "Medicaid",
    "United Healthcare",
    "UHC Secure Horizons",
    "UHC New West",
    "AARP Medicare",
    "GEHA",
    "UHC UMR",
    "UHC All Savers",
    "UHC Commercial Plans",
    "Kaiser Permanente",
    "Humana",
    "Humana Gold Choice",
    "Humana Medicare Plans",
    "Aetna",
    "Aetna Signature PPO",
    "Aetna Medicare",
    "Aetna Commercial plans",
    "Private Pay",
  ];
  return (
    <div className="Insurance my-4">
      <h3 className="text-center p-3">Accepted Insurance</h3>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {insurances.map((insurance, index) => (
          <span
            key={index}
            className="badge bg-secondary rounded-pill px-3 py-2 fs-6 d-flex align-items-center gap-2"
          >
            {insurance}
          </span>
        ))}
      </div>
    </div>
  );
}
