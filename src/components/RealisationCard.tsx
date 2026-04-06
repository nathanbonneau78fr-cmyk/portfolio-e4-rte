import Link from "next/link";
import Image from "next/image";
import type { Realisation } from "@/data/realisations";
import { toSlug } from "@/lib/toSlug";
import CompetencePictBadge from "@/components/CompetencePictBadge";

export default function RealisationCard({ r }: { r: Realisation }) {
  const slug = toSlug(r.titre);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/70 shadow-[0_0_35px_rgba(34,211,238,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_28%)]" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="relative h-56 w-full overflow-hidden">
          {r.image ? (
            <Image
              src={r.image}
              alt={r.imageAlt ?? r.titre}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-contain object-center scale-100 transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-900/60 to-black/40" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/90 via-[#050a12]/35 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h2 className="text-lg font-semibold leading-snug text-white">
            <Link
              className="transition hover:text-cyan-300"
              href={`/realisations/${slug}`}
            >
              {r.titre}
            </Link>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {r.contexte}
          </p>

          <div className="mt-auto pt-4">
            <div className="flex min-h-[34px] flex-wrap gap-2">
              {r.competences.map((c) => (
                <CompetencePictBadge key={c} code={c} size="sm" />
              ))}
            </div>

            <div className="mt-4">
              <Link
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.24)] transition hover:bg-cyan-300"
                href={`/realisations/${slug}`}
              >
                Voir la fiche <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}