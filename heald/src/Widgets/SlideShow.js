import React from "react";
import img1 from "../Elements/Image/SlideshowImg/1.jpg";
import img2 from "../Elements/Image/SlideshowImg/2.jpg";
import img3 from "../Elements/Image/SlideshowImg/3.jpg";

export default function SlideShow() {
  const heights = {
    height:"300px"
  }
  return (
    <div>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        uk-slideshow="true"
        style={heights}
      >
        <ul  className="uk-slideshow-items">
          <li style={heights}>
            <img src={img1} alt="" uk-cover="true" />
          </li>
          <li style={heights}>
            <img src={img2} alt="" uk-cover="true" />
          </li>
          <li style={heights}>
            <img src={img3} alt="" uk-cover="true" />
          </li>
        </ul>

        <a
          style={{  top: "150px"}}
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slideshow-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          style={{ top: "150px"}}
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
        ></a>
      </div>
    </div>
  );
}
