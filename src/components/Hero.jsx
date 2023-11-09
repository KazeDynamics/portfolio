import { styles } from "../styles";
import { motion } from "framer-motion";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto flex items-center justify-center`}
    >
      <div className="container mx-auto px-4 py-12 flex md:items-center md:justify-center flex-col-reverse md:flex-col-reverse lg:flex-row">
        <div className="md:w-1/2 lg:w-2/4 lg:pr-8 mb-8 md:mb-0 text-center lg:text-left">
          <h1 className={`${styles.heroHeadText} `}>
            Hi, I'm <span className="text-[#ff5520]">Daniel </span>
            <span className="wave">🤚</span>
          </h1>
          <p className={`${styles.heroSubText}`}>I'm a Front-End Developer</p>
          <p className={`${styles.heroInfoText}`}>
            <span className="text-[20px] md:text-[30px]">🎸 </span> Driven by
            music
          </p>
          <p className={`${styles.heroInfoText}`}>
            <span className="text-[20px] md:text-[30px]">🌎 </span> Based in
            Costa Rica
          </p>
          <p className={`${styles.heroInfoText}`}>
            <span className="text-[20px] md:text-[30px]">💼 </span>Front-End
            Developer at PGD
          </p>
          <p className={`${styles.heroInfoText}`}>
            <span className="text-[20px] md:text-[30px]">📧 </span>
            daniro1498@gmail.com
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/4 text-center md:mt-0 md:ml-8">
          <div className="green-pink-gradient mx-auto w-40 lg:w-full p-[10px] rounded-[200px]">
            <img
              className="w-full h-50 rounded-full mx-auto md:mx-0"
              src={profile}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
