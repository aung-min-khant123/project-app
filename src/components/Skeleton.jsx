import React from "react";

function Skeleton() {
  return (
    <>
      
        <div className="w-full h-48 object-cover shadow-xs shadow-black">
          <div className="flex justify-center items-center w-full h-48">
            <svg
            className="w-15 h-15 text-fg-disabled"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          </div>
        </div>
    </>
  );
}

export default Skeleton;
