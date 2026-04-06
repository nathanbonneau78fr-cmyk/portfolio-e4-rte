import Section from "@/components/Section";
import {
  competences,
  technicalSkillCategories,
} from "@/data/competences";

export default function CompetencesPage() {
  return (
    <Section
      title="Compétences"
      subtitle="Compétences du BTS SIO SISR et compétences techniques mobilisées dans mon parcours"
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 px-6 py-8 shadow-[0_0_50px_rgba(34,211,238,0.10)] md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
              BTS SIO SISR
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              Mes compétences
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              Cette page présente les compétences développées pendant ma
              formation et mon alternance. Elle regroupe à la fois les
              compétences du référentiel BTS SIO et des compétences techniques
              concrètes mobilisées dans mes missions, mes stages et mes travaux
              pratiques.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-white">
              Compétences du référentiel
            </h3>
            <span className="text-xs text-slate-400">
              6 compétences principales
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {competences.map((competence, index) => {
              const accentStyles = [
                {
                  border: "border-cyan-400/20",
                  glow: "shadow-[0_0_35px_rgba(34,211,238,0.08)]",
                  bg: "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]",
                  badge:
                    "border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]",
                },
                {
                  border: "border-fuchsia-400/20",
                  glow: "shadow-[0_0_35px_rgba(217,70,239,0.08)]",
                  bg: "bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]",
                  badge:
                    "border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.16)]",
                },
                {
                  border: "border-blue-400/20",
                  glow: "shadow-[0_0_35px_rgba(59,130,246,0.08)]",
                  bg: "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]",
                  badge:
                    "border-blue-300/20 bg-blue-300/10 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.16)]",
                },
              ][index % 3];

              return (
                <div
                  key={competence.code}
                  className={`relative overflow-hidden rounded-2xl border bg-slate-950/70 p-5 backdrop-blur-xl ${accentStyles.border} ${accentStyles.glow}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 ${accentStyles.bg}`}
                  />

                  <div className="relative">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${accentStyles.badge}`}
                    >
                      {competence.code}
                    </span>

                    <h4 className="mt-4 text-lg font-semibold text-white">
                      {competence.titre}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {competence.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(217,70,239,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_28%)]" />

          <div className="relative">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">
                Compétences techniques complémentaires
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                En complément des compétences du référentiel, j’utilise
                également différents systèmes, outils, logiciels et méthodes de
                travail dans mon parcours scolaire et professionnel.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {technicalSkillCategories.map((category, index) => {
                const titleColor =
                  index % 3 === 0
                    ? "text-cyan-300"
                    : index % 3 === 1
                    ? "text-fuchsia-300"
                    : "text-blue-300";

                const dotColor =
                  index % 3 === 0
                    ? "bg-cyan-300"
                    : index % 3 === 1
                    ? "bg-fuchsia-300"
                    : "bg-blue-300";

                return (
                  <div
                    key={category.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <h4 className={`text-base font-semibold ${titleColor}`}>
                      {category.title}
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-cyan-300">Systèmes</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Utilisation et administration d’environnements Windows et Linux
                dans des contextes de support, de configuration et de
                maintenance.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-fuchsia-300">Réseaux</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Mise en pratique des bases réseau avec simulation, adressage,
                services réseau et compréhension du fonctionnement des
                infrastructures.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-blue-300">
                Professionnalisation
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Développement progressif de méthodes de travail fiables :
                documentation, organisation, support, reporting et veille.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}