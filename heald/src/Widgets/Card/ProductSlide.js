import React from "react";
import img1 from "../../Elements/Image/SlideshowImg/bag.jpg";
import img2 from "../../Elements/Image/SlideshowImg/bo.jpg";
import img3 from "../../Elements/Image/SlideshowImg/doll.jpg";
import img4 from "../../Elements/Image/SlideshowImg/gamepad.jpg";
import img5 from "../../Elements/Image/SlideshowImg/hrdr.jpg";
import img6 from "../../Elements/Image/SlideshowImg/htr.jpg";

export default function ProductSlide() {
  return (
<div style={{margin:"10px 0px 10px 0px"}}>
  <div className="product_slide_div uk-card uk-card-default">
<div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="sets: true">

<ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
    <li className="margin_product_slide">
        <img src={img1} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img2} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img3} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img4} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img5} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img6} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img1} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img2} alt=""/> 
    </li >
    <li  className="margin_product_slide">
        <img src={img3} alt=""/> 
    </li>
    <li  className="margin_product_slide">
        <img src={img4} alt=""/> 
    </li>
</ul>

<a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
<a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>

</div></div>
      </div>
  );
}
