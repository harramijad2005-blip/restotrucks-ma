import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demande de devis — RESTO TRUCKS" },
      { name: "description", content: "Demandez votre devis gratuit pour vos besoins en restauration collective au Maroc. Réponse sous 48h." },
      { property: "og:title", content: "Demande de devis — RESTO TRUCKS" },
      { property: "og:description", content: "Devis gratuit en restauration collective : cantines, entreprises, chantiers." },
      { property: "og:url", content: "/devis" },
    ],
    links: [{ rel: "canonical", href: "/devis" }],
  }),
  component: Devis,
});

const prestations = [
  "Cantine scolaire", "Internat", "Restauration d'entreprise", "Site industriel",
  "Base-vie / chantier", "Marché public", "Événementiel", "Autre",
];

function Devis() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = `Bonjour,%0A%0ANouvelle demande de devis :%0A
Entreprise: ${form.get("entreprise")}%0A
Responsable: ${form.get("responsable")}%0A
Téléphone: ${form.get("telephone")}%0A
Email: ${form.get("email")}%0A
Ville: ${form.get("ville")}%0A
Repas/jour: ${form.get("repas")}%0A
Prestation: ${form.get("prestation")}%0A
Message: ${form.get("message")}`;
    window.location.href = `mailto:restotrucks@gmail.com?subject=Demande de devis&body=${body}`;
    setSent(true);
  }

  return (
    <Layout>
      <section className="py-20 md:py-24 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-widest text-green-light font-bold">Devis gratuit</div>
          <h1 className="mt-2 font-display text-4xl md:text-6xl font-bold max-w-3xl">Demandez votre devis en quelques minutes.</h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl">Remplissez ce formulaire — notre équipe vous répond sous 48 heures avec une proposition adaptée.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {sent ? (
            <div className="p-10 rounded-3xl bg-green/10 border border-green text-center">
              <CheckCircle2 className="h-14 w-14 text-green mx-auto" />
              <h2 className="mt-4 font-display text-2xl font-bold text-navy">Merci pour votre demande !</h2>
              <p className="mt-2 text-muted-foreground">Votre email est en cours d'envoi. Nous reviendrons vers vous sous 48h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-10 rounded-3xl bg-white border border-border shadow-elegant grid gap-5 md:grid-cols-2">
              <Field label="Nom de l'entreprise *" name="entreprise" required />
              <Field label="Responsable *" name="responsable" required />
              <Field label="Téléphone *" name="telephone" type="tel" required />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Ville *" name="ville" required />
              <Field label="Nombre de repas par jour *" name="repas" type="number" min={1} required />
              <div className="md:col-span-2 grid gap-2">
                <label className="text-sm font-semibold text-navy">Type de prestation *</label>
                <select name="prestation" required className="px-4 py-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-green">
                  {prestations.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 grid gap-2">
                <label className="text-sm font-semibold text-navy">Message</label>
                <textarea name="message" rows={5} maxLength={1000} className="px-4 py-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-green resize-none" placeholder="Précisez votre besoin, dates, contraintes spécifiques…" />
              </div>
              <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md text-white font-semibold shadow-soft hover:opacity-95 transition" style={{ background: "var(--gradient-accent)" }}>
                <Send className="h-4 w-4" /> Envoyer ma demande
              </button>
              <p className="md:col-span-2 text-xs text-muted-foreground text-center">Vos informations restent confidentielles et ne sont utilisées que pour répondre à votre demande.</p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, min }: { label: string; name: string; type?: string; required?: boolean; min?: number }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-navy">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        maxLength={200}
        className="px-4 py-3 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-green"
      />
    </div>
  );
}
