import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FileCheck2, ShieldCheck, Scale, Clock, FileText, Award } from "lucide-react";

export const Route = createFileRoute("/appels-offres")({
  head: () => ({
    meta: [
      { title: "Appels d'offres & Marchés publics — RESTO TRUCKS" },
      { name: "description", content: "Spécialiste des marchés publics au Maroc. Nous répondons aux appels d'offres de restauration collective avec rigueur administrative, financière et opérationnelle." },
      { property: "og:title", content: "Appels d'offres & Marchés publics" },
      { property: "og:description", content: "Réponse aux appels d'offres publics de restauration collective au Maroc." },
      { property: "og:url", content: "https://restotrucks.ma/appels-offres" },
    ],
    links: [{ rel: "canonical", href: "https://restotrucks.ma/appels-offres" }],
  }),
  component: Marches,
});

function Marches() {
  return (
    <Layout>
      <section className="py-20 md:py-28 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-green/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-widest text-green-light font-bold">Secteur public</div>
          <h1 className="mt-2 font-display text-4xl md:text-6xl font-bold max-w-3xl">Marchés publics & appels d'offres.</h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl">Plus de 10 ans d'expérience avec les administrations, collectivités, hôpitaux et établissements publics du Royaume.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-3">
          {[
            { i: FileText, t: "Dossier administratif complet", d: "Toutes les pièces administratives, fiscales et juridiques à jour, prêtes à être déposées." },
            { i: ShieldCheck, t: "Certifications & assurances", d: "HACCP, RC, garanties financières conformes au code des marchés publics marocain." },
            { i: Scale, t: "Offre technique solide", d: "Mémoires techniques détaillés, menus, planning d'exécution, moyens humains et matériels." },
            { i: Clock, t: "Respect des délais", d: "Mise en service rapide après attribution, équipes mobilisables sur tout le Maroc." },
            { i: Award, t: "Références publiques", d: "Historique de marchés exécutés avec succès auprès d'organismes publics marocains." },
            { i: FileCheck2, t: "Conformité totale", d: "Suivi rigoureux des cahiers des charges, reporting régulier et audits qualité." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="p-7 rounded-2xl bg-white border border-border hover:border-green hover:shadow-soft transition">
              <div className="h-12 w-12 rounded-xl grid place-items-center text-white" style={{ background: "var(--gradient-accent)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-navy">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy text-center">Domaines d'intervention publique</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Cantines scolaires publiques",
              "Internats & lycées",
              "Hôpitaux & cliniques publiques",
              "Centres de formation OFPPT",
              "Ministères & administrations",
              "Collectivités territoriales",
              "Forces armées & sécurité",
              "Établissements universitaires",
            ].map((x) => (
              <div key={x} className="px-5 py-4 bg-white rounded-xl border border-border flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-green/15 text-green grid place-items-center shrink-0">✓</span>
                <span className="font-medium text-navy">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Un appel d'offres à venir ?</h2>
          <p className="mt-4 text-muted-foreground text-lg">Contactez notre service marchés publics pour étudier votre cahier des charges.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-8 py-3.5 rounded-md text-white font-semibold" style={{ background: "var(--gradient-hero)" }}>Contacter le service</Link>
            <Link to="/devis" className="px-8 py-3.5 rounded-md border border-navy text-navy font-semibold hover:bg-navy hover:text-white transition">Demander un devis</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
