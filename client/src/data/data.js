import { FaMoneyBillTrendUp, FaPerson } from "react-icons/fa6";

export const expertiseData = [
  {
    title: "Expertise sectorielle pointue",
    options: [
      "Maîtrise des dynamiques du secteur agroalimentaire et cosmétique en Afrique francophone",
      "Expérience terrain avec des coopératives, PME et projets communautaires",
    ],
    isBlue: true,
  },
  {
    title: "Expertise technique et technologique ",
    options: [
      "Capacité à développer des solutions basées sur la data, l’IA et les plateformes digitales",
      "Outils d’analyse prédictive (prix, marché, logistique)",
    ],
    isBlue: false,
  },
  {
    title: "Accès à un réseau stratégique local et international",
    options: [
      "Mise en relation avec des institutions, partenaires financiers, clients",
      "Approche partenariale orientée résultats",
    ],
    isBlue: true,
  },
  {
    title: "Capacité d’analyse stratégique et de structuration de projets",
    options: [
      "Compréhension des besoins en financement et des logiques institutionnelles",
      "Vision globale sur la chaîne de valeur : production, transformation, distribution, export",
    ],
    isBlue: false,
  },
];

export const produits = [
  {
    id: "ananas",
    image: "/images/ananas.jpg",
    nom: "Ananas",
    accroche: "L'Éclat Tropical Gorgé de Soleil",
    description:
      "Imaginez la douceur ensoleillée des tropiques directement dans votre assiette...",
    avantages: [
      "Fraîcheur garantie : Récolté à maturité optimale et acheminé rapidement.",
      "Qualité supérieure : Sélection rigoureuse pour des ananas sans défaut.",
      "Source de bien-être : Riche en vitamines C et bromélaïne.",
      "Engagement local : Soutien à l'agriculture locale de Bonoua et Samo.",
    ],
  },
  {
    id: "noix-de-coco",
    image: "/images/coco.png",
    nom: "Noix de Coco",
    accroche: "Un Trésor Tropical aux Mille Vertus",
    description:
      "De sa chair blanche et délicieuse à son eau rafraîchissante...",
    avantages: [
      "Diversité des produits : Entières, chair fraîche, eau, produits dérivés.",
      "Goût authentique : Noix gorgées de soleil au goût riche.",
      "Bienfaits naturels : Hydratation, fibres, bonnes graisses.",
      "Approvisionnement fiable : Régulier, pour particuliers et pros.",
    ],
  },
  {
    id: "mangue-kent",
    image: "/images/mangue.jpg",
    nom: "Mangue Kent",
    accroche: "L'Élégance Sucrée du Soleil",
    description: "Réputée pour sa chair onctueuse, douce et sans fibres...",
    avantages: [
      "Variété premium : Kent, pour une qualité gustative exceptionnelle.",
      "Maturation optimale : Récolte à point pour texture fondante.",
      "Riche en nutriments : Vitamines A, C et antioxydants.",
      "Partenariat local : Coopératives de Ferkéssédougou, Sinématiali, Wolo.",
    ],
  },
  {
    id: "gingembre",
    image: "/images/gingembre.jpg",
    nom: "Gingembre",
    accroche: "La Racine Énergisante aux Vertus Millénaires",
    description: "Saveur piquante, arôme puissant et nombreuses vertus...",
    avantages: [
      "Fraîcheur et qualité : Racines fermes, cultivées avec soin.",
      "Polyvalence d'utilisation : Cuisine, thés, infusions, pâtisseries.",
      "Bienfaits santé : Anti-inflammatoires, digestifs, stimulants.",
      "Conditionnement adapté : Options variées selon les besoins.",
    ],
  },
  {
    id: "noix-de-cajou",
    image: "/images/noix.jpg",
    nom: "Noix de Cajou",
    accroche: "Un Délice Croquant et Nutritif",
    description: "Avec sa forme distinctive et sa saveur légèrement sucrée...",
    avantages: [
      "Sélection rigoureuse : Noix entières, sans brisures.",
      "Goût frais et authentique : Conservation optimale.",
      "Source de nutriments : Protéines, bons gras, antioxydants.",
      "Options variées : Brutes, grillées, salées, aromatisées.",
      "Partenariat local : Coopératives de Kouto (Nord CI).",
    ],
  },
  {
    id: "beurre-de-karite",
    image: "/images/beurre.png",
    nom: "Beurre de Karité",
    accroche: "Le Secret Naturel d'une Peau Douce et Protégée",
    description:
      "Reconnu depuis des siècles pour ses vertus hydratantes et réparatrices...",
    avantages: [
      "Qualité pure : Extraction traditionnelle, sans additifs.",
      "Multiples bienfaits : Peau, cheveux, hydratation profonde.",
      "Soutien aux femmes : Coopératives de Korhogo & Ferkéssédougou.",
      "Différentes présentations : Brut, raffiné, légèrement parfumé.",
    ],
  },
];

export const servicesHome = [
  {
    icon: "src/assets/gear.png",
    isBlue: true,
    titre: "Développement de produits",
    description:
      "Nous vous accompagnons dans la formulation de produits agro-alimentaires & cosmétiques et dans la gestion opérationnelle des unités de transformation en garantissant leur qualité et conformité",
  },
  {
    icon: "src/assets/sales.png",
    isBlue: false,
    titre: "Marketing & Commercialisation",
    description:
      "Nous développons des stratégies de mise en marché adaptées à vos produits, en vous guidant dans l'exportation et la conquête de nouveaux marchés à l'international.",
  },
  {
    icon: "src/assets/capital.png",
    isBlue: false,
    titre: "Financement",
    description:
      "Nous vous aidons à structurer vos projets, à rechercher des partenaires financiers et à trouver des solutions de financement adaptées pour soutenir la croissance de votre entreprise.",
  },
  {
    icon: "src/assets/archive.png",
    isBlue: true,
    titre: "Études & Due Diligence",
    description:
      "Nos services incluent des analyses sectorielles approfondies, une évaluation de la faisabilité de vos projets et des insights basés sur des données pour vous aider à prendre des décisions stratégiques éclairées.",
  },
];

export const services = [
  {
    icon: "src/assets/gears.png",
    image: "src/assets/devImage.svg",
    reverse: false,
    titre: "Développement de produits",
    description:
      "Nous vous accompagnons dans la formulation de produits agro-alimentaires & cosmétiques et dans la gestion opérationnelle des unités de transformation en garantissant leur qualité et conformité",
    options: [
      "R&D, formulation et amélioration des produits",
      "Packaging et contrôle qualité",
    ],
  },
  {
    icon: "src/assets/sales.png",
    image: "src/assets/com.svg",
    reverse: true,
    titre: "Marketing & Commercialisation",
    description:
      "Nous vous accompagnons dans la formulation de produits agro-alimentaires et cosmétiques, en garantissant leur qualité et leur conformité tout au long du processus de transformation.",
    options: [
      "Branding et positionnement des produits",
      "Analyse réglementaire et stratégie de distribution",
      "Mise en relation avec des clients locaux et internationaux",
    ],
  },
  {
    icon: "src/assets/capital.png",
    image: "src/assets/finance.svg",
    reverse: false,
    titre: "Financement",
    description:
      "Nous vous aidons à structurer vos projets, à rechercher des partenaires financiers et à trouver des solutions de financement adaptées pour soutenir la croissance de votre entreprise.",
    options: [
      "Montage de plans d’affaires et gestion financière",
      "Rédaction de dossiers et recherche de financements",
      "Identification d’opportunités et impact investing",
    ],
  },
  {
    icon: "src/assets/archives.png",
    image: "src/assets/study.svg",
    reverse: true,
    titre: "Études & Due Diligence",
    description:
      "Nos services incluent des analyses sectorielles approfondies, une évaluation de la faisabilité de vos projets et des insights basés sur des données pour vous aider à prendre des décisions stratégiques éclairées.",
    options: [
      "Études de marché et faisabilité",
      "Analyse de la chaîne de valeur",
      "Évaluation des risques techniques et financiers",
    ],
  },
];

export const whyUs = [
  {
    icon: "src/assets/world.png",
    titre: "EXPERTISE LOCALE & INTERNATIONALE",
    description:
      "Nous combinons une connaissance fine du terrain en Côte d’Ivoire avec les meilleures pratiques internationales pour offrir des solutions adaptées, concrètes et impactantes.",
  },
  {
    icon: "src/assets/handshake.png",
    titre: "PARTENARIAT ORIENTÉ RÉSULTAT",
    description:
      "Nous travaillons en véritable partenaire, avec une culture du résultat et un réseau actif d’acteurs économiques et institutionnels pour accélérer vos projets, localement et à l’international.",
  },
  {
    icon: "src/assets/data.png",
    titre: "DÉCISIONS PILOTÉES PAR LES DONNÉES",
    description:
      "Nos recommandations sont fondées sur des analyses rigoureuses, des études sectorielles solides et des outils d’aide à la décision. Fini les intuitions : place aux faits.",
  },
];

export const features = [
  {
    isBlue: true,
    title: "Collecte automatisée",
    description:
      "Récupération automatique de données économiques issues de sources fiables telles que les actualités, rapports et bases de données publiques.",
  },
  {
    isBlue: false,
    title: "Analyse sectorielle",
    description:
      "Extraction et structuration de données clés comme les prix, les volumes de production ou les flux d'import/export.",
  },
  {
    isBlue: true,
    title: "Visualisation des données",
    description:
      "Tableaux de bord clairs et graphiques interactifs pour suivre les tendances et indicateurs du secteur agro.",
  },
  {
    isBlue: false,
    title: "Outils de recherche",
    description:
      "Filtres, recherche par mots-clés et navigation intuitive pour faciliter l’accès rapide à l’information recherchée.",
  },
  {
    isBlue: true,
    title: "Interface intuitive",
    description:
      "Conception pensée pour les utilisateurs non techniques, avec un affichage clair, accessible et multilingue (dont langues locales).",
  },
];

export const steps = [
  {
    number: "1",
    title: "Collecte des données",
    description: "Akiba Platform récupère automatiquement des données économiques à partir de sources fiables telles que les bases publiques, les actualités spécialisées et les rapports officiels.",
  },
  {
    number: "2",
    title: "Traitement et structuration",
    description: "Les données brutes sont nettoyées, analysées et structurées afin d'extraire des indicateurs clés du secteur agroalimentaire.",
  },
  {
    number: "3",
    title: "Analyse et synthèse",
    description: "Les tendances économiques sont interprétées automatiquement pour offrir une compréhension simplifiée et utile aux utilisateurs.",
  },
  {
    number: "4",
    title: "Visualisation intuitive",
    description: "Les données sont affichées de manière claire sous forme de graphiques, tableaux de bord interactifs et cartes visuelles.",
  },
  {
    number: "5",
    title: "Exploration et filtrage",
    description: "L'utilisateur peut filtrer les données par région, période, type de produit ou autre critère pertinent pour son activité.",
  },
  {
    number: "6",
    title: "Accessibilité multilingue",
    description: "La plateforme est accessible en français et dans des langues locales ivoiriennes pour faciliter l’inclusion numérique.",
  },
];


export const faqs = [
  {
    icon: FaPerson,
    question: "Qui peut utiliser Akiba Platform ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit sapien sagittis rutrum molestie cras viverra in.",
    isBlue: true,
  },
  {
    icon: FaMoneyBillTrendUp,
    question: "Quels sont les coûts et options disponibles ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Sit sapien sagittis rutrum molestie cras viverra in.",
    isBlue: false,
  },
];
