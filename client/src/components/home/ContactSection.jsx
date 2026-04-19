import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-layout">
        <motion.div
          className="contact-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge badge-light">Contact</span>
          <h2>Parlons de votre prochain projet d'impact</h2>
          <p>
            Nos experts sont à votre disposition pour étudier vos opportunités d'investissement et
            de structuration.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="info-icon-box">
                <MapPin />
              </div>
              <div className="info-text">
                <strong>🇫🇷 Siège Paris</strong>
                <span>45b Boulevard Jourdan, Paris, 75014</span>
                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>Tél: + (33) 7 53 34 25 98</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon-box">
                <MapPin />
              </div>
              <div className="info-text">
                <strong>🇨🇮 Bureau Abidjan</strong>
                <span>Cocody, Angré 7ème Tranche</span>
                <span style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                  Tél: + (225) 07 58 42 26 65
                </span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon-box">
                <Mail />
              </div>
              <div className="info-text">
                <strong>Email</strong>
                <span>[EMAIL_ADDRESS]</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              placeholder="Jean Dupont"
              required
              value={formState.name}
              onChange={e => setFormState({ ...formState, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email professionnel</label>
            <input
              type="email"
              id="email"
              placeholder="jean@entreprise.com"
              required
              value={formState.email}
              onChange={e => setFormState({ ...formState, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Je souhaite échanger sur :</label>
            <select
              id="subject"
              required
              value={formState.subject}
              onChange={e => setFormState({ ...formState, subject: e.target.value })}
            >
              <option value="">Sélectionner une thématique</option>
              <option>Structuration de projet (Coreline Origine)</option>
              <option>Investissement & Capital (Coreline Invest)</option>
              <option>Partenariat IYWF 2026</option>
              <option>Expertise Conseil & Strategy</option>
              <option>Autre demande</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Décrivez votre projet..."
              required
              value={formState.message}
              onChange={e => setFormState({ ...formState, message: e.target.value })}
            ></textarea>
          </div>

          {isSent ? (
            <div className="form-success-wrapper">
              <p className="form-success-message">
                Message envoyé ! Nous vous répondrons sous 24h.
              </p>
            </div>
          ) : (
            <button type="submit" className="btn-contact" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
