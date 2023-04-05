import React from "react";
import { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-scroll";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="w-full flex py-6 justify-between items-center navbar "
      id="home"
    >
      <ul className="z-[10]">
        <li className="list-none flex justify-start items-center flex-1 ">
          <a
            href="https://www.instagram.com/selmaomerovic_/?hl=en"
            className="anchor"
          >
            <img src={instagram} alt="instagram" className="social-media-img" />
          </a>
          <a href="https://www.facebook.com/selma.omerovic.16">
            <img src={facebook} alt="facebook" className="social-media-img" />
          </a>
          <a href="https://www.linkedin.com/in/selma-omerovic/">
            <img src={linkedin} alt="linkedin" className="social-media-img" />
          </a>
        </li>
      </ul>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[10]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <Link className="nav-animation" to={`${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[18px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
