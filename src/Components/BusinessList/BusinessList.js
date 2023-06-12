import React from "react";
import Business from "../Business/Business";

function BusinessList({ businesses }) {
  return (
    <div className="container">
      <div className="row">
        {businesses.map((business) => {
          return (
            <div className="col-4">
              <Business business={business} key={business.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default BusinessList;
