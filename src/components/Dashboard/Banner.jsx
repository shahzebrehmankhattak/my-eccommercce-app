import React from "react";
import "./Dashboard.css";
import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner1">
        <img src={banner} alt="" />
      </div>

      <div className="banner2">
        <img src={banner2} alt="Running Kit Discount" />
      </div>
    </div>
  );
};

export default Banner;
