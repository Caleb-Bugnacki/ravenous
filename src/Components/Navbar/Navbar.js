import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <img src="hungrylion.jpg" alt="" width="30" height="24" />
          Ravenous
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <a className="dropdown-item text-white " href="#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white " href="#">
                    Resources
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-white " href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success text-white" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
