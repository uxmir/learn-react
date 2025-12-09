import React from "react";
import Button from "./Button";
const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed w-full top-0 h-full bg-black/60 flex justify-center items-center">
      <div className="w-[1000px] h-100 rounded-2xl bg-white">
        <div className="flex items-end">
          <Button event={closeModal} btnValue={"CloseModal"} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
