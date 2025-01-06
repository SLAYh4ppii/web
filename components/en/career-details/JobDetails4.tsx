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
                  <span className="fs-seven p-1 px-2">Sr. Unreal Developer</span>
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
                Sr. Unreal Developer
                </h2>
                <p>
                A Sr. Unreal Developer is an experienced expert in 
                  using Unreal Engine to craft captivating games.
                 They&apos;re skilled in designing and implementing game features like gameplay mechanics and AI.
                 Collaborating with the team, they ensure the game runs smoothly and meets its goals.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                Our Senior Unreal Developers are the creative force behind our captivating gaming experiences.
                 They leverage Unreal Engine to create visually stunning and immersive games,
                  pushing the boundaries of interactive entertainment.</p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                  Proficiency in Unreal Engine 4 (UE4) and its tools.
                  </li>
                  <li>
                  Strong understanding of game development principles and practices.
                  </li>
                  <li>
                  Expertise in C++ programming language.
                  </li>
                  <li>
                  Knowledge of Blueprint scripting for rapid prototyping and gameplay iteration.
                  </li>
                  <li>
                  Experience in optimizing game performance and memory usage.
                  </li>
                  <li>
                  amiliarity with multiplayer networking and replication in UE4.
                  </li>
                  <li>
                  Knowledge of version control systems like Git for collaborative development.
                  </li>
                  <li>
                  Ability to troubleshoot and debug issues efficiently.
                  </li>
                  <li>
                  Strong problem-solving and analytical skills.
                  </li>
                  <li>
                  Effective communication and teamwork abilities.
                  </li>
                  <li>
                  Ability to adapt to new technologies and learn quickly.
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
