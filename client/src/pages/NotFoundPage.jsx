import { Link } from "react-router";
import NotFoundPageSVG from "../assets/404-illustration.svg";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <img
        src={NotFoundPageSVG}
        alt="404 Not Found"
        className="max-w-md w-full mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-normal-orange mb-4">
        Oups ! Page introuvable
      </h1>
      <p className="text-gray-600 mb-6">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"  
        className="px-6 py-3 bg-normal-blue text-white rounded-full hover:bg-normal-blue-hover transition"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
