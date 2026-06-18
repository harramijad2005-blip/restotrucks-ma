import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/references", label: "Références" },
  { to: "/appels-offres", label: "Appels d'offres" },
  { to: "/devis", label: "Devis" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-lg grid place-items-center text-white font-bold" style={{ background: "var(--gradient-hero)" }}>
              RT
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-navy">RESTO TRUCKS</div>
              <div className="text-[10px] uppercase tracking-widest text-green font-semibold">Restauration collective</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy hover:bg-secondary rounded-md transition"
                activeProps={{ className: "px-3 py-2 text-sm font-semibold text-navy bg-secondary rounded-md" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+212661309931" className="ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-semibold shadow-soft" style={{ background: "var(--gradient-accent)" }}>
              <Phone className="h-4 w-4" /> 06 61 30 99 31
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-3 flex flex-col gap-1">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-secondary text-sm font-medium">
                  {n.label}
                </Link>
              ))}
              <a href="tel:+212661309931" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white font-semibold" style={{ background: "var(--gradient-accent)" }}>
                <Phone className="h-4 w-4" /> 06 61 30 99 31
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-bold">RESTO TRUCKS</div>
            <p className="mt-3 text-sm text-white/80">Plus de 10 ans d'excellence au service de la restauration collective au Maroc.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-light">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-white">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-light">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> 06 61 30 99 31</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> restotrucks@gmail.com</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> N°41 Bloc PAM, Ouled Mrah, Ben Ahmed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-light">Couverture</h4>
            <p className="text-sm text-white/80">Service disponible dans toutes les villes du Maroc : Casablanca, Rabat, Marrakech, Tanger, Agadir, Fès, et plus.</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-white/60 flex flex-wrap gap-3 justify-between">
            <span>© {new Date().getFullYear()} RESTO TRUCKS. Tous droits réservés.</span>
            <span>restotrucks.ma</span>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/212661309931"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-elegant hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.47 0 .15 5.32.15 11.89c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.57 0 11.89-5.32 11.89-11.89 0-3.18-1.24-6.17-3.42-8.42zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.23-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 0 1 2.9 7.01c0 5.47-4.45 9.9-9.92 9.9zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07c-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
      </a>
    </div>
  );
}
