// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { servicesHome } from "../../data/data";
import ServiceCard from "./ServiceCard";

// Animation fadeUp simple
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const ServiceSection = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-16 bg-white">
      {/* Header Section */}
      <h2
        className="text-normal-orange text-sm font-bold md:text-md mb-4 uppercase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        variants={fadeUp}
      >
        Nos Services
      </h2>

      <motion.p
        className="md:w-1/2 text-xl md:text-2xl mb-8 font-medium"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        Nous travaillons pour structurer votre activité, vous connecter aux
        marchés et faciliter l’accès aux financements.
      </motion.p>

      {/* Cartes de services */}
      <div className="grid gap-10 lg:grid-cols-2">
        {servicesHome.map((service, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
