import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-100 my-24">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <span className="badge badge-secondary rounded-2xl mb-2">Zyelum</span>
          <h1 className="text-5xl font-bold ">
            B2B Raw Materials Procurement & Credit Platform
          </h1>
          <p className="py-6 opacity-80">
            India's leading B2B Raw Materials procurement and credit platform,
            dedicated to revolutionising the SME sector.
          </p>
          <button className="btn btn-soft">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
