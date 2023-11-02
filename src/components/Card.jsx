import React, { useState } from "react";

const Card = ({ img, title, description, price, onButtonClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="bg-white shadow-lg w-80 rounded-lg h-[550px] relative">
      <img src={img} alt="" className="rounded-t-lg w-full" />
      <div className="p-5">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-md mt-3">{description}</p>
        <div className="flex gap-2 mt-5 text-lg">
          <h2 className="font-medium">Starting at :</h2>
          <h3 className="text-red-600 font-bold">{price}</h3>
        </div>
        <button
          onClick={() => {
            openModal();
            onButtonClick();
          }}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#15E2EA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#15E2EA]"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Card;
