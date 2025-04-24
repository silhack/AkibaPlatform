import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const usefulLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solution" },
    { label: "Produits", href: "/produits" },
    { label: "Actualités", href: "/actualites" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contacts" }
];

const legalLinks = [
    { label: "Mentions légales", href: "/" },
    { label: "Politiques de confidentialité", href: "/" }
];

const Footer = () => {
    return (
        <footer className="bg-normal-blue text-white py-10 px-6 md:px-12 lg:px-16 w-full mt-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo + Réseaux sociaux */}
                <div className="flex flex-col items-start space-y-4">
                    <div className="bg-[#fcdcdc] text-[#1e1e1e] px-4 py-1 font-bold rounded-md">
                        LOGO
                    </div>
                    <h2 className="text-lg font-bold">AKIBA SOLUTION</h2>
                    <div className="flex space-x-4 text-xl">
                        <FiInstagram title="Instagram" aria-label="Instagram" className="hover:text-gray-300 transition cursor-pointer" />
                        <FaLinkedinIn title="LinkedIn" aria-label="LinkedIn" className="hover:text-gray-300 transition cursor-pointer" />
                        <FaFacebookF title="Facebook" aria-label="Facebook" className="hover:text-gray-300 transition cursor-pointer" />
                    </div>
                </div>

                {/* Liens utiles */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Liens Utiles</h3>
                    <ul className="space-y-2 grid grid-cols-2">
                        {usefulLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="hover:text-gray-300 cursor-pointer">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Contactez-nous</h3>
                    <p>28 BP 437 Abidjan 28</p>
                    <p>Cocody, Angré 7ème Tranche</p>
                    <p>(+225) 27 22 51 75 18</p>
                    <p>info@akibasolution.com</p>
                </div>
            </div>

            {/* Ligne de séparation */}
            <div className="border-t border-gray-400 mt-6 pt-4 text-sm flex flex-col md:flex-row justify-between">
                <p>Copyright ©2025 Akiba Solution. Tous droits réservés</p>
                <div className="flex space-x-6">
                    {legalLinks.map((link, index) => (
                        <a key={index} href={link.href} className="hover:text-gray-300 cursor-pointer">
                            {link.label}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
