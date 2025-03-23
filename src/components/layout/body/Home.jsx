import React from "react";
import Hero from "./hero/Hero";
import Services from "./hero/Services";
import Stats from "./hero/Stats";

const Home = () => {
  return (
    <div>
      <div className="z=2">
        <Hero />
      </div>
      <div className="z=1">
        <Stats />
      </div>
      <div className="z=1">
        <Services />
      </div>
    </div>
  );
};

export default Home;
