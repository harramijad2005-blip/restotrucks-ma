import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import hero from "@/assets/hero-kitchen.jpg";
import meals from "@/assets/meals.jpg";
import canteen from "@/assets/canteen.jpg";
import school from "@/assets/school.jpg";
import { ArrowRight, Award, Building2, ChefHat, FileCheck2, ShieldCheck, Truck, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RESTO TRUCKS — Restauration collective au Maroc | 10 ans d'excellence" },
      { name: "description", content: "Spécialiste de la restauration collective au Maroc : cantines scolaires, internats, sites industriels, bases-vie et marchés publics. Demandez votre devis." },
      { property: "og:title", content: "RESTO TRUCKS — Restauration collective au Maroc" },
      { property: "og:description", content: "Plus de 10 ans d'excellence au service de la restauration collective au Maroc." },
      { property: "og:url", content: "https://restotrucks.ma/" },
    ],
    links: [{ rel: "canonical", href: "https://restotrucks.ma/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Cuisine professionnelle RESTO TRUCKS" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(15,28,60,0.92) 0%, rgba(15,28,60,0.7) 55%, rgba(15,28,60,0.3) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-36 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green/90 backdrop-blur">
            <ShieldCheck className="h-4 w-4" /> Certifié HACCP — 10+ ans d'expérience
          </div>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
            La restauration collective<br />
            <span className="text-green-light">au cœur du Maroc.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            Plus de 10 ans d'excellence au service de la restauration collective au Maroc. Cantines, sites industriels, bases-vie et marchés publics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/devis" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-white text-navy font-semibold hover:bg-cream transition shadow-elegant">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10 transition">
              Découvrir nos services
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { n: "10+", l: "Années d'expérience" },
              { n: "50+", l: "Villes couvertes" },
              { n: "100K+", l: "Repas servis/mois" },
              { n: "100%", l: "Marchés publics" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-bold text-green-light">{s.n}</div>
                <div className="text-sm text-white/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-green font-bold">Nos prestations</div>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-navy">Une solution complète pour chaque collectivité</h2>
            <p className="mt-4 text-muted-foreground text-lg">De la conception du menu à la distribution, nous orchestrons chaque service avec rigueur, hygiène et savoir-faire.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: ChefHat, t: "Cantines scolaires", d: "Repas équilibrés et adaptés aux enfants, écoles primaires, collèges et internats." },
              { i: Building2, t: "Restauration d'entreprise", d: "Service sur mesure pour sociétés et administrations partout au Maroc." },
              { i: Truck, t: "Bases-vie & chantiers", d: "Cuisine sur site ou livrée, adaptée aux contraintes logistiques des chantiers." },
              { i: FileCheck2, t: "Marchés publics", d: "Réponse aux appels d'offres publics avec rigueur administrative et financière." },
              { i: Users, t: "Sites industriels", d: "Restauration continue pour usines, ouvriers postés, équipes 24/7." },
              { i: Award, t: "Événementiel", d: "Réceptions, séminaires, journées portes ouvertes : prestations clé en main." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="group p-7 rounded-2xl bg-white border border-border hover:border-green hover:shadow-elegant transition">
                <div className="h-12 w-12 rounded-xl grid place-items-center text-white" style={{ background: "var(--gradient-accent)" }}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={meals} alt="Plats marocains préparés" loading="lazy" width={1600} height={1000} className="rounded-3xl shadow-elegant" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-white rounded-2xl p-5 shadow-elegant max-w-xs">
              <div className="text-xs uppercase tracking-widest text-green font-bold">Nos clients</div>
              <div className="mt-2 font-display text-xl font-bold text-navy">Koutoubia, Qualavi & organismes publics</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-green font-bold">Notre engagement</div>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-navy">Une cuisine fraîche, locale et maîtrisée.</h2>
            <p className="mt-5 text-muted-foreground text-lg">Nous travaillons avec des producteurs marocains, respectons les normes HACCP et adaptons chaque menu aux besoins spécifiques de nos clients.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Approvisionnement local & traçabilité totale",
                "Équipes formées aux normes d'hygiène HACCP",
                "Menus équilibrés validés par des nutritionnistes",
                "Logistique nationale : toutes villes du Maroc",
              ].map((x) => (
                <li key={x} className="flex gap-3 text-foreground">
                  <span className="h-6 w-6 rounded-full bg-green/15 text-green grid place-items-center shrink-0">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/devis" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold shadow-soft" style={{ background: "var(--gradient-hero)" }}>
              Obtenir un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { img: school, t: "Écoles & internats", d: "Des milliers de repas servis chaque jour avec soin." },
              { img: canteen, t: "Sites industriels", d: "Restauration continue, adaptée au rythme des équipes." },
            ].map((s) => (
              <div key={s.t} className="relative overflow-hidden rounded-3xl group">
                <img src={s.img} alt={s.t} loading="lazy" width={1600} height={1000} className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="font-display text-3xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-white/80">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl p-10 md:p-16 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-green/30 blur-3xl" />
            <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold">Un projet de restauration collective ?</h2>
                <p className="mt-4 text-white/85 text-lg max-w-2xl">Parlons-en. Nous étudions votre besoin et vous répondons sous 48h avec une proposition adaptée.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/devis" className="px-6 py-3.5 rounded-md bg-white text-navy font-semibold hover:bg-cream">Demander un devis</Link>
                <a href="tel:+212661309931" className="px-6 py-3.5 rounded-md border border-white/30 font-semibold hover:bg-white/10">Nous appeler</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
