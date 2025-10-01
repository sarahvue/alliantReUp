import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function Questionform() {
  return (
    <div className="Questionform m-4 row">
      <div className="col-lg-6 d-flex align-items-center justify-content-center">
        <h3 className="text-center p-3">We're Here to Answer Your Questions</h3>
      </div>
      <div className="col-lg-6">
        <form autoComplete="off">
          <div className=" mb-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Full name"
              />
            </div>
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email address"
            />
          </div>

          <div className="form-group mb-4">
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div>
            <button type="submit" className="btn btn-primary px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
