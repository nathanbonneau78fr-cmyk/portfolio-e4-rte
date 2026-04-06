import Section from "@/components/Section";
import { realisations } from "@/data/realisations";
import { toSlug } from "@/lib/toSlug";
import Link from "next/link";
import Image from "next/image";
import CompetencePictBadge from "@/components/CompetencePictBadge";
import type { CompetenceCode } from "@/components/CompetencePictBadge";

export default async function RealisationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = realisations.find((x) => toSlug(x.titre) === slug);

  if (!r) {
    return (
      <Section title="Réalisation introuvable" subtitle="Reviens à la liste.">
        <Link className="text-ink-100 hover:underline" href="/realisations">
          ← Retour aux réalisations
        </Link>
      </Section>
    );
  }

  return (
    <Section
      title="Fiche réalisation"
      subtitle="Contexte et documents associés"
    >
      <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_28%)]" />

        <div className="relative">
          {r.image ? (
            <div className="mb-6 flex justify-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:h-64 sm:w-64 md:h-72 md:w-72">
                <Image
                  src={r.image}
                  alt={r.imageAlt ?? r.titre}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
                  className="object-contain object-center p-6"
                  priority={false}
                />
              </div>
            </div>
          ) : null}

          <h2 className="text-2xl font-bold text-white">{r.titre}</h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {r.competences.map((c: CompetenceCode) => (
              <CompetencePictBadge key={c} code={c} size="sm" />
            ))}
          </div>

          <h3 className="mt-6 text-sm font-semibold text-white">Description</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            {r.contexte}
          </p>

          <h3 className="mt-6 text-sm font-semibold text-white">
            Documents (PDF)
          </h3>

          <div className="mt-3 space-y-3">
            {r.preuvesPdfAssociees.map((preuve) => {
              const isVeille = preuve.href === "/veille";

              return (
                <div
                  key={`${preuve.label}-${preuve.href}`}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-sm text-white">{preuve.label}</p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={preuve.href}
                      target={isVeille ? undefined : "_blank"}
                      rel={isVeille ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.24)] transition hover:bg-cyan-300"
                    >
                      {isVeille ? "Voir la veille" : "Consulter"}
                    </Link>

                    {!isVeille && (
                      <a
                        href={preuve.href}
                        download
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                      >
                        Télécharger
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Link className="text-white hover:text-cyan-300" href="/realisations">
              ← Retour aux réalisations
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}