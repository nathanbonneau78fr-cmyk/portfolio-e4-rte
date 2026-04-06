export type Competence = {
  code: "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
  titre: string;
  description: string;
};

export type TechnicalSkillCategory = {
  title: string;
  items: string[];
};

export const competences: Competence[] = [
  {
    code: "C1",
    titre: "Gérer le patrimoine informatique",
    description:
      "Inventorier, maintenir à jour, sécuriser et faire évoluer les ressources matérielles, logicielles, configurations et documentations."
  },
  {
    code: "C2",
    titre: "Répondre aux incidents et aux demandes d’assistance / d’évolution",
    description:
      "Qualifier, diagnostiquer, résoudre, escalader et capitaliser les solutions via des procédures et une base de connaissances."
  },
  {
    code: "C3",
    titre: "Développer la présence en ligne de l’organisation",
    description:
      "Contribuer à des contenus utiles comme des pages, documents ou supports, en respectant la clarté, l’accessibilité et la cohérence."
  },
  {
    code: "C4",
    titre: "Travailler en mode projet",
    description:
      "Structurer, planifier, suivre, communiquer et livrer une réalisation en prenant en compte objectifs, jalons, risques et compte-rendus."
  },
  {
    code: "C5",
    titre: "Mettre à disposition un service informatique aux utilisateurs",
    description:
      "Déployer, configurer, tester et documenter un service, tout en assurant la continuité et une utilisation fiable."
  },
  {
    code: "C6",
    titre: "Organiser son développement professionnel",
    description:
      "Mettre en place une veille, se former, suivre ses apprentissages et démontrer sa progression de compétences."
  }
];

export const technicalSkillCategories: TechnicalSkillCategory[] = [
  {
    title: "Systèmes d’exploitation",
    items: [
      "Windows 10",
      "Windows 11",
      "Windows Server",
      "Ubuntu",
      "Linux"
    ]
  },
  {
    title: "Réseaux et simulation",
    items: [
      "Cisco Packet Tracer",
      "Adressage IP",
      "DHCP",
      "DNS",
      "VLAN",
      "Switching",
      "Routage"
    ]
  },
  {
    title: "Administration et support",
    items: [
      "Active Directory",
      "Gestion des utilisateurs",
      "Gestion des droits d’accès",
      "Support utilisateurs",
      "Gestion des incidents",
      "Gestion de parc informatique"
    ]
  },
  {
    title: "Outils et services",
    items: [
      "GLPI",
      "ServiceNow",
      "Microsoft 365",
      "SharePoint",
    ]
  },
  {
    title: "Sécurité et bonnes pratiques",
    items: [
      "Application de procédures",
      "Documentation technique",
      "Sensibilisation sécurité",
      "Contrôle interne",
      "Suivi de conformité"
    ]
  },
  {
    title: "Méthodes de travail",
    items: [
      "Travail en équipe",
      "Reporting",
      "Suivi d’activité",
      "Organisation",
      "Veille technologique"
    ]
  }
];