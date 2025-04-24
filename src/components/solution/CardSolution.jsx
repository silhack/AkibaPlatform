import React from 'react';
import { motion } from 'framer-motion';
import marketImg from "../../assets/announcement.svg";
import moneyImg from "../../assets/financial.svg";
import gestionImg from "../../assets/business.svg";

const solutions = [
    {
        img: gestionImg,
        title: "Intelligence artificielle & analyse de données",
        details: [
            "Collecte et traitement de données en temps réel",
            "Prédiction des prix et tendances du marché",
            "Outils d’aide à la décision pour les PME"
        ]
    },
    {
        img: moneyImg,
        title: "Accès au financement",
        details: [
            "Structuration des dossiers de financement",
            "Mise en relation avec investisseurs et banques",
            "Analyse financière basée sur les données"
        ]
    },
    {
        img: marketImg,
        title: "Développement des marchés",
        details: [
            "Connexion aux acheteurs et distributeurs",
            "Études de marché et stratégies commerciales",
            "Suivi des tendances et traçabilité des produits"
        ]
    },
    {
        img: gestionImg,
        title: "Gestion & structuration",
        details: [
            "Automatisation des tâches",
            "Suivi des opérations en temps réel",
            "Gestion des stocks et des finances"
        ]
    }
];

const CardSolution = () => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
                <motion.div
                    key={solution.title} 
                    className="flex flex-col min-h-fit p-6 bg-white hover:ring-2 hover:ring-normal-orange/50 rounded-xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex justify-center mb-6">
                        <img src={solution.img} width={96} height={96} alt={solution.title} className="w-20 h-20" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-center">{solution.title}</h3>

                    <div className="flex items-center mt-5">
                        <ul className="list-disc pl-5 space-y-2 text-left text-sm md:text-base">
                            {solution.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default CardSolution;
