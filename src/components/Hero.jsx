import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { myPic } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-96 mx-auto`}>
      <div
        className={`relative inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Prashant</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Full Stack Web Developer 
            {/* <br className='sm:block hidden' />
            interfaces and web applications */}
          </p>
        </div>
        <div >
          <img
            src={myPic}
            alt={`feedback_by`}
            className='w-30 rounded-full max-w-full h-auto p-10' // Tailwind classes for resizing
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
