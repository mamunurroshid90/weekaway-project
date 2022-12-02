import React from "react";

export const Activities = () => {
  return (
    <div className="max-w-[1140px] w-full m-auto md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl"
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">
          Cruise
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl"
          src="https://images.unsplash.com/photo-1548574505-12caf0050b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] text-white text-2xl font-bold">
          Excursions
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-xl"
          src="https://images.unsplash.com/photo-1544736826-31d150ac064c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};
