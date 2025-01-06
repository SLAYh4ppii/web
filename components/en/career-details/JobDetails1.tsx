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
                  <span className="fs-seven p-1 px-2">Senior Level Game Designer</span>
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
                Senior Level Game Designer
                </h2>
                <p>
                  A senior game designer leads game development from inception to completion,
                  crafting gameplay mechanics and levels for an engaging player experience.
                  They oversee storytelling and level balancing, collaborating with teams to ensure innovation and quality.
                  With a focus on industry trends, they integrate cutting-edge 
                  technologies into projects. Through mentorship and QA testing, they deliver polished, bug-free games.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                  At Ricked Studios, we recognize the pivotal role of a senior-level game designer in crafting exceptional gaming experiences.
                 Our senior game designers lead the creative process from conception to completion,
                  leveraging their expertise to ensure innovation and quality in every project.
                  With a deep understanding of game design principles and industry trends,
                 they guide our team towards delivering engaging gameplay that resonates with players.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                   Extensive Experience: A senior-level game designer should have extensive experience in game development,
                    ideally with a proven track record of leading projects from conception to completion.
                  </li>
                  <li>
                    Expertise in Game Design: They should possess a deep understanding of the fundamentals of game design,
                   including gameplay mechanics, level design, storytelling, balancing, and player psychology.
                  </li>
                  <li>
                  Technical Skills: Proficiency in common game design tools and engines such as Unity,
                   Unreal Engine, or other relevant software programs is required. 
                  </li>
                  <li>
                      Creative Vision: A senior-level game designer should have a strong creative vision and
                     be able to develop and implement innovative gameplay ideas that enhance the player experience.
                  </li>
                  <li>
                    Communication and Leadership Skills: They should be
                   able to effectively communicate with and lead a team of designers,
                    artists, developers, and other stakeholders.
                  </li>
                  <li>
                    Problem-Solving Abilities: The ability to identify challenges
                   during the development process and devise creative 
                   solutions is crucial for success in this role.
                  </li>
                  <li>
                   Analytical Skills: The ability to analyze and
                   interpret gameplay data to improve gameplay mechanics 
                   and optimize player experiences is advantageous.
                  </li>
                  <li>Passion for Games: A senior-level game designer should 
                    have a passion for games and a deep understanding
                     of the various genres and platforms on which games are released.
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
