// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import companies from "../../data/companies";

export const LogoGrid = ({ onLogoClick }) => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {companies.map((company) => (
        <motion.div
          key={company.id}
          className=" bg-white flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => onLogoClick(company)}
        >
          <img src={company.image} alt={company.name} className="h-24" />
        </motion.div>
      ))}
    </motion.div>
  );
};
