import React from "react";
import Typewriter from "typewriter-effect";
import ButtonPortfolio from "./ButtonPortfolio.jsx";
import styles from "../style.js";
import home from "../assets/home.png";

const Home = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse md:h-[47rem] py-1 md:px-[30px] max-w-[1300px] mx-auto mb-[65px]">
      <div className="flex-1 flex justify-center items-start flex-col px-3 md:pl-4 md:pb-[100px] py-1 z-10  ">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading1} mt-2 sm:mb-2`}>
            I'm a <br className="sm:block hidden" />
            <span>
              <Typewriter
                options={{
                  strings: ["Digital Marketer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "type-writer-text",
                  delay: 0,
                }}
              />
            </span>
          </h1>
        </div>
        <h1 className={`${styles.heading1}`}>Selma Omerović</h1>
        <p className="font-poppins font-normal text-dimWhite md:text-[18px] md:max-w-[460px] sm:text-[22px] sm:max-w-[500px] text-[25px] leading-[30.8px] max-w-[500px] mt-2 z-10">
          My professional experience will help your business to achieve
          marketing goals through effective digital strategies. I will highlight
          the key features and benefits of your brand, product or service.
        </p>
        <ButtonPortfolio name={"About Me"} path={"about"} />
      </div>
      <div className="flex-1 flex justify-end items-end flex-col sm:px-0 px-12 max-w-[510px] mx-auto ss:pt-0">
        <img
          className="z-[10] md:h-[38rem] sm:h-[30rem] ms:h-[350px] h-[290px]"
          src={home}
          alt="test"
        />
        <div className="absolute z-[1] w-[30%] h-[50%] rounded-full white__gradient bottom-50" />
        <div className="absolute z-[0] w-[60%] h-[80%] right-20 bottom-30 blue__gradient" />
      </div>
    </section>
  );
};

export default Home;
