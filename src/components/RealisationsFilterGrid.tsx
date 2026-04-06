"use client";

import { useMemo, useState } from "react";
import type { Realisation } from "@/data/realisations";
import RealisationCard from "@/components/RealisationCard";

type Filter = "all" | "formation" | "professionnel";

export default function RealisationsFilterGrid({
  realisations,
}: {
  realisations: Realisation[];
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    let formation = 0;
    let professionnel = 0;

    for (const r of realisations) {
      if (r.categorie === "formation") formation++;
      if (r.categorie === "professionnel") professionnel++;
    }

    return { all: realisations.length, formation, professionnel };
  }, [realisations]);

  const filtered = useMemo(() => {
    if (filter === "all") return realisations;
    return realisations.filter((r) => r.categorie === filter);
  }, [realisations, filter]);

  const btnClass = (active: boolean, tone: "all" | "formation" | "professionnel") => {
    const base =
      "rounded-xl border px-4 py-2 text-sm font-semibold transition duration-200";
    if (active) {
      if (tone === "all") {
        return `${base} border-cyan-300/30 bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.24)]`;
      }
      if (tone === "formation") {
        return `${base} border-fuchsia-300/30 bg-fuchsia-400 text-slate-950 shadow-[0_0_24px_rgba(217,70,239,0.24)]`;
      }
      return `${base} border-blue-300/30 bg-blue-400 text-slate-950 shadow-[0_0_24px_rgba(96,165,250,0.24)]`;
    }

    return `${base} border-white/10 bg-white/5 text-white hover:bg-white/10`;
  };

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-5 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_28%)]" />

        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]">
                Parcours de professionnalisation
              </span>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Les fiches ci-dessous présentent une sélection de mes
                réalisations en formation et en contexte professionnel.
              </p>
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
              {counts.all} fiches
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-5">
            <button
              type="button"
              className={btnClass(filter === "all", "all")}
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
            >
              Vue d’ensemble ({counts.all})
            </button>

            <button
              type="button"
              className={btnClass(filter === "formation", "formation")}
              onClick={() => setFilter("formation")}
              aria-pressed={filter === "formation"}
            >
              Contexte de formation ({counts.formation})
            </button>

            <button
              type="button"
              className={btnClass(
                filter === "professionnel",
                "professionnel"
              )}
              onClick={() => setFilter("professionnel")}
              aria-pressed={filter === "professionnel"}
            >
              Contexte professionnel ({counts.professionnel})
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((r) => (
          <RealisationCard key={r.titre} r={r} />
        ))}
      </div>
    </div>
  );
}