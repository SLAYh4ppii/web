import Link from "next/link";
import React, { useState } from "react";

const JobDetails2 = () => {
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
                  <span className="fs-seven p-1 px-2">Level Game Designer</span>
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
                Level Game Designer
                </h2>
                <p>
                 As a Level Game Designer, your job is to create fun and challenging levels for players.
                 You&apos;ll work with a team to design and build these levels, making sure they&apos;re exciting and balanced. 
                 It&apos;s important to pay attention to detail and be creative as you make changes to improve the gameplay.
                 Your goal is to create an enjoyable gaming experience that keeps players engaged and entertained.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About Us</h3>
                <p>
                At Ricked Studios, our level game designers craft captivating gameplay experiences,
                 balancing challenge and enjoyment. With a commitment to excellence, 
                we uphold creative vision and design standards, ensuring engaging experiences for players.
                </p>
              </div>
              <div className="single-content">
                <h3 className="visible-slowly-bottom mb-3">About You</h3>
                <ul className="ms-4 d-grid gap-1">
                  <li>
                  Ability to design original and engaging game levels,
                  </li>
                  <li>
                  Knowledge of various game mechanics and their application in level designs,
                  </li>
                  <li>
                  Skill in crafting level pacing to challenge and entertain players effectively,
                  </li>
                  <li>
                  Competence in balancing challenges and rewards for a positive player experience,
                  </li>
                  <li>
                  Capability to tell a coherent and compelling story through level design,
                  </li>
                  <li>
                  Effective utilization of assets to create diverse and interesting game environments,
                  </li>
                  <li>
                  Consideration of usability and player guidance for an intuitive and smooth gaming experience,
                  </li>
                  <li>
                  Conducting tests and adjustments to optimize level design and incorporate player feedback,
                  </li>
                  <li>
                  asic knowledge of game design tools and engines,
                  </li>
                  <li>
                  Collaboration with other designers, developers, and artists to create a coordinated and cohesive gaming experience,
                  </li>
                  <li>
                  Efficient organization and prioritization of tasks to meet deadlines and complete projects on time,
                  </li>
                  <li>Interest in the agile working environment,
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

export default JobDetails2;
