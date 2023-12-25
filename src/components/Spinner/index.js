import React from "react";

const Spinner = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-t-8 border-b-8 rounded-full animate-spin-slow border-lightGrey "></div>
    </div>
  );
};

export default Spinner;
