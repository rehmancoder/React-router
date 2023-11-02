import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const Modal = ({ isOpen, closeModal, title, content, img, price }) => {
  const modalClass = isOpen ? "block" : "hidden";

  return (
    <div className={`fixed inset-0 ${modalClass} z-10 overflow-y-auto`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left pb-5 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeModal}
              type="button"
              className="mt-4 text-3xl font-medium rounded-md text-[#15E2EA]"
            >
              <RxCrossCircled />
            </button>
          </div>
          <div className="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4">
            <img src={img} alt="" className="rounded-lg" />

            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-3">
              {title}
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{content}</p>
            </div>
            <div className="flex gap-2 mt-5 text-lg">
              <h2 className="font-medium">Starting at :</h2>
              <h3 className="text-red-600 font-bold">{price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
