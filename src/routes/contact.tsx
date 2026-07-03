import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RESTO TRUCKS | Restauration collective Maroc" },
      { name: "description", content: "Contactez RESTO TRUCKS : 06 61 30 99 31, restotrucks@gmail.com. N°41 Bloc PAM, Ouled Mrah, Ben Ahmed, Maroc." },
      { property: "og:title", content: "Contactez RESTO TRUCKS" },
      { property: "og:description", content: "Téléphone, WhatsApp, email et adresse de RESTO TRUCKS." },
      { property: "og:url", content: "https://restotrucks.ma/contact" },
    ],
    links: [{ rel: "canonical", href: "https://restotrucks.ma/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="py-20 md:py-28 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-xs uppercase tracking-widest text-green-light font-bold">Contact</div>
          <h1 className="mt-2 font-display text-4xl md:text-6xl font-bold max-w-3xl">Parlons de votre projet.</h1>
          <p className="mt-5 text-white/85 text-lg max-w-2xl">Notre équipe est à votre écoute pour étudier vos besoins et vous proposer la solution la plus adaptée.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 md:grid-cols-2">
          {[
            { i: Phone, t: "Téléphone", v: "06 61 30 99 31", href: "tel:+212661309931" },
            { i: MessageCircle, t: "WhatsApp", v: "06 61 30 99 31", href: "https://wa.me/212661309931" },
            { i: Mail, t: "Email", v: "restotrucks@gmail.com", href: "mailto:restotrucks@gmail.com" },
            { i: MapPin, t: "Adresse", v: "N°41 Bloc PAM 1er Étage, Ouled Mrah, Ben Ahmed, Maroc" },
            { i: Clock, t: "Horaires", v: "Lundi – Samedi : 8h – 18h" },
            { i: MapPin, t: "Couverture", v: "Toutes les villes du Maroc" },
          ].map(({ i: Icon, t, v, href }) => (
            <a
              key={t}
              href={href || "#"}
              className="p-7 rounded-2xl bg-white border border-border hover:border-green hover:shadow-elegant transition flex gap-5"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl grid place-items-center text-white" style={{ background: "var(--gradient-accent)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-green font-bold">{t}</div>
                <div className="mt-1 font-display text-lg font-bold text-navy">{v}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden shadow-elegant border border-border">
            <iframe
              title="Localisation RESTO TRUCKS"
              src="https://www.google.com/maps?q=Ben+Ahmed+Morocco&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
