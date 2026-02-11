import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {site.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {site.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-foreground">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href={site.phoneHref}>{site.phone}</a>
              </span>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>{site.address}</span>
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Hızlı Menü
            </h4>
            <div className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground/80 transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              İletişim
            </h4>
            <p className="text-sm text-muted-foreground">
              Projeleriniz için hızlı teklif ve danışmanlık.
            </p>
            <Button asChild variant="outline" className="mt-2 w-fit">
              <a href={site.phoneHref}>Teklif Al</a>
            </Button>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© 2026 {site.name}. Tüm hakları saklıdır.</span>
          <span>{site.workingHours}</span>
        </div>
      </div>
    </footer>
  );
}
