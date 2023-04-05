import React from "react";
import styles from "../style.js";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import up2 from "../assets/up2.png";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex md:flex-row flex-col md:h-[37rem] md:px-[30px] max-w-[1000px] md:mx-auto mx-3 text-white mt-[70px] "
    >
      <div className="flex-1 flex flex-col justify-center items-center md:max-w-[500px] ">
        <p
          className={`${styles.paragraph1} pt-2 md:pb-3 pb-5 z-10 md:ml-0 md:text-[36px] text-[30px]`}
        >
          Get in touch
        </p>
        <p className="font-poppins font-normal text-dimWhite md:text-[20px] sm:text-[22px] text-[25px] leading-[30.8px] max-w-[500px] mt-2 mb-8 md:mx-0 z-10">
          Welcome to my contact page! I am glad that you are interested in
          contacting me. If you have any questions about my services, you can
          use the contact form to send me a message. I will answer as soon as
          possible.
        </p>
        <div className="flex">
          <ul className="z-[10] mr-20">
            <li className="list-none flex">
              <a
                href="https://www.instagram.com/selmaomerovic_/?hl=en"
                className="anchor"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="social-media-img"
                />
              </a>
              <a href="https://www.facebook.com/selma.omerovic.16">
                <img
                  src={facebook}
                  alt="facebook"
                  className="social-media-img"
                />
              </a>
              <a href="https://www.linkedin.com/in/selma-omerovic/">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="social-media-img"
                />
              </a>
            </li>
          </ul>
          <Link to="home">
            <img src={up2} alt="up" className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center md:pl-20 max-w-[400px] md:ml-[100px] pb-10 md:mx-0 mx-auto pt-2 z-10">
        <form className="flex items-start flex-col w-[100%] text-[18px] font-poppins">
          <label className="mt-2">Name</label>
          <input className="input-contact" type="text" />
          <label className="mt-2">Email</label>
          <input className="input-contact" type="email" />
          <label className="mt-2">Message</label>
          <textarea className="textarea-contact " />
          <a
            href="#contact"
            className="mt-4 border-b-2 text-[22px] hover:text-secondary "
          >
            Send
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
