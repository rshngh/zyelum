import React from "react";
import SelectDropdown from "../SelectDropdown";

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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}>
            Check Availabilty in Your Area
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box h-96 bg-secondary">
              <SelectDropdown />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <div className="z=1"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
