import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "Références & Clients — RESTO TRUCKS" },
      { name: "description", content: "Découvrez les clients qui nous font confiance : Koutoubia, Qualavi et de nombreux organismes publics au Maroc." },
      { property: "og:title", content: "Nos références — RESTO TRUCKS" },
      { property: "og:description", content: "Koutoubia, Qualavi et organismes publics font confiance à RESTO TRUCKS." },
      { property: "og:url", content: "https://restotrucks.ma/references" },
    ],
    links: [{ rel: "canonical", href: "https://restotrucks.ma/references" }],
  }),
  component: References,
});

const clients = [
  "Koutoubia", "Qualavi", "Ministère de l'Éducation", "OFPPT", "Collectivités locales",
  "ONEE", "Groupes industriels", "Écoles privées", "BTP nationaux", "Sociétés agroalimentaires",
  "Hôpitaux publics", "Administrations",
];

function References() {
  return (
    <Layout>
      <section className="py-20 md:py-28 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-widest text-green-light font-bold">Ils nous font confiance</div>
          <h1 className="mt-2 font-display text-4xl md:text-6xl font-bold max-w-3xl">Plus de 10 ans de partenariats au service du Maroc.</h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl">Des grandes entreprises industrielles aux organismes publics, nos clients témoignent de notre engagement quotidien.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center">Nos clients</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c) => (
              <div key={c} className="px-6 py-8 rounded-2xl bg-white border border-border text-center font-semibold text-navy hover:border-green hover:shadow-soft transition">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center">Témoignages</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Une équipe à l'écoute, des repas de qualité et une logistique sans faille sur notre site industriel.", a: "Direction RH, groupe industriel" },
              { t: "RESTO TRUCKS gère notre cantine scolaire depuis 5 ans. Les enfants adorent et les parents sont rassurés.", a: "Directrice, établissement scolaire" },
              { t: "Réponse rigoureuse à nos appels d'offres et exécution conforme. Un partenaire fiable.", a: "Responsable marchés, organisme public" },
            ].map((x, i) => (
              <div key={i} className="p-7 rounded-2xl bg-white shadow-soft">
                <Quote className="h-8 w-8 text-green" />
                <p className="mt-4 text-foreground">{x.t}</p>
                <div className="mt-4 flex items-center gap-1 text-green">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="mt-3 text-sm text-muted-foreground font-semibold">— {x.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Rejoignez nos partenaires</h2>
          <p className="mt-4 text-muted-foreground text-lg">Discutons de votre projet de restauration collective.</p>
          <Link to="/devis" className="mt-8 inline-block px-8 py-3.5 rounded-md text-white font-semibold shadow-soft" style={{ background: "var(--gradient-accent)" }}>
            Demander un devis
          </Link>
        </div>
      </section>
    </Layout>
  );
}
