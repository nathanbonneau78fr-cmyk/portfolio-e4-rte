import Section from "@/components/Section";

const keywords = [
  "Inventaire matériel",
  "Inventaire logiciel",
  "Patch management",
  "Déploiement",
  "Supervision",
  "Licences",
  "Automatisation",
];

const trends = [
  {
    title: "Inventaire automatisé",
    text: "Les entreprises recherchent des outils capables de découvrir automatiquement les postes, serveurs, logiciels et périphériques présents sur le réseau.",
  },
  {
    title: "Centralisation de l’administration",
    text: "Les outils modernes regroupent inventaire, déploiement, patching, télémaintenance et reporting dans une seule interface.",
  },
  {
    title: "Sécurisation des terminaux",
    text: "La gestion de parc ne sert plus seulement à recenser le matériel : elle aide aussi à suivre les correctifs, les vulnérabilités et la conformité.",
  },
  {
    title: "Pilotage par tableaux de bord",
    text: "Les équipes IT ont besoin d’indicateurs lisibles pour suivre l’état du parc, anticiper les renouvellements et mieux prioriser les actions.",
  },
];

const tools = [
  {
    name: "GLPI",
    category: "Open source",
    focus: "Inventaire, assistance, gestion des actifs",
    interest:
      "Solution complète pour centraliser l’inventaire, le support et le suivi du matériel.",
  },
  {
    name: "Microsoft Intune",
    category: "Cloud",
    focus: "Gestion moderne des postes et appareils",
    interest:
      "Très adapté aux environnements Microsoft 365 pour l’administration des terminaux.",
  },
  {
    name: "ManageEngine Endpoint Central",
    category: "UEM",
    focus: "Déploiement, patch management, administration centralisée",
    interest:
      "Permet de réunir maintenance, sécurité et gestion quotidienne des postes.",
  },
  {
    name: "Lansweeper",
    category: "Inventaire",
    focus: "Découverte d’actifs et visibilité du parc",
    interest:
      "Pratique pour cartographier rapidement un parc informatique et suivre ses évolutions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Surveiller les éditeurs",
    text: "Suivre les annonces, mises à jour et nouveautés publiées par les éditeurs des solutions.",
  },
  {
    number: "02",
    title: "Comparer les fonctionnalités",
    text: "Analyser l’inventaire, le déploiement, la sécurité, la supervision et le reporting.",
  },
  {
    number: "03",
    title: "Identifier les apports",
    text: "Repérer les bénéfices concrets pour l’administration système et réseau en entreprise.",
  },
  {
    number: "04",
    title: "Mettre à jour la veille",
    text: "Ajouter régulièrement de nouvelles sources, articles, alertes et publications techniques.",
  },
];

const rssFeeds = [
  {
    name: "Microsoft Intune Blog",
    type: "RSS produit",
    description:
      "Actualités et évolutions autour de la gestion moderne des terminaux.",
    rssUrl:
      "https://techcommunity.microsoft.com/t5/s/gxcuf89792/rss/board?board.id=microsoftintuneblog",
    siteUrl:
      "https://techcommunity.microsoft.com/category/microsoftintune/blog/microsoftintuneblog",
  },
  {
    name: "GLPI",
    type: "RSS actualités",
    description: "Nouveautés, versions et annonces autour de GLPI.",
    rssUrl: "https://glpi-project.org/feed/",
    siteUrl: "https://www.glpi-project.org/en/blog/",
  },
  {
    name: "CERT-FR - Flux complet",
    type: "RSS cybersécurité",
    description:
      "Flux global du CERT-FR pour suivre les publications utiles à la veille.",
    rssUrl: "https://www.cert.ssi.gouv.fr/feed/",
    siteUrl: "https://www.cert.ssi.gouv.fr/",
  },
  {
    name: "CERT-FR - Alertes",
    type: "RSS alertes",
    description:
      "Alertes de sécurité utiles pour suivre les vulnérabilités et menaces importantes.",
    rssUrl: "https://www.cert.ssi.gouv.fr/alerte/feed/",
    siteUrl: "https://www.cert.ssi.gouv.fr/alerte/",
  },
  {
    name: "CERT-FR - Avis",
    type: "RSS avis",
    description:
      "Avis techniques utiles pour rester informé sur les vulnérabilités publiées.",
    rssUrl: "https://www.cert.ssi.gouv.fr/avis/feed/",
    siteUrl: "https://www.cert.ssi.gouv.fr/avis/",
  },
];

export default function VeillePage() {
  return (
    <Section
      title="Veille technologique"
      subtitle="Les outils de gestion de parc informatique"
    >
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950 px-6 py-8 shadow-[0_0_50px_rgba(34,211,238,0.10)] md:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.16)]">
              BTS SIO SISR
            </span>

            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              Les outils de gestion de parc informatique
            </h2>

            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
              Cette veille technologique porte sur les solutions permettant
              d’inventorier, administrer, sécuriser et maintenir un parc
              informatique. L’objectif est d’identifier les évolutions des outils,
              leurs usages en entreprise et leur intérêt pour un administrateur
              systèmes et réseaux.
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
              <p className="text-sm font-semibold text-cyan-300">Thème</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Les outils de gestion de parc informatique et leur évolution dans
                l’administration des systèmes.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-fuchsia-300">Problématique</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Comment les outils de gestion de parc permettent-ils d’améliorer
                la visibilité, la maintenance et la sécurité des équipements
                informatiques ?
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-blue-300">Objectif</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Suivre les tendances, comparer les solutions et comprendre leur
                apport dans un contexte professionnel.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-white">Tendances observées</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trends.map((trend, index) => {
              const tone =
                index % 3 === 0
                  ? "border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.06)] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_35%),rgba(2,6,23,0.78)]"
                  : index % 3 === 1
                  ? "border-fuchsia-400/20 shadow-[0_0_30px_rgba(217,70,239,0.06)] bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.14),transparent_35%),rgba(2,6,23,0.78)]"
                  : "border-blue-400/20 shadow-[0_0_30px_rgba(59,130,246,0.06)] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),rgba(2,6,23,0.78)]";

              return (
                <div
                  key={trend.title}
                  className={`rounded-2xl border p-5 backdrop-blur-xl ${tone}`}
                >
                  <h4 className="text-base font-semibold text-white">
                    {trend.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {trend.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-white">
            Exemples d’outils suivis
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {tools.map((tool, index) => {
              const badgeColor =
                index % 2 === 0 ? "text-cyan-300" : "text-fuchsia-300";

              const boxTone =
                index % 2 === 0
                  ? "border-cyan-400/20 shadow-[0_0_35px_rgba(34,211,238,0.08)]"
                  : "border-fuchsia-400/20 shadow-[0_0_35px_rgba(217,70,239,0.08)]";

              const glow =
                index % 2 === 0
                  ? "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_35%),rgba(2,6,23,0.75)]"
                  : "bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.14),transparent_35%),rgba(2,6,23,0.75)]";

              return (
                <div
                  key={tool.name}
                  className={`rounded-2xl border p-5 backdrop-blur-xl ${boxTone} ${glow}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {tool.name}
                      </h4>
                      <p className={`mt-1 text-xs uppercase tracking-wider ${badgeColor}`}>
                        {tool.category}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3 text-sm text-slate-300">
                    <p>
                      <span className="font-semibold text-white">
                        Orientation principale :
                      </span>{" "}
                      {tool.focus}
                    </p>
                    <p>
                      <span className="font-semibold text-white">
                        Intérêt dans la veille :
                      </span>{" "}
                      {tool.interest}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Méthode de veille</h3>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => {
              const numberColor =
                index % 2 === 0 ? "text-cyan-300" : "text-fuchsia-300";

              const tone =
                index % 2 === 0
                  ? "border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_35%),rgba(2,6,23,0.78)]"
                  : "border-fuchsia-400/20 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.14),transparent_35%),rgba(2,6,23,0.78)]";

              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border p-5 shadow-[0_0_30px_rgba(0,0,0,0.20)] backdrop-blur-xl ${tone}`}
                >
                  <div className={`text-3xl font-bold ${numberColor}`}>
                    {step.number}
                  </div>
                  <h4 className="mt-3 text-base font-semibold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_28%)]" />

          <div className="relative">
            <h3 className="mb-2 text-xl font-bold text-white">
              Flux RSS cliquables
            </h3>
            <p className="mb-4 text-sm text-slate-300">
              Ces flux me permettent de suivre les nouveautés produits, les mises à
              jour et les alertes de sécurité utiles pour ma veille technologique.
            </p>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {rssFeeds.map((feed, index) => {
                const tone =
                  index % 2 === 0
                    ? "border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_30px_rgba(34,211,238,0.08)]"
                    : "border-fuchsia-400/20 bg-fuchsia-400/5 shadow-[0_0_30px_rgba(217,70,239,0.08)]";

                const badgeTone =
                  index % 2 === 0
                    ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-300"
                    : "border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-300";

                return (
                  <div
                    key={feed.name}
                    className={`flex h-full flex-col rounded-2xl border p-5 ${tone}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-base font-semibold text-white">
                        {feed.name}
                      </h4>
                      <span
                        className={`rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${badgeTone}`}
                      >
                        {feed.type}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {feed.description}
                    </p>

                    <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        URL RSS
                      </p>
                      <a
                        href={feed.rssUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 block break-all text-sm text-cyan-300 hover:text-cyan-200"
                      >
                        {feed.rssUrl}
                      </a>
                    </div>

                    <div className="mt-4">
                      <a
                        href={feed.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.24)] transition hover:bg-cyan-300"
                      >
                        Voir la source
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-fuchsia-400/20 bg-slate-950/70 p-6 shadow-[0_0_40px_rgba(217,70,239,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_28%)]" />

          <div className="relative">
            <h3 className="text-xl font-bold text-white">Conclusion</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Les outils de gestion de parc informatique occupent aujourd’hui une
              place centrale dans les services informatiques. Ils permettent
              d’améliorer l’inventaire, la maintenance, la sécurité et
              l’administration des équipements.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Cette veille me permet de suivre les évolutions des solutions du
              marché et de mieux comprendre les besoins réels des entreprises en
              matière d’administration système et réseau.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}