import { motion } from 'framer-motion';
import { Building, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

const faqData = [
  {
    q: 'Comment devenir partenaire de Coreline Alliance ?',
    a: 'Nous sommes toujours à la recherche d\'expertises complémentaires. Veuillez utiliser le formulaire de contact en précisant "Partenariat" dans l\'objet du message.'
  },
  {
    q: 'Dans quels pays opérez-vous spécifiquement ?',
    a: 'Bien que notre réseau soit international, nos opérations de terrain se concentrent principalement en Afrique de l\'Ouest et Centrale (Sénégal, Côte d\'Ivoire, Cameroun).'
  },
  {
    q: 'Où se trouve le siège social ?',
    a: 'Notre siège de coordination est situé à Paris, France, avec des bureaux régionaux pour assurer un ancrage direct sur nos zones d\'intervention.'
  }
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="contact-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge">On vous écoute</span>
            <h2>Contactez l'Alliance</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Une question, un projet, une opportunité ? Notre équipe d'experts est prête à échanger.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '4rem' }}>
            
            {/* Form Column */}
            <motion.div 
              style={{ backgroundColor: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-premium)', border: '1px solid var(--gray-100)' }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '2rem' }}>Envoyez-nous un message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Prénom</label>
                    <input type="text" className="form-control" placeholder="Jean" style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-200)', borderRadius: '8px' }} />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Nom</label>
                    <input type="text" className="form-control" placeholder="Dupont" style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-200)', borderRadius: '8px' }} />
                  </div>
                </div>
                
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Email Professionnel</label>
                  <input type="email" className="form-control" placeholder="jean.dupont@entreprise.com" style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-200)', borderRadius: '8px' }} />
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Sujet / Motif</label>
                  <select className="form-control" style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-200)', borderRadius: '8px', backgroundColor: 'white' }}>
                    <option>Demande d'information</option>
                    <option>Proposition de projet</option>
                    <option>Partenariat institutionnel</option>
                    <option>Presse / Média</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Message</label>
                  <textarea className="form-control" rows="5" placeholder="Détaillez votre demande ici..." style={{ width: '100%', padding: '12px', border: '1px solid var(--gray-200)', borderRadius: '8px', resize: 'vertical' }}></textarea>
                </div>

                <button type="button" className="btn btn-primary" style={{ padding: '15px', fontSize: '1.05rem', fontWeight: 'bold', marginTop: '1rem' }}>
                  Envoyer le message
                </button>
              </form>
            </motion.div>

            {/* Info Column */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              
               <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>Informations de contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '12px', borderRadius: '50%', color: 'var(--primary)' }}><Building size={24}/></div>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--secondary)' }}>Siège de l'Alliance</h4>
                      <p style={{ margin: 0, color: 'var(--gray-600)', lineHeight: '1.5' }}>75008 Paris,<br/>France</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '12px', borderRadius: '50%', color: 'var(--primary)' }}><Mail size={24}/></div>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--secondary)' }}>Email</h4>
                      <p style={{ margin: 0, color: 'var(--gray-600)', lineHeight: '1.5' }}>contact@coreline-alliance.com<br/>presse@coreline-alliance.com</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '12px', borderRadius: '50%', color: 'var(--primary)' }}><Phone size={24}/></div>
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--secondary)' }}>Téléphone</h4>
                      <p style={{ margin: 0, color: 'var(--gray-600)', lineHeight: '1.5' }}>+33 (0) 1 80 XX XX XX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>Foire Aux Questions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {faqData.map((item, index) => (
                    <div 
                      key={index} 
                      style={{ border: '1px solid var(--gray-200)', borderRadius: 'var(--radius)', overflow: 'hidden' }}
                    >
                      <button 
                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                        style={{ width: '100%', padding: '1rem', backgroundColor: openFaq === index ? 'var(--gray-50)' : 'white', border: 'none', textAlign: 'left', fontWeight: 'bold', color: 'var(--secondary)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        {item.q}
                        <span style={{ color: 'var(--primary)', transform: openFaq === index ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
                      </button>
                      <div style={{ 
                        padding: openFaq === index ? '1rem' : '0 1rem', 
                        height: openFaq === index ? 'auto' : '0', 
                        overflow: 'hidden',
                        color: 'var(--gray-600)',
                        backgroundColor: 'white',
                        borderTop: openFaq === index ? '1px solid var(--gray-100)' : 'none'
                      }}>
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
