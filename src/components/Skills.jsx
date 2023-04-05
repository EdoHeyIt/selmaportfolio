import React from "react";
import styles from "../style.js";
import ButtonPortfolio from "./ButtonPortfolio";
import Slide from "react-reveal/Slide";
import checkmark from "../assets/checkmark.png";

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className="flex md:flex-row flex-col md:h-[47rem] md:px-[30px] max-w-[1300px] mx-auto text-white ss:mt-[70px] mt-[30px]"
      >
        <div className="flex-1 flex flex-col justify-center items-center md:max-w-[510px] mx-1 text-center md:pl-4 m-auto ">
          <Slide left>
            <h2 className={`${styles.heading2} type-writer-text sm:py-1 pt-3 `}>
              Skills
            </h2>
            <p className="text-white md:max-w-[600px] md:pt-1 ss:pb-1 pb-0 md:text-[23px] text-center sm:text-[30px] ss:text-[24] mx-auto font-poppins text-[22px] z-20">
              As a digital marketer, I possess a broad range of skills that
              enable me to create effective online marketing campaigns.
            </p>
            <ButtonPortfolio name={"Portfolio"} path={"portfolio"} />
          </Slide>
          <div className="absolute z-[0] md:w-[45%] md:h-[90%] w-[35%] h-[100%] md:right-20 right-6 bottom-30 blue__gradient" />
        </div>
        <Slide right>
          <div className="flex-1 flex md:pt-[55px] flex-col z-10 px-3">
            <p className={`${styles.paragraph1} ss:mt-2 mt-0 text-[24px]`}>
              My Digital Marketer skills:
            </p>
            <div className={`${styles.paragraph2} mt-5`}>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Data Analysis</p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Content Creation</p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>SEO & SEM</p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Communication Skills</p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Social Media </p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Design Skills </p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Writing marketing copy</p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Email marketing</p>
              </div>
              <div className={`${styles.checkmark}`}>
                <img
                  className={`${styles.imgcheckmark}`}
                  src={checkmark}
                  alt="checkmark"
                />
                <p>Video and Photo editing</p>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    </div>
  );
};

export default Skills;
