// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import farmersImg from "../../assets/farmers.png";
import { expertiseData, valeurs } from "../../data/data";
import CardUs from "./CardUs";
import IntroUs from "./IntroUs";

const textStyle = "text-gray-700 text-lg leading-relaxed";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-normal-orange text-2xl md:text-3xl font-bold mb-4">
          Qui sommes-nous ?
        </h2>
        <p className={`${textStyle} mb-4`}>
          Akiba Solution est une entreprise de conseil et technologie qui aide
          les PME agroalimentaires africaines à se structurer, se digitaliser et
          accéder aux financements et marchés.
        </p>
        <p className={textStyle}>
          Grâce à l'IA et l'analyse de données, nous optimisons leur gestion et
          facilitons leur croissance. Convaincus que l'agroalimentaire est clé
          pour le développement économique et la sécurité alimentaire, nous
          offrons des solutions simples, performantes et adaptées aux réalités
          du terrain.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
        <div
          className="max-w-2xl"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <IntroUs
            title={"Notre mission et nos valeurs"}
            subtitle={
              "Notre mission est d’accompagner les PME agroalimentaires dans leur digitalisation, structuration et financement pour assurer leur compétitivité et leur durabilité."
            }
          />
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {valeurs.map((valeur, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <strong>{valeur.label} :</strong> {valeur.description}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="flex justify-center w-full lg:w-auto"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={farmersImg}
            alt="Groupe d’agriculteurs africains souriants dans un champ"
            className="w-full h-92 max-w-md rounded-lg shadow-sm object-cover"
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-6 mt-12">
        <IntroUs
          title={"Notre expertise"}
          subtitle={
            "Nous combinons technologie et accompagnement stratégique pour offrir des solutions adaptées aux PME agroalimentaires"
          }
        />
        <div className="grid items-center md:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardUs {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
