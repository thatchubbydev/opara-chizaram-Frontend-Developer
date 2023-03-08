import React from "react";
import { BiCaretRight } from "react-icons/bi";

const CapsuleDetails = ({ capsule, onClose }) => {
  return (
    <div className="modal-backdrop text-white">
      <div className="glass1 p-6 px-8 mt-12 space-y-4 rounded-[0.7rem] w-fit text-left drop-shadow-2xl border bg-[#2c124f]">
        <h2 className="text-3xl font-medium">{capsule.capsule_serial}</h2>
        <p className="text-3xl font-medium">
          <span className="text-blue-500">Status:</span> {capsule.status}
        </p>
        <p className="text-3xl font-medium">
          <span className="text-blue-500">Original launch:</span>{" "}
          {capsule.original_launch}
        </p>
        <p className="text-3xl font-medium">
          <span className="text-blue-500">Type:</span> {capsule.type}
        </p>
        <div className="mx-auto flex justify-center text-xl font-medium">
          <button onClick={onClose} className="bg-red-500 p-4 px-10 rounded-lg">
            Close
          </button>
        </div>
      </div>
    </div>
  );
  //   return capsule ? (
  //     <div
  //       className="modal-backdrop"
  //       onClick={() => {
  //         // close modal when outside of modal is clicked
  //         close();
  //       }}
  //     >
  //       <div
  //         className="modal-content"
  //         onClick={(e) => {
  //           // do not close modal if anything inside modal content is clicked
  //           e.stopPropagation();
  //         }}
  //       >
  //         <button onClick={close}>Close</button>
  //       </div>
  //     </div>
  //   ) : null;
};

export default CapsuleDetails;
