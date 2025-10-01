import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonWalking,
  faHeart,
  faHouse,
  faUserNurse,
  faChartLine,
  faFaceGrinWide,
  faHandshakeAngle,
  faPeopleGroup,
  faBandage,
  faSyringe,
  faBrain,
  faCapsules,
  faHospital,
  faFaceSmile,
  faKitMedical,
  faSuitcaseMedical,
} from "../src/icons";

export default function Services() {
  const servicesWithIcons = [
    { name: "Home Health Care", icon: faHeart },
    { name: "Hospice and Palliative Care", icon: faHouse },
    { name: "Skilled Nursing", icon: faUserNurse },
    { name: "Physical Therapy", icon: faPersonWalking },
    { name: "Occupational Therapy", icon: faChartLine },
    { name: "Speech Therapy", icon: faFaceGrinWide },
    { name: "Counseling", icon: faHandshakeAngle },
    { name: "Social Work", icon: faPeopleGroup },
    { name: "Wound Care", icon: faBandage },
    { name: "Certified Nursing Assistant", icon: faKitMedical },
    { name: "Rehabilitation Services", icon: faSuitcaseMedical },
    { name: "IV Administrations", icon: faSyringe },
    { name: "Neurological Rehabilitation", icon: faBrain },
    { name: "Medical Supplies", icon: faCapsules },
    { name: "Emotional and Spiritual Counseling", icon: faFaceSmile },
    { name: "Short-term In-patient Hospital Care", icon: faHospital },
  ];
  return (
    <div className="Services my-4">
      <h3 className="text-center p-3">Our Services</h3>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {servicesWithIcons.map((service, index) => (
          <span
            key={index}
            className="badge bg-secondary rounded-pill px-3 py-2 fs-6 d-flex align-items-center gap-2"
          >
            <FontAwesomeIcon icon={service.icon} />
            {service.name}
          </span>
        ))}
      </div>
    </div>
  );
}
