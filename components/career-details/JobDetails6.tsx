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
                  <span className="fs-seven p-1 px-2">3D Artist</span>
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
                  3D Artist
                </h2>
                <p>
                As a seasoned 3D artist, I specialize in crafting captivating digital worlds and characters,
                 blending technical expertise with creative vision to deliver stunning visuals.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                At Ricked Studios, we&apos;re experts in creating immersive 3D visuals for film, gaming, advertising,
                 and beyond. Our passion lies in transforming ideas into captivating experiences,
                  enhancing storytelling and engaging audiences across industries. From marketing materials to educational simulations, 
                we bring imagination to life with top-notch visuals that captivate and inspire. 
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                   Ability to create accurate and
                   detailed 3D models of objects, characters, and environments.
                  </li>
                  <li>
                   Skill in applying textures and shaders
                   to 3D models to create realistic surfaces and materials.
                  </li>
                  <li>
                  Understanding of animation principles such as timing, weight,
                   and anticipation to create believable character movement and actions.
                  </li>
                  <li>
                  Ability to set up and optimize rendering settings in software like Maya, Blender, or 3ds Max to achieve high-quality output.
                  </li>
                  <li>
                  Skill in lighting scenes effectively and composing shots to create visually appealing and balanced images.
                  </li>
                  <li>
                  Ability to sculpt digital models using software like ZBrush or Mudbox to create organic shapes and detailed surfaces.
                  </li>
                  <li>
                  Knowledge of rigging techniques to create skeletal structures for characters and skinning to deform models properly during animation.
                  </li>
                  <li>Familiarity with particle systems, simulations, and dynamics to create realistic effects such as fire, smoke, and fluid simulations.
                  </li>
                  <li>
                  Ability to troubleshoot technical issues and pay close attention to detail to ensure the quality and realism of 3D assets.
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
