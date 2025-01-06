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
                  <span className="fs-seven p-1 px-2"> Lead VFX Artist</span>
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
                Lead VFX Artist
                </h2>
                <p>
                  As Lead VFX Artist, you lead the creation and integration of visual effects for film, TV, or gaming,
                 driving innovation and ensuring seamless collaboration across departments for captivating storytelling.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                At Ricked Studios, our Lead VFX Artist drives the creation of captivating visual experiences for film,
                 television, and gaming. With a commitment to innovation and seamless collaboration,
                 we push the boundaries of storytelling to deliver immersive entertainment that captivates audiences worldwide
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                  Possess comprehensive knowledge of visual effects (VFX) production and techniques,
                  </li>
                  <li>
                  Have experience in leading and coordinating a VFX team,
                  </li>
                  <li>
                  Demonstrate the ability to conceptualize and execute high-quality visual effects for various media such as film, television, and games,
                  </li>
                  <li>Be proficient in using VFX software such as Autodesk Maya, Adobe After Effects, or Houdini,</li>
                  <li>
                  Possess strong communication skills to collaborate effectively with other departments and team members,
                  </li>
                  <li>
                  Have problem-solving abilities to address technical challenges during production,
                  </li>
                  <li>
                  Showcase creativity and innovation to develop new visual techniques and push the boundaries of what&apos;s possible,
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
