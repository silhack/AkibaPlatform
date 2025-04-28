import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const slideUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
};

export const LogosHome = () => {
    return (
        <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6"
            variants={slideUp}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {[1, 2, 3, 4].map((_, index) => (
                <motion.div
                    key={index}
                    className="h-24 bg-gray-300 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                >
                    <span className="text-lg font-bold">LOGO</span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export const LogosAbout = () => {
    return (
        <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
            variants={slideUp}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {[1, 2, 3].map((_, index) => (
                <motion.div
                    key={index}
                    className="h-52 bg-gray-300 flex items-center justify-center relative group transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-lg font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        LOGO
                    </span>
                    <motion.div
                        className="absolute inset-0 bg-normal-orange flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                    >
                        <span className="text-white font-bold">En savoir plus</span>
                        <FaLink className="text-white mt-1" />
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};
