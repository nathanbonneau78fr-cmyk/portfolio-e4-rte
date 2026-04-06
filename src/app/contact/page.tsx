import Link from "next/link";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Coordonnées et accès à mon CV"
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 px-6 py-8 shadow-[0_0_50px_rgba(34,211,238,0.10)] md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
              Contact professionnel
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              Me contacter
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              Vous pouvez me contacter pour toute demande liée à mon profil,
              mon alternance, mes compétences ou mes réalisations dans le domaine
              des systèmes et réseaux.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />

            <div className="relative">
              <h3 className="text-xl font-bold text-white">
                Coordonnées
              </h3>

              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <p>
                  <span className="font-semibold text-white">Nom :</span>{" "}
                  {profile.nom}
                </p>

                <p>
                  <span className="font-semibold text-white">Email :</span>{" "}
                  {profile.email}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Localisation :
                  </span>{" "}
                  {profile.localisation}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(217,70,239,0.08)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />

            <div className="relative">
              <h3 className="text-xl font-bold text-white">
                Curriculum Vitae
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Consultez ou téléchargez mon CV pour obtenir une vue globale de
                mon parcours, de mes compétences et de mes expériences.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/cv/cv-nathan-bts-sio-sisr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.24)] transition hover:bg-cyan-300"
                >
                  Consulter le CV
                </Link>

                <a
                  href="/cv/cv-nathan-bts-sio-sisr.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Télécharger le CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-cyan-300">
                Disponibilité
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Disponible pour échanger sur mon profil, mon alternance ou des
                opportunités professionnelles.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-fuchsia-300">
                Réactivité
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Réponse rapide aux messages professionnels et demandes de
                contact.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-blue-300">
                Professionnel
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Communication claire, structurée et adaptée au contexte IT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}