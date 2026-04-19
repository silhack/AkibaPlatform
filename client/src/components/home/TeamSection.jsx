import { motion } from 'framer-motion';

const TeamSection = () => {
  const bureau = [
    {
      name: 'Eric BROU',
      role: 'Président',
      sub: 'Analyste Investissement @ Crédit Coopératif - BPCE',
      initials: 'EB',
      expertise: 'Analyse financière, Risques, Développement de synergies',
    },
    {
      name: 'Léon SILUÉ',
      role: 'Chef de projet IT',
      sub: 'Application Prod. Support @ BNP Paribas CIE',
      initials: 'LS',
      expertise: 'DevOps, Gestion de Projet IT, Réflexion stratégique',
    },
    {
      name: 'Soukaina MAHFOUD',
      role: 'Secrétaire Générale',
      sub: 'Ingénieure Infra & Energie @ VINCI Autoroutes',
      initials: 'SM',
      expertise: 'Études techniques, Financement de projets, Analyse ESG',
    },
    {
      name: 'Junior KOUASSI',
      role: 'Chef de projet Énergies',
      sub: 'Analyste Financement EnR @ Total Energies',
      initials: 'JK',
      expertise: 'Financement de projet, Énergies renouvelables, Origination',
    },
    {
      name: 'Carene KOUASSI',
      role: 'Trésorière',
      sub: "Chargée d'Affaires @ Secteur Bancaire",
      initials: 'CK',
      expertise: 'Analyse crédits, Suivi de portefeuille, Analyse de risques',
    },
    {
      name: "Rodrigue N'GUESSAN",
      role: 'Chargé de partenariats',
      sub: 'Analyste Finance Durable',
      initials: 'RN',
      expertise: 'Analyse financière & ESG, Relations commerciales',
    },
  ];

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-header">
          <span className="badge">Gouvernance</span>
          <h2>Leadership Stratégique</h2>
          <p>
            Un bureau d'experts issus des plus grandes institutions financières et industrielles.
          </p>
        </div>

        <div className="team-grid">
          {bureau.map((member, i) => (
            <motion.div
              className="team-card"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="team-photo-container">
                {member.img ? (
                  <img src={member.img} alt={`Portrait de ${member.name}`} className="team-photo" />
                ) : (
                  <div className="team-initials">{member.initials}</div>
                )}
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-sub">{member.sub}</p>
                <div className="team-expertise">
                  <strong>Expertise :</strong> {member.expertise}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="team-footer-note">
          <p>
            Coreline s'appuie également sur une <strong>Équipe locale à Abidjan</strong> assurant le
            socle opérationnel sur le terrain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
