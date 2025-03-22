import React from "react";
import { carts, lightning, lightbulb, wallet } from "../../index.js";

const Services = () => {
  const services = [
    {
      icon: carts,
      title: "Buy & Sell With Us",
      description:
        "One stop solution for your raw material sourcing and selling needs",
    },
    {
      icon: lightbulb,
      title: "Raw Materials Prices",
      description:
        "Easily get live prices for all the raw materials that you deal in",
    },
    {
      icon: lightning,
      title: "Raw Materials News",
      description:
        "Get daily raw material news & insights live from the ground",
    },
    {
      icon: wallet,
      title: "Grow With Credit",
      description: "Get access to credit for manufacturers and contractors",
    },
  ];

  const serviceList = services.map((service) => {
    return (
      <div key={service.icon} className="card bg-base-100 w-96  m-auto">
        <figure className="px-10 pt-10">
          <img src={service.icon} alt="icons" className="rounded-xl w-12 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.title}</h2>
          <p>{service.description}</p>
          <div className="card-actions">
            <button className="btn btn-soft">Know more</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="text-center my-26 bg-base-100">
      <h1 className="text-6xl mx-16  text-center mb-4">Our Services</h1>
      <p className="text-center">
        Delivering value to our ecosystem of buyers, suppliers and channel
        partners.
      </p>
      <div className="flex flex-col sm:flex-row m-auto text-center  ">
        {serviceList}
      </div>
    </div>
  );
};

export default Services;
