import Link from "next/link";
import React, { useState } from "react";

const JobDetails = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;
  return (
    <section className="job-opens details pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-7">
            <div className="content-wrapper d-grid gap-4 gap-sm-8">
              <div className="d-flex gap-6 align-items-center">
                <div className="end-area">
                  <span className="fs-seven p-1 px-2">Senior UI/UX Game Designer</span>
                </div>
                <ul className="d-flex gap-6">
                  <li className="d-flex align-items-center gap-2">
                    <i className="material-symbols-outlined mat-icon"> work </i>
                    <span className="fs-seven">Full Time</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="material-symbols-outlined mat-icon">
                      {" "}
                      schedule{" "}
                    </i>
                    <span className="fs-seven">Full Time</span>
                  </li>
                </ul>
              </div>
              <div className="single-content mb-8">
                <h2 className="visible-slowly-bottom display-four mb-2">
                Senior UI/UX Game Designer
                </h2>
                <p>
                 As a Senior UI/UX Game Designer, you&apos;ll lead the design of
                 intuitive and visually engaging interfaces for our games,
                 collaborating closely with cross-functional teams. Your expertise will drive the conceptualization,
                  prototyping, and implementation of innovative design solutions,
                 ensuring a seamless and immersive gaming experience for our players.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                 A Senior UI/UX Game Designer is instrumental in ensuring games are user-friendly and enjoyable for players.
                 They concentrate on creating visually stunning designs and intuitive navigation systems,
                  enhancing player satisfaction.
                 Their role is pivotal in keeping our games competitive in the market.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                  Proficient in user interface (UI)
                   design principles and tools such as Adobe XD, Sketch, or Figma,
                  </li>
                  <li>
                  Strong understanding of user experience (UX) principles,
                   including user research, wireframing, and prototyping,
                  </li>
                  <li>
                  Ability to create visually appealing designs that enhance gameplay and user engagement,
                  </li>
                  <li>
                  Knowledge of current design trends and best practices in the gaming industry,
                  </li>
                  <li>
                  Excellent communication and collaboration skills to work effectively with cross-functional teams,
                  </li>
                  <li>
                  Attention to detail and a focus on usability to create seamless and enjoyable player experiences,
                  </li>
                  <li>
                  Adaptability and willingness to iterate on designs based on user feedback and testing results,
                  </li>
                  <li>
                    Experience in designing intuitive and responsive user interfaces for various platforms (PC, console, mobile).
                  </li>
                  <li>
                  Analytical skills for understanding player behavior and optimizing engagement,
                  </li> 
                  <li>
                  Proficiency in usability testing to enhance user experience,
                  </li> 
                  <li>
                  Familiarity with accessibility standards for inclusive game design,
                  </li>
                </ul>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">Why Join Us?</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>Competitive salary,</li>
                  <li>Health insurance,</li>
                  <li>Continuous learning with mentorship, coaching,</li>
                  <li>Happy hours and team motivational events,</li>
                  <li>Fully Remote working option.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-7 mt-8 mt-lg-0 alt-bg">
            <div className="apply-area cus-scrollbar text-center py-15 px-8">
              <div className="icon-box mb-6 mb-sm-10 d-inline-flex d-center">
                <i className="material-symbols-outlined fs-one"> draw </i>
              </div>
              <div className="section-text">
                <h2 className="visible-slowly-bottom mb-3">
                  Apply for the position now!
                </h2>
                <span>Join a growing team in a dynamic environment.</span>
              </div>
              <div className="btn-area">
                <div className="btn-area mt-5 mt-sm-8 flex-wrap gap-6 d-center">
                  <Link
                    onMouseMove={handleMouseMove}
                    style={style}
                    href="/"
                    className="box-style btn-box d-center">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
