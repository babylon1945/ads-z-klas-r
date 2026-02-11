import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certifications, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Kuzey Atlas Makina'nın hikayesi, değerleri ve kalite yaklaşımı hakkında bilgi alın.",
};

export default function AboutPage() {
  return (
    <main className="section-padding">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Kurumsal
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Sahada güven veren çözüm ortağıyız
            </h1>
            <p className="mt-4 text-muted-foreground">
              {site.name}, 2008 yılından bu yana kiralama, ikinci el satış,
              servis ve yedek parça hizmetlerinde uzmanlaşmıştır. Operasyonun
              tamamını tek çatı altında yöneterek müşterilerine hızlı, güvenli ve
              ölçümlenebilir çözümler sunar.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={site.phoneHref}>Bizimle Çalışın</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={site.emailHref}>Kurumsal Sunum</a>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card p-2 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop"
              alt="Şantiye saha ekibi"
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
                Türkiye’nin en güvenilir iş makinesi çözüm platformu olmak ve
                dijital takip çözümleriyle sektörde şeffaflığı artırmak.
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
