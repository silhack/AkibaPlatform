import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import axiosClient from "../services/axiosClient";

const LoginPage = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    nom: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Nom d'utilisateur requis.";
    if (!formData.password.trim()) newErrors.password = "Mot de passe requis.";
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      // Appel à l'API de connexion
      const response = await axiosClient.post("/admins/login", {
        nom: formData.nom,
        password: formData.password,
      });

      // La nouvelle API retourne { access_token: "...", token_type: "bearer" }
      const { access_token } = response.data;

      login(access_token); // Stocke le token JWT dans le contexte et le localStorage
      navigate("/admin-panel");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setErrors({ general: "Nom d'utilisateur ou mot de passe incorrect." });
      } else {
        setErrors({ general: "Erreur serveur. Veuillez réessayer plus tard." });
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "text-base outline-none rounded-sm focus:ring-1 focus:border-none focus:ring-normal-blue border border-tertiary-dark p-3 w-full";

  return (
    <div className="min-h-screen flex justify-center items-center bg-normal-blue">
      <form
        onSubmit={handleLogin}
        className="p-6 shadow rounded bg-white w-1/2"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Connexion Admin</h2>

        {errors.general && (
          <div className="text-red-600 mb-2 text-sm text-center">
            {errors.general}
          </div>
        )}

        <input
          type="text"
          name="nom"
          value={formData.nom}
          placeholder="Nom d'utilisateur"
          onChange={handleChange}
          className={`${inputClass} mb-1`}
        />
        {errors.nom && (
          <div className="text-red-600 mb-2 text-sm">{errors.nom}</div>
        )}

        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Mot de passe"
          onChange={handleChange}
          className={`${inputClass} mb-1`}
        />
        {errors.password && (
          <div className="text-red-600 mb-2 text-sm">{errors.password}</div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-normal-blue hover:bg-dark-blue-hover w-full mt-4 text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
