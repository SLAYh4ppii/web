import Link from "next/link";
import React, { useState } from "react";

const JobDetails1 = () => {
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
                  <span className="fs-seven p-1 px-2">Sr. 3D Artist</span>
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
                  Sr. 3D Artist
                </h2>
                <p>
                  As a Senior 3D Artist, I bring years of expertise in creating visually stunning and immersive 3D content to the table.
                  With a deep understanding of industry-standard software and techniques, I lead projects from conception to completion,
                 ensuring the highest quality standards are met. My role involves mentoring junior artists, collaborating closely with
                  cross-functional teams,
                  and consistently pushing creative boundaries to deliver exceptional results.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                  At Ricked Studios, our Senior 3D Artists lead with unmatched expertise,
                  delivering top-tier 3D content across industries.
                  They mentor our team, drive innovation, and ensure every project exceeds expectations.
                  Discover how our Senior 3D Artists can elevate your visual storytelling today.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                  Substantial experience in creating 3D content across various platforms and projects,
                  </li>
                  <li>
                  Ability to create highly detailed and precise 3D models of objects, characters, and environments, 
                  </li>
                  <li>
                  Mastery of techniques for applying textures and shaders for realistic surfaces and materials,
                  </li>
                  <li> 
                    Proficiency in animation techniques for compelling character movements and actions.
                  </li>
                  <li>
                  Experience in optimizing rendering settings for high-quality visual results,
                  </li>
                  <li>
                  Capability to lead, guide, and mentor teams to ensure high performance and quality output,
                  </li>
                  <li>
                  Ability to effectively communicate with team members, clients, and stakeholders to understand and implement requirements,
                  </li>
                  <li>Capacity to strategically plan projects and develop creative solutions for complex problems,
                  </li>
                  <li> Willingness to continuously learn and stay updated with the latest technologies and trends in an evolving industry.
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

export default JobDetails1;
