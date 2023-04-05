import React from "react";
import styles from "../style.js";
import visual1 from "../assets/visual1.jpg";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="md:h-[47rem] md:px-[30px] px-2 max-w-[1300px] mx-auto text-white md:mt-[30px] mt-[80px]"
    >
      <div className="z-10">
        <h2
          className={`${styles.heading2} type-writer-text sm:py-1 pt-3 text-center `}
        >
          Portfolio
        </h2>
        <p
          className={`${styles.paragraph1} text-center md:pt-2 pt-2 md:pb-3 pb-5 text-[24px]`}
        >
          In my portfolio I will show you my latest visuals
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid ss:grid-cols-4 grid-cols-2 gap-4 ">
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
          <img
            className={`${styles.imgportfolio} `}
            src={visual1}
            alt="visual"
          />
        </div>
        <div className="absolute z-0 md:w-[100%] md:h-[80%] w-[100%] h-[50%] right-0 bottom-30 blue__gradient" />
      </div>
    </section>
  );
};

export default Portfolio;
