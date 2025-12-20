import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelopeOpenText,
  faBars,
  faX
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import websiteLogo from "../assets/images/logo.png";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = () => {
    setIsOpen(prev => !prev);
  };

  const goToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <section className="sticky top-0 z-50">
      <div className="bg-main-dark text-main-light flex items-center justify-between pl-[15%] pr-[15%] pt-4 pb-4 max-[1000px]:pl-[7.5%] max-[1000px]:pr-[7.5%] max-[900px]:text-xs max-[500px]:block">
        <div className="flex items-center max-[500px]:justify-center max-[500px]:pb-4">
          <h2>
            <FontAwesomeIcon icon={faPhone} className="text-main-gold cursor-pointer" />{" "}
            +1 (432) 490 577
          </h2>
          <h2 className="pl-4">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="text-main-gold cursor-pointer"
            />{" "}
            DaniHotel@gmail.com
          </h2>
        </div>

        <div className="text-main-gold flex items-center max-[500px]:justify-center">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="cursor-pointer pr-4 pl-4"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/daniel.abramiani")
            }
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-pointer pr-4 pl-4"
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/danielabramiani/")
            }
          />
        </div>
      </div>

      <div className="relative bg-main-light px-[15%] flex items-center justify-between max-[1000px]:px-[7.5%] max-[900px]:text-xs max-[900px]:block">
        <FontAwesomeIcon
          icon={isOpen ? faX : faBars}
          className={`cursor-pointer absolute top-6 right-6 ${
            windowWidth <= 500 ? "block" : "hidden"
          }`}
          onClick={handleChange}
        />

        <div className="flex items-center justify-start max-[900px]:justify-center">
          <img
            src={websiteLogo}
            alt="website logo"
            className="w-1/6 lg:w-1/6 md:w-1/4 sm:w-2/5 py-0 max-[500px]:py-3 cursor-pointer"
            onClick={() => goToId("home")}
          />
        </div>

        <div
          className={`flex items-center justify-center text-center max-[500px]:grid-cols-2 max-[500px]:gap-4 
          ${
            windowWidth <= 500
              ? isOpen
                ? "grid"
                : "hidden"
              : "flex"
          }`}
        >
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Rooms", "rooms"],
            ["Food", "food"],
            ["Book", "book"]
          ].map(([label, id]) => (
            <span
              key={id}
              onClick={() => goToId(id)}
              className="ml-6 cursor-pointer max-[500px]:mx-0 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-main-gold group-hover:w-full"></span>
            </span>
          ))}

          <span
            onClick={() => goToId("register")}
            className="rounded-xl text-main-light ml-6 my-2 pt-1.5 pb-1.5 pl-3 pr-3 bg-main-gold cursor-pointer hover:font-bold max-[500px]:w-max max-[500px]:[grid-area:4/1/5/3] max-[500px]:justify-self-center max-[500px]:mx-0"
          >
            Register
          </span>
        </div>
      </div>
    </section>
  );
};

export default NavbarMain;
