// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const zoomIn = {
  initial: { opacity: 0, scale: 0.1 },
  animate: { opacity: 1, scale: 1 },
};

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-[#539edd] text-white text-center py-12 sm:px-12 px-6 md:px-12 lg:px-16 space-y-7">
      <motion.div
        className="space-y-10"
        variants={zoomIn}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h4 className="font-bold text-xl uppercase sm:text-2xl">{title}</h4>
        <h2 className="font-bold text-3xl sm:text-4xl">{subtitle}</h2>
      </motion.div>
    </section>
  );
};

export default Hero;
