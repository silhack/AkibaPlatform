import React from 'react';
import { Link } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import marketImg from "../../assets/announcement.svg";
import moneyImg from "../../assets/financial.svg";
import gestionImg from "../../assets/business.svg";
import { FaAngleDoubleRight } from "react-icons/fa";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
};

const slideDown = {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
};

const CardHome = () => {
    return (
        <section className='mt-8 px-4 md:px-8 lg:px-16'>
            <motion.h4
                className='text-normal-orange text-lg font-semibold text-center'
                variants={slideDown}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Nous travaillons...
            </motion.h4>

            <motion.h2
                className='text-xl md:text-2xl font-bold w-full md:w-3/4 mx-auto text-center mt-2'
                variants={slideDown}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Pour structurer votre activité, vous connecter aux marchés et faciliter l’accès aux financements.
            </motion.h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                    img: gestionImg,
                    title: "Gestion & structuration",
                    text: "Gérez facilement votre coopérative avec des outils numériques avancés.",
                    details: [
                        "Digitalisez vos registres et automatisez vos tâches administratives.",
                        "Suivez vos adhérents, finances et stocks en un seul endroit.",
                        "Profitez d’un tableau de bord clair pour une meilleure prise de décision."
                    ]
                },
                {
                    img: moneyImg,
                    title: "Accès au financement",
                    text: "Bénéficiez d’un accompagnement pour obtenir des financements adaptés à votre activité.",
                    details: [
                        "Accédez à des fonds adaptés à vos besoins.",
                        "Recevez des conseils pour optimiser votre dossier.",
                        "Améliorez votre gestion financière avec des outils modernes."
                    ]
                },
                {
                    img: marketImg,
                    title: "Développement des marchés",
                    text: "Trouvez de nouveaux acheteurs et maximisez vos opportunités commerciales.",
                    details: [
                        "Accédez à des plateformes de mise en relation.",
                        "Améliorez la visibilité de vos produits.",
                        "Adoptez des stratégies marketing efficaces."
                    ]
                }].map((solution, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col flex-1 min-h-[450px]  space-y-5 p-5 justify-between items-center bg-white"
                        variants={fadeUp}
                        initial="initial"
                        whileInView="whileInView"
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            src={solution.img} 
                            width={96} 
                            height={96} 
                            alt={`Illustration de ${solution.title} pour les coopératives`} 
                            className="w-20 h-20" 
                            loading='lazy'
                        />
                        <h3 className="text-lg md:text-xl font-bold text-center">{solution.title}</h3>
                        <p className="text-sm md:text-base text-center">{solution.text}</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2 text-left text-sm md:text-base">
                            {solution.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                        <Link to="solution" className="flex items-center gap-2 font-bold hover:text-normal-blue-hover transition duration-200">
                            VOIR NOTRE SOLUTION
                            <FaAngleDoubleRight />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CardHome;
