import {ABOUT_TEXT_1} from '../constants/index'
import {ABOUT_TEXT_2} from '../constants/index'
import {ABOUT_TEXT_3} from '../constants/index'
import {motion} from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0},
  whileInView: {
    x: 0, opacity: 1},
  transition: { duration: 1.5, delay: delay },
});

const About = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
          About
          <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-col items-center justify-center mx-auto max-w-4xl space-y-6">
          <motion.p 
           whileInView={{ opacity: 1, x: 0 }} 
           initial={{ opacity: 0, x: -100 }} 
           transition={{ duration: 1.5 }}
          className="text-lg text-center">
            {ABOUT_TEXT_1}
          </motion.p>
          <motion.p 
           whileInView={{ opacity: 1, x: 0 }} 
           initial={{ opacity: 0, x: -100 }} 
           transition={{ duration: 2 }}
          className="text-lg text-center">
            {ABOUT_TEXT_2}
          </motion.p>
          <motion.p 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 2.5 }}
          className="text-lg text-center">
           {ABOUT_TEXT_3}
          </motion.p>
        </div>
      </div>
    );
  };
  
  export default About;
  