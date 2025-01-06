"use client";

import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import PrimaryBtn from "../PrimaryBtn";
import { Next, Prev } from "../SliderBtns";

const Banner = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    centerMode: false,
    centerPadding: "0px 50px",
    focusOnSelect: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Prev />,
    nextArrow: <Next />,
    dots: false,
  };
  return (
    <section className="banner-section index-one overflow-hidden">
      <div className="overlay overflow-hidden">
        <div className="banner-content position-relative">
          <div className="container">
            <div className="row justify-content-between justify-content-center align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="main-content">
                  <div className="mb-8">
                    <h3 className="visible-slowly-bottom sub-title">
                      <span></span>
                    </h3>
                    <span className="display-one">
                      <br />
                      <TypeAnimation
                        sequence={["Rickw", "Rickeds", "RickedStu", "RickedStudios"]}
                        wrapper="span"
                        className="typed d-inline-block"
                        repeat={0}
                        speed={2}
                        deletionSpeed={50}
                      />
                    </span>
                    <p className="fs-four">
                      We bring Gaming to the next Level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
