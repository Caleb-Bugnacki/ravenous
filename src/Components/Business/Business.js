import React from "react";
import styles from "./Business.module.css";

const business = {
  imageSrc: "HudsonImg.jpg",
  name: "The Hudson",
  address: "208 Curtis Ave",
  city: "Ironton",
  state: "Minnesota",
  zipcode: "56455",
  category: "Cafe",
  rating: 4.8,
  reviewCount: 62,
};

function Business() {
  return (
    <div className="col my-2 border border-black border-4">
      <div className="card mx-0 px-0">
        <img
          src={business.imageSrc}
          className="card-img-top border border-black border-5 mx-0 px-0"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center fw-bolder fs-3">
            {business.name}
          </h5>
          <div className="row row-cols-2">
            <div className="column">
              <p className="card-text fs-6">
                {business.address} <br></br>
                {business.city} <br></br>
                {business.state} {business.zipcode}
              </p>
            </div>

            <div className="column">
              <h5 className="text-end fs-5">{business.category}</h5>
              <h5 className="text-end fs-5">{business.rating} stars</h5>
              <h5 className="text-end fs-5">{business.reviewCount} reviews</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
