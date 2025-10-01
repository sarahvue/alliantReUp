import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import laptop from "./assets/laptop.jpg"; // Replace with your image

// Reusable card component
function EachResource({ image, link, title }) {
  return (
    <div className="card h-100 d-flex flex-column shadow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={`${title} Resource`}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      </a>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-center m-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link icon-link-hover"
          >
            {title}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi"
              viewBox="0 0 16 16"
              aria-hidden="true"
              width="16"
              height="16"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </a>
        </h5>
      </div>
    </div>
  );
}

export function Resources() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const resourceType = [
    {
      image: laptop,
      link: "https://www.jeffco.us/",
      title: "Jefferson County: Aging and Adult Services",
      filter: ["Local"],
    },
    {
      image: laptop,
      link: "https://www.google.com/",
      title: "Google",
      filter: ["National"],
    },
    {
      image: laptop,
      link: "https://www.colorado.gov/",
      title: "Colorado Gov",
      filter: ["State"],
    },
    {
      image: laptop,
      link: "https://www.nasa.gov/",
      title: "NASA",
      filter: ["National"],
    },
    {
      image: laptop,
      link: "https://www.localnews.com/",
      title: "Local News",
      filter: ["National", "State"],
    },
  ];

  const filters = ["All", ...new Set(resourceType.flatMap((r) => r.filter))];

  // Filter logic
  const filteredResources =
    selectedFilter === "All"
      ? resourceType
      : resourceType.filter((r) => r.filter.includes(selectedFilter));

  return (
    <div className="resources-container container">
      <h3 className="m-4 text-center">Resources For You</h3>

      {/* Filter Buttons */}
      <div className="mb-4 text-center">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`btn mx-2 ${
              selectedFilter === filter ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="row">
        {filteredResources.map((resource, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 p-3 d-flex">
            <div className="w-100 h-100">
              <EachResource
                image={resource.image}
                link={resource.link}
                title={resource.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
