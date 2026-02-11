import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description:
    "Kuzey Atlas Makina'nın operasyon, satış ve servis kadrosu ile tanışın.",
};

export default function TeamPage() {
  return (
    <main className="section-padding">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Kurumsal
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            Sahadaki gücümüz: uzman ekip
          </h1>
          <p className="mt-4 text-muted-foreground">
            Operasyon, satış ve servis ekiplerimiz müşteri beklentilerini tek bir
            plan üzerinden yönetir. Her projeye özel danışman atanır.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <Card key={member.name} className="border-border/60">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-foreground">
                  {member.name}
                </p>
                <p className="text-sm text-accent">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {member.focus}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border/60 bg-muted/30 p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Operasyon Modelimiz
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              "Proje danışmanı ataması",
              "Saha koordinasyon raporu",
              "7/24 servis yönlendirme",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
