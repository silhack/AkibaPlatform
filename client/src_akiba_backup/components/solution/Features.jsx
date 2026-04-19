// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { features } from "../../data/data";
import CardFeatures from "./CardFeatures";

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <h2 className="text-normal-orange text-2xl md:text-3xl font-bold text-center mb-6">
        Fonctionnalités clés
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CardFeatures feature={feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
