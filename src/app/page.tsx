import Link from "next/link";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

const quickLinks = [
  {
    href: "/a-propos",
    label: "À propos",
    description: "Profil, parcours, alternance et expériences.",
  },
  {
    href: "/competences",
    label: "Compétences",
    description: "Systèmes, réseaux, support et sécurité.",
  },
  {
    href: "/veille",
    label: "Veille technologique",
    description: "Suivi des outils et actualités techniques.",
  },
];

export default function HomePage() {
  return (
    <Section
      title="Bienvenue sur mon portfolio"
      subtitle="Étudiant en BTS SIO SISR à H3 Campus de Poissy, je développe mes compétences en administration système, sécurité réseau et infrastructure informatique."
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 px-6 py-8 shadow-[0_0_50px_rgba(34,211,238,0.10)] md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
              Portfolio BTS SIO SISR
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              {profile.nom}
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              Ce portfolio présente mon parcours, mon alternance chez RTE, mes
              compétences, mes réalisations professionnelles et ma veille
              technologique dans le domaine des systèmes et réseaux.
            </p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />

            <div className="relative flex h-full flex-col">
              <div className="flex-1">
                <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.18)]">
                  Identité
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  Mon objectif
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  <span className="font-semibold text-white">Projet :</span>{" "}
                  {profile.objectif}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/realisations"
                  className="inline-flex rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.24)] transition hover:bg-cyan-300"
                >
                  Voir mes réalisations
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(217,70,239,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

            <div className="relative flex h-full flex-col">
              <div className="flex-1">
                <span className="inline-flex rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-fuchsia-300 shadow-[0_0_20px_rgba(217,70,239,0.16)]">
                  Contexte
                </span>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  Alternance chez RTE
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {profile.alternance}
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-white">
                      {link.label}
                    </p>
                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-cyan-300">Formation</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                BTS SIO option SISR, orienté systèmes, réseaux et
                infrastructures.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-fuchsia-300">
                Expérience
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Alternance et stages pour développer des compétences concrètes
                en support, gestion de parc et administration.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-cyan-300">Objectif</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Présenter mon parcours de façon claire, professionnelle et
                cohérente à travers l’ensemble du portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}