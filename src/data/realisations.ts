import type { CompetenceCode } from "@/components/CompetencePictBadge";

export type PreuvePdf = {
  label: string;
  href: string;
};

export type Realisation = {
  titre: string;
  contexte: string;
  categorie: "formation" | "professionnel";
  preuvesPdfAssociees: PreuvePdf[];
  image?: string;
  imageAlt?: string;
  competences: CompetenceCode[];
};

export const realisations: Realisation[] = [
  {
  titre:
    "Installation et administration d’un serveur Windows Server (services de base, rôles, maintenance)",
  contexte:
    "Déploiement d’un serveur Windows Server en environnement de formation : installation, configuration des rôles, vérifications et maintenance de base.",
  categorie: "formation",
  image:
    "/realisations/01_installation_et_administration_d_un_serveur_windows_server.png",
  imageAlt: "Serveur Windows avec logo Windows et icône de configuration",
  competences: ["C1", "C5"],
  preuvesPdfAssociees: [
    {
      label: "Procédure Windows serveur domaine",
      href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Installation-et-administration-d’un-serveur-Windows-Server-(services-de-base,rôles,maintenance)/procedure-windows-serveur-domaine.pdf"
    }
  ]
},
  {
    titre: "Mise en place d’un contrôleur de domaine Active Directory",
    contexte:
      "Mise en place d’un contrôleur de domaine Active Directory : création d’utilisateurs, de groupes et organisation des droits dans un cadre de formation.",
    categorie: "formation",
    image:
      "/realisations/02_mise_en_place_d_un_controleur_de_domaine_active_directory.png",
    imageAlt: "Contrôleur de domaine Active Directory avec utilisateurs et groupes",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Contrôleur de domaine - livrable",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’un-contrôleur-de-domaine-Active-Directory-(utilisateurs,groupes,GPO)/ad-controleur-domaine-livrable.pdf"
      }
    ]
  },
  {
    titre: "Configuration des services réseau (DNS, DHCP, FTP)",
    contexte:
      "Configuration de services réseau : paramétrage, tests de fonctionnement et validation des échanges en environnement de formation.",
    categorie: "formation",
    image:
      "/realisations/03_configuration_des_services_reseau_dns_dhcp_ftp.png",
    imageAlt: "Services réseau DNS DHCP FTP avec schéma de connexion",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
      {
  label: "Packet Tracer - FTP Instructions",
  href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/packet-tracer-ftp-instructions.pdf"
},
{
  label: "Packet Tracer - DNS and DHCP Instructions",
  href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Configuration-des-services-réseau-(DNS,DHCP,FTP)/packet-tracer-dns-dhcp-instructions.pdf"
}
    ]
  },
  {
  titre: "Déploiement et sécurisation d’un serveur de fichiers",
  contexte:
    "Déploiement d’un serveur de fichiers : structuration des partages, gestion des droits et sécurisation des accès.",
  categorie: "formation",
  image:
    "/realisations/04_deploiement_et_securisation_d_un_serveur_de_fichiers.png",
  imageAlt: "Serveur de fichiers avec dossiers partagés et cadenas",
  competences: ["C1", "C5"],
  preuvesPdfAssociees: [
    {
      label: "TP serveur de fichiers",
      href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Déploiement-et-sécurisation-d’un-serveur-de-fichiers/tp-serveur-de-fichiers.pdf"
    }
  ]
},
  {
    titre: "Mise en place d’une solution de sauvegarde et de restauration",
    contexte:
      "Définition d’une stratégie de sauvegarde : planification, contrôle des exécutions et tests de restauration pour valider la continuité de service.",
    categorie: "formation",
    image:
      "/realisations/05_mise_en_place_d_une_solution_de_sauvegarde_et_restauration_des_d.png",
    imageAlt: "Sauvegarde et restauration de données avec disque et flèche de retour",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Lab NFS",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/lab-nfs.pdf"
      },
      {
        label: "Lab RamDisque",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/lab-ramdisque.pdf"
      },
      {
        label: "Projet DATA Sec",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Mise-en-place-d’une-solution-de-sauvegarde-et-restauration-des-données/projet-data-sec.pdf"
      }
    ]
  },
  {
  titre: "Sécurisation du système d’information par pare-feu",
  contexte:
    "Mise en place de règles de filtrage : définition des flux autorisés, durcissement et tests de connectivité selon les besoins.",
  categorie: "formation",
  image:
    "/realisations/06_securisation_du_systeme_d_information_par_pare_feu_et_regles_de_.png",
  imageAlt: "Pare-feu réseau avec bouclier et règles de filtrage",
  competences: ["C1", "C5"],
  preuvesPdfAssociees: [
    {
      label: "Lab SSH",
      href: encodeURI(
        "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/lab-ssh.pdf"
      )
    },
    {
      label: "PfSense",
      href: encodeURI(
        "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/securisation-systeme-information-pare-feu-regles-filtrage/pfsense.pdf"
      )
    }
  ]
},
  {
    titre: "Création et administration d’un réseau local",
    contexte:
      "Conception d’un réseau local : plan d’adressage IP, segmentation VLAN, configuration et tests pour valider la connectivité.",
    categorie: "formation",
    image:
      "/realisations/07_creation_et_administration_d_un_reseau_local_ip_vlan_tests_de_co.png",
    imageAlt: "Réseau local avec switch, VLAN et adresses IP",
    competences: ["C1", "C5","C6"],
    preuvesPdfAssociees: [
      {
  label: "Adressage IP - Base",
  href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/adressage-ip-base.pdf"
},
{
  label: "Packet Tracer - Configuration de base d’un switch Cisco",
  href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/packet-tracer-configuration-base-switch-cisco.pdf"
},
{
  label: "Packet Tracer - Configuring Switch Management",
  href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/packet-tracer-configuring-switch-management.pdf"
},
{
  label: "Packet Tracer - Identifying IPv4 Addresses",
  href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/creation-administration-reseau-local-adressage-ip-vlan-connectivite/packet-tracer-identifying-ipv4-addresses.pdf"
}
    ]
  },
  {
    titre: "Virtualisation de serveurs et de services",
    contexte:
      "Mise en œuvre de la virtualisation : création de machines virtuelles, allocation des ressources, administration et vérification des services hébergés.",
    categorie: "formation",
    image: "/realisations/08_virtualisation_de_serveurs_et_services.png",
    imageAlt: "Virtualisation de serveurs avec plusieurs machines virtuelles",
    competences: ["C1", "C5","C6"],
    preuvesPdfAssociees: [
      {
        label: "Lab - Installation VM Trisquel",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Virtualisation-de-serveurs-et-services-(création-et-gestion-de-machines-virtuelles)/lab-installation-vm-trisquel.pdf"
      },
      {
        label: "Lab - Installation VM Ubuntu",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Virtualisation-de-serveurs-et-services-(création-et-gestion-de-machines-virtuelles)/lab-installation-vm-ubuntu.pdf"
      }
    ]
  },
  {
    titre: "Mission de veille technologique sur COSMOS",
    contexte:
      "Veille technologique : collecte d’informations, synthèse et restitution structurée des apports pour capitalisation.",
    categorie: "formation",
    image: "/realisations/09_mission_de_veille_technologique_sur_cosmos.png",
    imageAlt: "Veille technologique avec écran, articles et icône de recherche",
    competences: ["C4", "C6"],
    preuvesPdfAssociees: [
      {
        label: "Veille technologique COSMOS ServiceNow",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Veille technologique-COSMOS-Servicenow/veille-technologique-cosmos-servicenow.pdf"
      }
    ]
  },
  {
    titre: "Épreuve E5 : portfolio et tableau de synthèse",
    contexte:
      "Construction et mise à jour du portfolio E5 : structuration des réalisations, mise en cohérence et préparation des supports.",
    categorie: "formation",
    image:
      "/realisations/10_epreuve_e5_portfolio_tableau_de_synthese.png",
    imageAlt: "Portfolio E5 avec documents et tableau de synthèse",
    competences: ["C3", "C4", "C6"],
    preuvesPdfAssociees: [
      {
        label: "Épreuve E5 (portfolio, tableau de synthèse)",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Epreuve-E5-(portfolio,tableau-de-synthèse)/epreuve-e5-portfolio-tableau-synthese.pdf"
      }
    ]
  },
  {
    titre: "Création de scripts Bash et automatisation Shell",
    contexte:
      "Développement de scripts Shell : automatisation de tâches, gestion d’erreurs, traces d’exécution et documentation d’usage.",
    categorie: "formation",
    image:
      "/realisations/11_creation_de_scripts_bash_automatises_et_programmation_shell.png",
    imageAlt: "Terminal Linux avec script Bash et automatisation",
    competences: ["C1", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Lab - Scripts Bash",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Création-de-script-Bash-automatisés/lab-scripts-bash.pdf"
      },
      {
        label: "Exercices - Shell scripting",
        href: "/preuves/NATHAN E5/Réalisation-en-cours-de-formation/Création-de-script-Bash-automatisés/exercices-shell-scripting.pdf"
      },
    ]
  },
  {
    titre: "Gestion des utilisateurs du SI",
    contexte:
      "Traitement des opérations liées aux comptes et aux accès : création, modification, désactivation et suivi des demandes.",
    categorie: "professionnel",
    image: "/realisations/12_gestion_des_utilisateurs_du_si.png",
    imageAlt: "Gestion des utilisateurs du SI avec comptes et accès",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Accès au SI pour les externes et assistantes sociales",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/acces-si-externes-assistantes-sociales.pdf"
      },
      {
        label: "Arrivées et départs filiale",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/arrivees-departs-filiale.pdf"
      },
      {
        label: "Arrivées et départs",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/arrivees-departs.pdf"
      },
      {
        label: "Gestion des mutations et modifications profils utilisateurs",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-des-utilisateurs-du-SI/gestion-mutations-modifications-profils-utilisateurs.pdf"
      }
    ]
  },
  {
    titre: "Communication aux utilisateurs",
    contexte:
      "Rédaction et diffusion d’informations aux utilisateurs : consignes, changements, messages de suivi et accompagnement.",
    categorie: "professionnel",
    image: "/realisations/13_communication_aux_utilisateurs.png",
    imageAlt: "Communication aux utilisateurs avec message et support informatique",
    competences: ["C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Communication aux utilisateurs",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Communication-aux-utilisateurs/communication-utilisateurs.pdf"
      }
    ]
  },
  {
    titre: "Applications, logiciels et dérogations",
    contexte:
      "Suivi de demandes applicatives : analyse du besoin, traitement des dérogations et mise à jour des informations de suivi.",
    categorie: "professionnel",
    image: "/realisations/14_applications_logiciels_et_derogations.png",
    imageAlt: "Applications et logiciels avec validation de dérogation",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Applications et logiciels",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Applications-logiciels-et-dérogations/fiche-arsi-applications-logiciels.pdf"
      }
    ]
  },
  {
    titre: "Gestion des listes de diffusion",
    contexte:
      "Administration de listes de diffusion : création, mise à jour des membres, contrôles et maintien de la cohérence.",
    categorie: "professionnel",
    image: "/realisations/15_gestion_des_listes_de_diffusions.png",
    imageAlt: "Liste de diffusion avec groupe de messagerie",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Gestion des listes de diffusion",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Gestion-listes-de-diffussions/gestion-listes-diffusion.pdf"
      }
    ]
  },
  {
    titre: "Mise à jour Windows 10 22H2 des postes de dispatching et VIP",
    contexte:
      "Déploiement d’une mise à jour Windows sur des postes sensibles : préparation, exécution, contrôles post-déploiement et suivi.",
    categorie: "professionnel",
    image:
      "/realisations/16_mise_a_jour_windows_10_22h2_des_postes_de_dispatching_et_vip.png",
    imageAlt: "Mise à jour Windows 10 sur postes sensibles et VIP",
    competences: ["C1", "C4", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Mise à jour Windows 10 22H2 des postes de dispatching et VIP",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Mise-à-jour-Windows-10-22H2-des-postes-de-dispatching-et-VIP/mise-a-jour-windows10-22h2-postes-dispatching-vip.pdf"
      }
    ]
  },
  {
    titre: "Revue de conformité",
    contexte:
      "Contrôles de conformité : vérification d’éléments attendus, identification d’écarts et formalisation des actions à mener.",
    categorie: "professionnel",
    image: "/realisations/17_revue_de_conformite.png",
    imageAlt: "Revue de conformité avec checklist et validation",
    competences: ["C1", "C2"],
    preuvesPdfAssociees: [
      {
        label: "Mode opératoire revues de conformité",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Revue-de-conformité/mode-operatoire-revues-conformite.pdf"
      }
    ]
  },
  {
    titre: "Active Directory et Hyena",
    contexte:
      "Utilisation d’outils d’administration Active Directory, comme Hyena, pour gérer les comptes, les groupes et faciliter les recherches et contrôles.",
    categorie: "professionnel",
    image: "/realisations/18_active_directory_et_hyena.png",
    imageAlt: "Administration Active Directory avec utilisateurs, groupes et outil de gestion",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Utilisation de Hyena",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Active-Directory-et-Hyena/utilisation-hyena.pdf"
      },
      {
        label: "Active Directory les bases",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Active-Directory-et-Hyena/active-directory-les-bases.pdf"
      }
    ]
  },
  {
    titre: "Actions de sécurité suite à la perte ou au vol de matériel informatique ou télécom",
    contexte:
      "Application de mesures de sécurité : sécurisation des accès, actions immédiates, traçabilité et suivi de remédiation.",
    categorie: "professionnel",
    image:
      "/realisations/19_actions_de_securite_suite_a_la_perte_ou_au_vol_de_materiel_infor.png",
    imageAlt: "Sécurité après perte ou vol de matériel avec ordinateur et cadenas",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Actions de sécurité suite à la perte ou au vol d'équipement RTE",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Actions-de-sécurité-suite-à-la-perte-ou-au-vol-de-materiel-informatique-ou-télécom/actions-securite-perte-vol-equipement-rte.pdf"
      }
    ]
  },
  {
    titre: "Installation et gestion des tokens RSA pour l’accès à distance sécurisé",
    contexte:
      "Gestion de tokens d’authentification forte : mise à disposition, assistance, renouvellement et vérification de l’accès à distance.",
    categorie: "professionnel",
    image:
      "/realisations/20_installation_et_gestion_des_tokens_rsa_permettant_l_acces_a_dist.png",
    imageAlt: "Token RSA pour accès à distance sécurisé",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Gestion du code PIN RSA SecurID",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Installation-et-gestion-des-tokens-RSA-permettant-l’acces-à-distance-sécurisé/gestion-code-pin-rsa-securid.pdf"
      },
      {
        label: "Installation de Soft Token RSA sur Smartphone - Hors parc RTE V2",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Installation-et-gestion-des-tokens-RSA-permettant-l’acces-à-distance-sécurisé/installation-soft-token-rsa-smartphone-hors-parc-rte-v2.pdf"
      }
    ]
  },
  {
    titre: "Approbation des demandes des utilisateurs",
    contexte:
      "Analyse et validation de demandes : contrôle des informations, décision selon les règles, et suivi jusqu’à clôture.",
    categorie: "professionnel",
    image:
      "/realisations/21_approbation_des_demandes_des_utilisateurs.png",
    imageAlt: "Validation de demandes utilisateurs avec coche verte",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Back Office COSMOS",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Approbation-des-demandes-des-utilisateurs/back-office-cosmos.pdf"
      }
    ]
  },
  {
  titre: "Développement de compétences à l’aide de modules e-learning",
  contexte:
    "Montée en compétences par le suivi de modules e-learning : acquisition de connaissances, validation des acquis et mise en pratique dans l’environnement professionnel.",
  categorie: "professionnel",
  image:
    "/realisations/22_developpement_de_competences_a_l_aide_de_modules_e_learning.png",
  imageAlt: "Modules e-learning avec écran de formation et validation des compétences",
  competences: ["C6"],
  preuvesPdfAssociees: [
    {
      label: "Formations e-learning réalisées",
      href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-première année/Développement de compétences à l’aide de modules e-learning/formations-e-learning-realisees.pdf"
    }
  ]
},
  {
    titre: "Saisie de demandes dans le portail DIL",
    contexte:
      "Création et saisie de demandes dans le portail : qualification, catégorisation et suivi des échanges liés à la demande.",
    categorie: "professionnel",
    image: "/realisations/23_saisie_de_demande_dans_le_portail_dil.png",
    imageAlt: "Saisie de demande dans un portail de support informatique",
    competences: ["C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Saisie de demande portail DIL",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Saisie de demande dans le portail DIL/saisie-demande-portail-dil.pdf"
      }
    ]
  },
  {
    titre: "Gestion d’une BAL fonctionnelle",
    contexte:
      "Gestion de boîtes aux lettres fonctionnelles : création, configuration, droits d’accès et tests d’envoi et de réception.",
    categorie: "professionnel",
    image:
      "/realisations/24_gestion_bal_boite_aux_lettres_fonctionnelle.png",
    imageAlt: "Boîte mail fonctionnelle avec enveloppe et paramètres d'accès",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "BAL fonctionnelle",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion BAL (boîte aux lettres) fonctionnelle/bal-fonctionnelle.pdf"
      }
    ]
  },
  {
    titre: "Ticket GoPro Animation Filière SI",
    contexte:
      "Traitement d’une demande spécifique : qualification, coordination des actions, communication et clôture.",
    categorie: "professionnel",
    image: "/realisations/25_ticket_gopro_animation_filiere_si.png",
    imageAlt: "Ticket de support informatique lié à l’animation de la filière SI",
    competences: ["C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "GoPro AFSI",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Ticket GoPro Animation Filière SI/gopro-afsi.pdf"
      }
    ]
  },
  {
    titre: "Gestion des rapports, des listes et du matériel",
    contexte:
      "Mise à jour de suivis, rapports et listes, ainsi que gestion associée du matériel : consolidation, contrôles et cohérence des données.",
    categorie: "professionnel",
    image:
      "/realisations/26_gestion_des_rapports_des_listes_et_du_materiel.png",
    imageAlt: "Gestion de rapports, listes et matériel informatique",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Tables et rapports COSMOS",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion des rapports, des listes et du matériel/tables-rapports-cosmos.pdf"
      }
    ]
  },
  {
    titre: "Installation de bornes Wi-Fi",
    contexte:
      "Participation à l’installation de bornes Wi-Fi : préparation, mise en service, tests et validation de la connectivité.",
    categorie: "professionnel",
    image: "/realisations/27_installation_de_bornes_wi_fi.png",
    imageAlt: "Installation de borne Wi-Fi avec signal réseau",
    competences: ["C1", "C2", "C4", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Installation de bornes Wi-Fi",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Installation de bornes Wi-Fi/installation-bornes-wifi.pdf"
      }
    ]
  },
  {
    titre: "Gestion et maintien en condition opérationnelle du matériel SI",
    contexte:
      "Maintien en condition opérationnelle : suivi, dépannage, remplacement et coordination afin de réduire l’impact sur les utilisateurs.",
    categorie: "professionnel",
    image:
      "/realisations/28_gestion_et_maintien_en_condition_operationnelle_du_materiel_si.png",
    imageAlt: "Maintien en condition opérationnelle du matériel informatique",
    competences: ["C1", "C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Équipement et MCO des salles de réunion",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion et maintien en condition opérationnelle du matériel SI/equipement-mco-salles-reunion.pdf"
      },
      {
        label: "Mise à jour ClickShare",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Gestion et maintien en condition opérationnelle du matériel SI/fiche-arsi-mise-a-jour-clickshare.pdf"
      }
    ]
  },
  {
    titre: "Mise à jour Windows 11 23H2 des postes de dispatching et VIP",
    contexte:
      "Déploiement de Windows 11 sur des postes sensibles : préparation, accompagnement, contrôles post-déploiement et traitement d’anomalies.",
    categorie: "professionnel",
    image:
      "/realisations/29_mise_a_jour_windows_11_23h2_des_postes_de_dispatching_et_vip.png",
    imageAlt: "Mise à jour Windows 11 sur postes sensibles et VIP",
    competences: ["C1", "C4", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Procédure d’upgrade WIN11 23H2 des postes dispatching et VIP",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Mise à jour Windows 11 23H2 des postes de dispatching et VIP/procedure-upgrade-win11-23h2-postes-dispatching-vip.pdf"
      }
    ]
  },
  {
    titre: "Former et accompagner les utilisateurs dans leur montée en compétences du SI",
    contexte:
      "Accompagnement des utilisateurs : explications, démonstrations, bonnes pratiques et aide ciblée pour gagner en autonomie.",
    categorie: "professionnel",
    image:
      "/realisations/30_former_et_accompagner_les_utilisateurs_dans_leur_montee_en_compe.png",
    imageAlt: "Accompagnement des utilisateurs en montée en compétences du SI",
    competences: ["C2", "C5"],
    preuvesPdfAssociees: [
      {
        label: "Former et accompagner les utilisateurs dans leur montée en compétences du SI",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Former et accompagner les utilisateurs dans leur montée en compétences du SI/former-accompagner-utilisateurs-montee-competences-si.pdf"
      }
    ]
  },
  {
    titre: "Participation à l’amélioration du diaporama de présentation pour les alternants de RTE",
    contexte:
      "Amélioration d’un support de présentation : structuration, lisibilité, mise en forme et adaptation au public visé.",
    categorie: "professionnel",
    image:
      "/realisations/31_participation_a_l_amelioration_du_diaporama_de_presentation_pour.png",
    imageAlt: "Amélioration d’un diaporama de présentation pour alternants",
    competences: ["C3"],
    preuvesPdfAssociees: [
      {
        label: "Participation à l’optimisation du support de présentation des métiers RTE pour les futurs alternants",
        href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Participation a l’amélioration du diaporama présentation pour les alternant de RTE/participation-optimisation-support-presentation-metiers-rte-futurs-alternants.pdf"
      }
    ]
  },
  {
  titre: "Inventaire du matériel et étiquetage",
  contexte:
    "Inventaire du matériel : contrôle, étiquetage, mise à jour du suivi et remontée des écarts constatés.",
  categorie: "professionnel",
  image: "/realisations/32_inventaire_du_materiel_plus_etiquetage.png",
  imageAlt: "Inventaire de matériel avec étiquetage et suivi",
  competences: ["C1"],
  preuvesPdfAssociees: [
    {
      label: "Inventaire du matériel",
      href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Inventaire/inventaire-materiel.pdf"
    }
  ]
},
  {
  titre: "Participation à une immersion",
  contexte:
    "Participation à une immersion professionnelle : découverte d’un environnement de travail, observation des pratiques et compréhension des activités du service.",
  categorie: "professionnel",
  image: "/realisations/33_participation_a_une_immersion.png",
  imageAlt: "Participation à une immersion professionnelle dans un service informatique",
  competences: ["C6"],
  preuvesPdfAssociees: [
    {
      label: "Compte rendu d’immersion",
      href: "/preuves/NATHAN E5/Réalisations-en-milieu-professionnel-en-cours-de-seconde-année/Participation à une immersion/cors-n-immersion.pdf"
    }
  ]
},
];