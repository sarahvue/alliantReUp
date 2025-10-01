import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <div className="Footer my-5 py-3">
      <div className="row">
        <div className="col-lg-6">
          <h6>Our Contact Information:</h6>
          <p>Phone: (303) 424-8000</p>
          <p>Fax: (303) 237-3907</p>
          <p>
            <a href="mailto:care@alliantliving.com">care@alliantliving.com</a>
          </p>
        </div>
        <div className="col-lg-6">
          <div>
            <h6>Westminster Location</h6>
            <address>
              12225 Pecos St. Suites 100/200 Westminster, CO 80234
            </address>
          </div>
          <div>
            <h6>Colorado Springs Location</h6>
            <address>
              125 Kelly Johnson Blvd. Suite 340 Colorado Springs, CO 80920
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
