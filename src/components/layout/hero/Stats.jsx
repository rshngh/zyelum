import React from "react";

const Stats = () => {
  const stats = [
    { value: "400K+", description: "Raw Materials Prices" },
    { value: "1 Million+", description: "SMEs Empowered" },
    { value: "500K+", description: "Orders Delivered" },
    { value: "30+", description: "Countries Served" },
  ];

  const statList = stats.map((stat) => {
    return (
      <div key={stat.value} className="stat max-w-fit m-auto">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div className="stat-value">{stat.value}</div>
        <div className="stat-desc">{stat.description}</div>
      </div>
    );
  });

  return (
    <div className="stats  m-auto text-center w-full mb-2 bg-base-200">
      {statList}
    </div>
  );
};

export default Stats;
