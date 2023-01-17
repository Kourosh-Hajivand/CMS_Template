import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";
function Status(props) {
  const status = props.status;
  const valid = props.valid;
  return (
    <div
      className={`rounded flex justify-center items-center space-x-6  py-6 px-16 duration-300 bg-neutral-50 drop-shadow-2xl  z-50 align-top absolute  ${
        status ? "top-0 opacity-100" : "-top-32 opacity-0"
      } `}
    >
      {valid ? (
        <HiCheckCircle className="text-2xl ml-3 text-green-600" />
      ) : (
        <IoCloseCircle className="text-2xl ml-3 text-red-600" />
      )}

      <p className="text-xl text-neutral-700">{props.massage}</p>
    </div>
  );
}

export default Status;
