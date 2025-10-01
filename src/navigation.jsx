import React from "react";

export default function Navigation() {
  return (
    <div className="Navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary rounded-5 px-4 mt-4">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Company
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Referrals
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Resources
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
