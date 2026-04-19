// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CallToAction = ({ text, cta, link }) => {
  const navigate = useNavigate();

  const goToLink = () => navigate(`/${link}`);

  return (
    <motion.section
      className="container mx-auto gap-8 px-6 md:px-12 lg:px-0 flex md:flex-row flex-col items-center justify-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg w-full md:w-1/2 text-justify md:text-xl md:mb-0">{text}</h2>
      <button
        onClick={goToLink}
        className="mt-4 bg-normal-blue w-full md:w-1/2 text-white px-6 py-3 rounded-lg font-semibold hover:bg-normal-blue-hover transition"
      >
        {cta}
      </button>
    </motion.section>
  );
};

export default CallToAction;
