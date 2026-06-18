import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">Cette page n'existe pas ou a été déplacée.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Une erreur est survenue</h1>
        <p className="mt-2 text-sm text-muted-foreground">Veuillez réessayer ou revenir à l'accueil.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Réessayer
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "NLAogWSyR7msqUwtY1OTgMJeb8KHiqTHx4cw2TQnIHI" },
      { title: "RESTO TRUCKS — Restauration collective au Maroc" },
      { name: "description", content: "RESTO TRUCKS, leader de la restauration collective au Maroc : cantines scolaires, sites industriels, bases-vie, marchés publics. Plus de 10 ans d'excellence." },
      { name: "author", content: "RESTO TRUCKS" },
      { name: "keywords", content: "restauration collective Maroc, cantine scolaire, restauration entreprise, base-vie, chantier, appel d'offres restauration, traiteur industriel Maroc, RESTO TRUCKS" },
      { property: "og:title", content: "RESTO TRUCKS — Restauration collective au Maroc" },
      { property: "og:description", content: "RESTO TRUCKS, leader de la restauration collective au Maroc : cantines scolaires, sites industriels, bases-vie, marchés publics. Plus de 10 ans d'excellence." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_MA" },
      { property: "og:site_name", content: "RESTO TRUCKS" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RESTO TRUCKS — Restauration collective au Maroc" },
      { name: "twitter:description", content: "RESTO TRUCKS, leader de la restauration collective au Maroc : cantines scolaires, sites industriels, bases-vie, marchés publics. Plus de 10 ans d'excellence." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b9201cae-16df-4e04-8e6d-91500ce03196" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b9201cae-16df-4e04-8e6d-91500ce03196" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "RESTO TRUCKS",
          description: "Restauration collective au Maroc : cantines scolaires, sites industriels, bases-vie, marchés publics.",
          telephone: "+212661309931",
          email: "restotrucks@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "N°41 Bloc PAM 1er Étage, Ouled Mrah",
            addressLocality: "Ben Ahmed",
            addressCountry: "MA",
          },
          areaServed: "Morocco",
          slogan: "Plus de 10 ans d'excellence au service de la restauration collective au Maroc",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
