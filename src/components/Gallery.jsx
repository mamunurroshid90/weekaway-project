import React from "react";

export const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1616597451391-0ec1b98db3a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1542292714-0af7af35e324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
