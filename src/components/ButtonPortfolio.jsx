import React from "react";
import { Link } from "react-scroll";

const ButtonPortfolio = (props) => {
  const name = props.name;
  const path = props.path;
  return (
    <Link to={path}>
      <button
        type="button"
        className=" text-white xs:text-[26px] text-[1px] uppercase font-bold m-3 hover:text-secondary ss:visible invisible z-[30]"
      >
        <div className="flex">
          <div className="col-span-1">
            <svg
              className="xs:h-12 xs:w-12 h-1 w-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              />
            </svg>
          </div>
          <div className="col-span-2 pt-1 ">{name}</div>
        </div>
      </button>
    </Link>
  );
};

export default ButtonPortfolio;
