import Section from "@/components/Section";
import { profile } from "@/data/profile";

type EntryVariant = "professional" | "academic";

type ResumeEntryProps = {
  logo: string;
  logoAlt: string;
  titre: string;
  structure: string;
  meta: string;
  missions?: string[];
  technologies?: string;
  showMissionsTitle?: boolean;
  variant?: EntryVariant;
};

const badgeToneClass: Record<EntryVariant, string> = {
  professional:
    "border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]",
  academic:
    "border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.16)]",
};

function ResumeEntry({
  logo,
  logoAlt,
  titre,
  structure,
  meta,
  missions,
  technologies,
  showMissionsTitle = true,
  variant = "professional",
}: ResumeEntryProps) {
  const isProfessional = variant === "professional";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_0_35px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div
        className={`pointer-events-none absolute inset-0 opacity-80 ${
          isProfessional
            ? "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]"
        }`}
      />

      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/95 p-1 shadow-[0_0_25px_rgba(255,255,255,0.08)]">
            <img
              src={logo}
              alt={logoAlt}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="min-w-0">
            <span
              className={`inline-flex rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${badgeToneClass[variant]}`}
            >
              {isProfessional ? "Expérience" : "Formation"}
            </span>

            <h3 className="mt-3 text-base font-semibold text-white">{titre}</h3>
            <p className="mt-1 text-sm font-medium text-slate-200">{structure}</p>
            <p className="mt-2 text-xs text-slate-400">{meta}</p>
          </div>
        </div>

        {missions?.length ? (
          <div className="mt-5">
            {showMissionsTitle ? (
              <p className="text-sm font-semibold text-white">
                Missions principales
              </p>
            ) : null}

            <ul
              className={`${showMissionsTitle ? "mt-3" : "mt-1"} space-y-2 text-sm leading-7 text-slate-300`}
            >
              {missions.map((mission) => (
                <li key={mission} className="flex gap-2">
                  <span
                    className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                      isProfessional ? "bg-cyan-300" : "bg-fuchsia-300"
                    }`}
                  />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {technologies ? (
          <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4">
            <p className="text-sm font-semibold text-white">Technologies</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              {technologies}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Section
      title="À propos"
      subtitle="Profil, parcours et contexte d’alternance"
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 px-6 py-8 shadow-[0_0_50px_rgba(34,211,238,0.10)] md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
              BTS SIO SISR
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              Profil, alternance et parcours
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              Je suis étudiant en BTS SIO option SISR. À travers mon alternance,
              mes stages et ma formation, je développe des compétences en
              systèmes, réseaux, support informatique et sécurité. Cette page
              présente mon profil, mon contexte professionnel ainsi que mon
              parcours.
            </p>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <h2 className="text-lg font-semibold text-white">Profil</h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Étudiant en BTS SIO SISR (Services Informatiques aux Organisations
                – Solutions d’Infrastructure, Systèmes et Réseaux).
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Localisation :</span>{" "}
                  {profile.localisation}
                </p>
                <p>
                  <span className="font-semibold text-white">Contact :</span>{" "}
                  {profile.email}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_35px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />
            <div className="relative">
              <h2 className="text-lg font-semibold text-white">
                BTS SIO (SISR) & alternance
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Je développe mes compétences en systèmes, réseaux et sécurité. En
                alternance chez RTE, je les applique au quotidien à travers le
                support, la gestion des incidents, l’administration des accès et
                la gestion du parc informatique.
              </p>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4">
                <h3 className="text-sm font-semibold text-cyan-300">
                  RTE - Réseau de Transport d&apos;Électricité
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Alternance en tant qu’Appui à l’Animation Régionale du SI —
                  Service POLARIS (Pôle d’Animation Régionale du SI et de sa
                  Sécurité).
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-slate-950/70 p-6 shadow-[0_0_35px_rgba(217,70,239,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
            <div className="relative">
              <h2 className="text-lg font-semibold text-white">
                Organigramme du service
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Cette rubrique permet d’accéder au document PDF présentant
                l’organigramme de mon service ainsi que les éléments liés à mon
                alternance.
              </p>

              <div className="mt-6">
                <a
                  href="/documents/organigramme-service.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.24)] transition hover:bg-cyan-300"
                >
                  Voir le PDF
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                Mets ton fichier dans{" "}
                <span className="text-slate-300">
                  public/documents/organigramme-service.pdf
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-6 xl:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_28%)]" />
            <div className="relative">
              <h2 className="text-xl font-bold text-white">
                Expériences professionnelles
              </h2>

              <div className="mt-5 space-y-5">
                <ResumeEntry
                  variant="professional"
                  logo="/logos/rte.png"
                  logoAlt="Logo RTE"
                  titre="Alternance – Appui Animateur Régional SI"
                  structure="RTE – Réseau de Transport d'Électricité"
                  meta="Saint-Denis (93) | 2024–2026 (2 ans)"
                  missions={[
                    "Coordination des CSI et pilotage de projets SI transverses.",
                    "Support utilisateurs et gestion des incidents.",
                    "Administration des accès et gestion du parc informatique.",
                    "Organisation des travaux et aménagements SI, conformité.",
                    "Suivi, reporting et contrôle interne.",
                  ]}
                  technologies="ServiceNow, SharePoint, O365, Active Directory, GAIA"
                />

                <ResumeEntry
                  variant="professional"
                  logo="/logos/sqy.png"
                  logoAlt="Logo SQY"
                  titre="Stage – Support informatique"
                  structure="Communauté d’agglomération de SQY"
                  meta="Trappes (78) | janvier 2024 (4 semaines)"
                  missions={[
                    "Préparation et maintenance des postes.",
                    "Support utilisateurs et gestion des tickets.",
                    "Participation aux projets IT.",
                  ]}
                  technologies="Windows 10/11, GLPI"
                />

                <ResumeEntry
                  variant="professional"
                  logo="/logos/ielo.png"
                  logoAlt="Logo IELO"
                  titre="Stage – Technicien SI"
                  structure="IELO informatique"
                  meta="Houilles (78) | 06/2022, 12/2022, 06/2023, 10/2023 (4 × 4 semaines)"
                  missions={[
                    "Réparation de pannes matérielles et logicielles.",
                    "Assistance technique et mises à jour.",
                  ]}
                  technologies="Windows, Linux, diagnostic matériel et logiciel, PowerShell, gestion et accès NAS"
                />

                <ResumeEntry
                  variant="professional"
                  logo="/logos/INLI.png"
                  logoAlt="Logo IN'LI"
                  titre="Stage – Technicien SI"
                  structure="IN'LI"
                  meta="Puteaux (92) | 01/2022 (3 semaines)"
                  missions={[
                    "Administration réseau et maintenance du parc informatique.",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(217,70,239,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_28%)]" />
            <div className="relative">
              <h2 className="text-xl font-bold text-white">Parcours académique</h2>

              <div className="mt-5 space-y-5">
                <ResumeEntry
                  variant="academic"
                  logo="/logos/h3-campus.png"
                  logoAlt="Logo H3 Campus"
                  titre="BTS SIO SISR"
                  structure="H3 Campus"
                  meta="Poissy (78) | 2024–2026 (2 ans)"
                  showMissionsTitle={false}
                  missions={[
                    "Brevet de Technicien Supérieur – Services Informatiques aux Organisations, option A : Solutions d'Infrastructure, Systèmes et Réseaux.",
                  ]}
                />

                <ResumeEntry
                  variant="academic"
                  logo="/logos/claude-chappe.png"
                  logoAlt="Logo Lycée Claude Chappe"
                  titre="BAC PRO SN RISC"
                  structure="Lycée professionnel Claude Chappe"
                  meta="Nanterre (92) | 2021–2024 (3 ans)"
                  showMissionsTitle={false}
                  missions={[
                    "Baccalauréat Professionnel Systèmes Numériques – option Réseaux Informatiques et Systèmes Communicants.",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}