import { useState, useEffect } from "react";
import { MAIN_CONTENT } from "../constants";
import profilePic from "../assets/VirajProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const TITLES = ["Software Engineer"];

const Home = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Pause, then switch to next title
      const pause = setTimeout(() => {
        setCharIndex(0);
        setTitleIndex((titleIndex + 1) % TITLES.length);
        setText("");
      }, 1000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, titleIndex]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Viraj Patel
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent h-12"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {MAIN_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/3 lg:p-8 mx-20">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Viraj Patel"
              className="rounded-l-lg rounded-r-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
