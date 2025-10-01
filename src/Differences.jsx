import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Differences() {
  return (
    <div className="Services">
      {/* First Row */}
      <h3 className="text-center p-4">Our Points of Differences</h3>
      <div className="row justify-content-center">
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="card mb-4 p-3">
            <div className="card-body">
              <h5 className="card-title text-center">Patient-focused</h5>
              <p className="card-text">
                Creating trusted, long-last personal connections with our
                patients and their families is our number one goal. Our team
                members are knowledgeable, friendly and compassionate, dedicated
                to the highest quality home health experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="card mb-4 p-3">
            <div className="card-body">
              <h5 className="card-title text-center">
                Clinician-owned and Operated
              </h5>
              <p className="card-text">
                As experienced medical professionals and providers, we designed
                Alliant to offer home health care we felt was missing in the
                market – private rooms, space, and an atmosphere that reflects
                the respect we have for our patients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row justify-content-center">
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="card mb-4 p-3">
            <div className="card-body">
              <h5 className="card-title text-center">Family-owned</h5>
              <p className="card-text">
                Health care is a personal journey; however, it shouldn’t be one
                we take alone. Alliant Home Health has been family-owned and
                operated for over a decade, and we bring that level of
                connection to every patient we serve.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="card mb-4 p-3">
            <div className="card-body">
              <h5 className="card-title text-center">Veteran-owned</h5>
              <p className="card-text">
                Built on a foundation of medical military service, we understand
                the sacrifice our veterans make, and aim to provide them with an
                unmatched level of home health care in return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
