// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const IntroUs = ({ title, subtitle }) => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className="max-w-2xl"
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-normal-orange text-2xl md:text-3xl font-bold mb-6">
        {title}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{subtitle}</p>
    </motion.div>
  );
};

export default IntroUs;
