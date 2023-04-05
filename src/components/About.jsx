import React from "react";
import about from "../assets/about.png";
import styles from "../style.js";
import ButtonPortfolio from "./ButtonPortfolio";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <section
      id="about"
      className="flex md:flex-row flex-col md:h-[47rem] md:px-[30px] max-w-[1300px] mx-auto sm:mb-0 mb-[70px]"
    >
      <div className="flex-1 flex justify-center items-end max-w-[500px] mx-auto">
        <Slide left>
          <img
            className="md:h-[38rem] sm:h-[27rem] h-[275px] sm:mt-0 mt-[10px] z-10"
            src={about}
            alt="test"
          />
        </Slide>
        <div className="absolute z-[1] w-[15%] h-[40%] rounded-full white__gradient bottom-50" />
        <div className="absolute z-[0] w-[70%] h-[70%] right-20 bottom-30 blue__gradient" />
      </div>

      <Slide right>
        <div className="flex-1 flex text-center md:pt-[55px] flex-col z-10 px-3  ">
          <h2 className={`${styles.heading2} type-writer-text sm:py-1 pt-3`}>
            About Me
          </h2>
          <p className={`${styles.paragraph1} text-[20px] md:max-w-[610px]`}>
            My name is Selma Omerović and I am a Digital Marketing enthusiast.
          </p>
          <p className={`${styles.paragraph2} text-[19px]`}>
            MA of Journalism who has developed a passion for helping businesses
            grow their online presence and connect with their target audience.
            My expertise lies in creating and implementing successful social
            media strategies that drive engagement, increase brand awareness,
            and generate leads. I have strong foundation in marketing principles
            and the ability to think creatively when it comes to digital
            campaigns. I enjoy staying up-to-date with the latest trends and
            best practices in the industry. I believe that continuous learning
            is crucial to staying ahead in the ever-evolving world.{" "}
          </p>
          <ButtonPortfolio name={"Skills"} path={"skills"} />
        </div>
      </Slide>
    </section>
  );
};

export default About;
