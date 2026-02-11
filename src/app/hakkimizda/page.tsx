import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { certifications, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Wolfs Grup'un hikayesi, değerleri ve kurumsal yaklaşımı hakkında bilgi alın.",
};

export default function AboutPage() {
  return (
    <main className="section-padding">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Hakkımızda
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Saha operasyonlarında güvenilir çözüm ortağı
            </h1>
            <p className="mt-4 text-muted-foreground">
              {site.name}, kiralama, ikinci el satış, servis ve yedek parça
              hizmetlerinde uzman ekibiyle hızlı ve şeffaf süreçler sunar. Her
              projeyi tek noktadan yöneterek operasyonel verimliliği artırır.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-2 shadow-lg">
            <Image
              src="/hero.jpg"
              alt="Wolfs Grup sahada"
              width={640}
              height={520}
              className="h-[320px] w-full rounded-2xl object-cover md:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <Card key={item.label} className="border-border/60">
              <CardContent className="p-6">
                <p className="text-2xl font-semibold text-foreground">
                  {item.value}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-[1fr_1fr]">
          <Card className="border-border/60">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Vizyonumuz
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Türkiye'nin en güvenilir iş makinesi çözüm platformu olmak ve
                sahada güvenilirliği artıran dijital çözümler geliştirmek.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Misyonumuz
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Doğru makineyi doğru zamanda sahaya ulaştırmak, bakım süreçlerini
                proaktif yönetmek ve müşterilerimize sürdürülebilir operasyon
                desteği sağlamak.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-14 rounded-3xl border border-border/60 bg-muted/30 p-6">
          <h2 className="text-lg font-semibold text-foreground">
            Sertifikalar ve Standartlar
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
