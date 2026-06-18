import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ChefHat, Building2, Truck, Users, GraduationCap, Briefcase, HardHat, PartyPopper } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Restauration collective | RESTO TRUCKS" },
      { name: "description", content: "Cantines scolaires, internats, sites industriels, bases-vie, chantiers, marchés publics, restauration d'entreprise. Nos services partout au Maroc." },
      { property: "og:title", content: "Nos services de restauration collective" },
      { property: "og:description", content: "Une offre complète : cantines, entreprises, chantiers, marchés publics." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { i: GraduationCap, t: "Cantines scolaires", d: "Repas équilibrés conformes aux recommandations nutritionnelles, adaptés à chaque tranche d'âge. Service dans les écoles publiques et privées." },
  { i: ChefHat, t: "Internats", d: "Trois repas par jour, sept jours sur sept. Menus variés, produits frais, équipes dédiées sur site." },
  { i: HardHat, t: "Sites industriels", d: "Restauration continue pour usines et sites de production. Services en 1, 2 ou 3 services selon vos équipes postées." },
  { i: Truck, t: "Bases-vie & chantiers", d: "Cuisines mobiles, livraison liaison chaude ou froide, gestion complète des bases-vie BTP." },
  { i: Briefcase, t: "Restauration d'entreprise", d: "Espaces de restauration modernes pour vos collaborateurs : self, plateaux repas, espaces snacking." },
  { i: Building2, t: "Marchés publics", d: "Réponse aux appels d'offres : crèches, hôpitaux, administrations, collectivités locales." },
  { i: Users, t: "Cantines administratives", d: "Solutions adaptées aux ministères, communes et établissements publics." },
  { i: PartyPopper, t: "Événements & séminaires", d: "Cocktails, buffets, plateaux repas pour vos événements professionnels." },
];

function Services() {
  return (
    <Layout>
      <section className="py-20 md:py-28 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-green/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-widest text-green-light font-bold">Nos services</div>
          <h1 className="mt-2 font-display text-4xl md:text-6xl font-bold max-w-3xl">Des prestations sur mesure pour chaque collectivité.</h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl">Notre savoir-faire couvre l'ensemble du cycle de la restauration collective, de la conception du menu jusqu'au service à table.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ i: Icon, t, d }) => (
            <article key={t} className="p-7 rounded-2xl bg-white border border-border hover:border-green hover:shadow-elegant transition">
              <div className="h-12 w-12 rounded-xl grid place-items-center text-white" style={{ background: "var(--gradient-accent)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-navy">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">Notre méthode</h2>
          <p className="mt-4 text-muted-foreground text-lg">Quatre étapes pour assurer un service irréprochable.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-4 text-left">
            {[
              { n: "01", t: "Étude du besoin", d: "Audit du site, du nombre de couverts et des contraintes spécifiques." },
              { n: "02", t: "Conception du menu", d: "Élaboration de menus équilibrés validés par nos nutritionnistes." },
              { n: "03", t: "Production & logistique", d: "Préparation en cuisine centrale ou sur site, livraison sécurisée." },
              { n: "04", t: "Service & suivi", d: "Distribution, contrôle qualité, retours clients et amélioration continue." },
            ].map((s) => (
              <div key={s.n} className="p-6 bg-white rounded-2xl shadow-soft">
                <div className="font-display text-3xl font-bold text-green">{s.n}</div>
                <h3 className="mt-3 font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <Link to="/devis" className="mt-12 inline-block px-8 py-3.5 rounded-md text-white font-semibold shadow-soft" style={{ background: "var(--gradient-hero)" }}>
            Démarrer mon projet
          </Link>
        </div>
      </section>
    </Layout>
  );
}
