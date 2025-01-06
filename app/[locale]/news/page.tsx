"use client";
import Banner from "@/components/en/about/Banner";
import Focus from "@/components/en/about/Focus";
import Story from "@/components/en/about/Story";
import Values from "@/components/en/about/Values";
import CallToAction from "@/components/en/game/CallToAction";
import About from "@/components/en/home/About";
import Counter from "@/components/en/home/Counter";
import Team from "@/components/en/home/Team";
import Testimonials from "@/components/en/home/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* About */}
      <About />
      {/* Values */}
      <Values />
      {/* Team */}
      <Team />
      {/* Counter */}
      <div className="pb-120">
        <Counter />
      </div>

      {/* Focus section */}
      <Focus />
      {/* Story */}
      <Story />
      {/* call to action */}
      <CallToAction />
      {/* Testimonial */}
      <Testimonials />
    </>
  );
};

export default page;
