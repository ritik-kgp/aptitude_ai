"use client";

import { motion } from "framer-motion";
//import * as Tooltip from "@radix-ui/react-tooltip";
import { useState, useEffect } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  //const [toggle, setToggle] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowButton(currentScrollY > 640); // Hide button when scroll position is less than 1200px
      setShowImg(currentScrollY < 640);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 fixed  w-full z-50 top-0 bg-gradient-to-r from-slate-800 via-gray-500 to-slate-900`} //relative
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          APTITUDEAI
        </h2>

        {/* <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild> */}
        {showImg && (
          <img
            src="/register.svg"
            alt="register"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            //onClick={() => setToggle(!toggle)}
          />
        )}
        {showButton && (
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
          >
            Get Started
          </button>
        )}
        {/* </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content className="TooltipContent text-white" sideOffset={4}>
                Register
                <Tooltip.Arrow className="TooltipArrow" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider> */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
