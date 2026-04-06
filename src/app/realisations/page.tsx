import Section from "@/components/Section";
import { realisations } from "@/data/realisations";
import RealisationsFilterGrid from "@/components/RealisationsFilterGrid";

const keywords = [
  "Alternance",
  "Support",
  "Systèmes",
  "Réseaux",
  "Sécurité",
  "Documentation",
  "Gestion de parc",
  "Projets",
];

export default function RealisationsPage() {
  const totalRealisations = realisations.length;
  const totalFormation = realisations.filter(
    (realisation) => realisation.categorie === "formation"
  ).length;
  const totalProfessionnel = realisations.filter(
    (realisation) => realisation.categorie === "professionnel"
  ).length;

  return (
    <Section
      title="Réalisations"
      subtitle="Mes projets, travaux et missions réalisés pendant ma formation et mon alternance"
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 px-6 py-8 shadow-[0_0_50px_rgba(34,211,238,0.10)] md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
              Portfolio BTS SIO SISR
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              Mes réalisations
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              Cette page regroupe les différentes réalisations menées dans le
              cadre de ma formation, de mon alternance et de mes stages. Elle
              met en avant des travaux liés au support informatique, à
              l’administration système et réseau, à la gestion de parc, à la
              sécurité ainsi qu’à la documentation technique.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-cyan-300">Formation</p>
              <p className="mt-2 text-3xl font-bold text-white">
                {totalFormation}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                réalisations réalisées dans le cadre de la formation.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-fuchsia-300">
                Professionnel
              </p>
              <p className="mt-2 text-3xl font-bold text-white">
                {totalProfessionnel}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                réalisations menées en alternance et en milieu professionnel.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-blue-300">Total</p>
              <p className="mt-2 text-3xl font-bold text-white">
                {totalRealisations}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                réalisation{totalRealisations > 1 ? "s" : ""} actuellement
                affichée{totalRealisations > 1 ? "s" : ""}.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_28%)]" />

          <div className="relative">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-white">
                Catalogue des réalisations
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Utilise les filtres pour retrouver plus facilement les projets
                correspondant à une compétence, une période ou un contexte.
              </p>
            </div>

            <RealisationsFilterGrid realisations={realisations} />
          </div>
        </div>
      </div>
    </Section>
  );
}