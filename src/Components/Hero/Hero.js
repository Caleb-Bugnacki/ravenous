import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container-fluid mx-0 px-0 mt-0 pt-0 " id="hero-container">
      <div className="row">
        <div className="col">
          <div className="input-group text-center">
            <form className="form-inline my-2 my-lg-0 ">
              <input
                className="form-control mr-sm-2 text-center"
                type="search"
                placeholder="Search Restaurants?"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
        <div className="col">
          <div className="input-group text-center">
            <form className="form-inline my-2 my-lg-0 ">
              <input
                className="form-control mr-sm-2 text-center"
                type="search"
                placeholder="Where?"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <a
            href="#"
            className="btn btn-primary btn-lg active "
            role="button"
            aria-pressed="true"
          >
            Search
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
