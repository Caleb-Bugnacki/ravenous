import React from "react";
import Business from "../Business/Business";

function BusinessList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Business />
        </div>
        <div className="col">
          <Business />
        </div>
        <div className="col">
          <Business />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Business />
        </div>
        <div className="col">
          <Business />
        </div>
        <div className="col">
          <Business />
        </div>
      </div>
    </div>
  );
}
export default BusinessList;
