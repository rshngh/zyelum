import React from "react";
import {
  steel,
  agriculture,
  chemical,
  fashion,
  polymer,
  nonferrous,
  petroleum,
  construction,
} from "../../index.js";

const Sidebar = () => {
  const categories = [
    {
      id: 1,
      name: "Steel",
      img: steel,
    },
    {
      id: 2,
      name: "Agriculture",
      img: agriculture,
    },
    {
      id: 3,
      name: "Polymer",
      img: polymer,
    },
    {
      id: 4,
      name: "Petroleum",
      img: petroleum,
    },
    {
      id: 5,
      name: "Construction",
      img: construction,
    },
    {
      id: 6,
      name: "Nonferrous",
      img: nonferrous,
    },
    {
      id: 7,
      name: "Chemical",
      img: chemical,
    },
    {
      id: 8,
      name: "Fashion",
      img: fashion,
    },
  ];

  const categoriesList = categories.map((category) => {
    return (
      <li className="list-row" key={category.id}>
        <div>
          <img className="size-16 rounded-box" src={category.img} />
        </div>
        <p className="text-center m-auto">{category.name}</p>
      </li>
    );
  });
  return (
    <div className="drawer z-1">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

        <label
          htmlFor="my-drawer"
          className="btn btn-ghost drawer-button text-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          All Categories
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="list rounded-box shadow-md menu text-base-content min-h-full w-72 p-4 bg-secondary">
          <li className="p-4 pb-2 text-xl opacity-60 tracking-wide text-nowrap">
            All Categories
          </li>
          {categoriesList}
          <button className=" btn text-center">view all</button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
