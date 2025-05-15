// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { steps } from "../../data/data";
import StepCard from "./StepCard";

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const HowItWorks = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16">
      <h2 className="text-center text-2xl font-bold text-normal-orange mb-8">
        Comment ça marche ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <StepCard step={step} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
