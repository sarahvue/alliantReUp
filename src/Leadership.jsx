import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import laptop from "./assets/laptop.jpg";

const execTeam = [
  { name: "John Doe", position: "Founder", headshot: laptop },
  { name: "Jane Doe", position: "Operations Manager", headshot: laptop },
  { name: "Don Doe", position: "Account Manager", headshot: laptop },
  { name: "Dane Doe", position: "Finance Manager", headshot: laptop },
  { name: "Ron Doe", position: "Director of Intake", headshot: laptop },
];

function LeadershipTeam({ image, name, position }) {
  return (
    <div className="card h-100 d-flex flex-column shadow">
      <img
        src={image}
        alt={`${name}`}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h4 className="card-position text-center m-auto">{name}</h4>
        <p className="card-position text-center m-auto">{position}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="Leadership container">
      <h2 className="text-center m-4">Our Leadership Team</h2>
      <div className="row g-4">
        {execTeam.map((member, index) => (
          <div className="col-md-6" key={index}>
            <LeadershipTeam
              image={member.headshot}
              name={member.name}
              position={member.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
