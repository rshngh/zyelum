import React from "react";
import Sidebar from "../sidebar/Sidebar";

const CategoryHeader = () => {
  const categories = [
    {
      id: 1,
      name: "Steel",
    },
    {
      id: 2,
      name: "Agriculture",
    },
    {
      id: 3,
      name: "Polymer",
    },
    {
      id: 4,
      name: "Petroleum",
    },
    {
      id: 5,
      name: "Construction",
    },
    {
      id: 6,
      name: "Nonferrous",
    },
    {
      id: 7,
      name: "Chemical",
    },
    {
      id: 8,
      name: "Fashion",
    },
  ];

  const categoryList = categories.map((category) => {
    return (
      <li className="btn btn-soft mx-1 " key={category.id}>
        <a className="text-center m-auto">{category.name}</a>
      </li>
    );
  });

  return (
    <div className="flex bg-base-100 my-2 ">
      <div className="min-w-fit">
        <Sidebar />
      </div>
      {/* Category lis */}
      <div className="overflow-x-auto ">
        <ul className="flex  rounded-box">{categoryList}</ul>
      </div>
    </div>
  );
};

export default CategoryHeader;
