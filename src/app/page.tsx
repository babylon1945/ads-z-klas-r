import Link from "next/link";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/site/contact-form";
import { MotionDiv, fadeUp } from "@/components/site/motion";
import {
  contactCards,
  equipment,
  sectors,
  services,
  site,
  stats,
} from "@/lib/site";

export default function Home() {
  const hero = {
    title: "Güven veren saha çözümleri",
    subtitle:
      "Kiralama, ikinci el satış, servis/bakım ve yedek parça çözümlerini tek bir kurumsal çatı altında sunuyoruz.",
  };

  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/5" />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <div className="mx-auto grid min-h-screen w-full max-w-[1200px] items-start gap-8 px-4 pb-16 pt-24 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:pt-28">
          <MotionDiv {...fadeUp} className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
              İş Makinesi Kiralama ve Servis
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
              {hero.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-accent text-foreground hover:bg-accent/90">
                <a href={site.phoneHref}>
                  Hızlı Teklif Al
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-foreground/60 text-foreground hover:bg-foreground/10"
              >
                <Link href="#hizmetler">Hizmetleri İncele</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                ISO standartlarında bakım
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                7/24 saha müdahalesi
              </div>
            </div>
          </MotionDiv>
          <div className="hidden md:block" />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <MotionDiv {...fadeUp}>
            <div className="grid gap-6 rounded-3xl border border-border/60 bg-card p-6 md:grid-cols-4 md:gap-8 md:p-10">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold text-foreground md:text-3xl">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Hakkımızda
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Wolfs Grup ile güvenli saha yönetimi
            </h2>
            <p className="mt-4 text-muted-foreground">
              Kiralama, ikinci el satış, servis/bakım ve yedek parça süreçlerini
              tek noktadan yönetir; saha verimliliğini ölçülebilir şekilde
              artırırız.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="section-padding bg-muted/30">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Hizmetler
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Tek noktadan operasyon gücü
              </h2>
              <p className="mt-3 text-muted-foreground">
                Planlama, saha operasyonu ve satış sonrası bakım süreçlerini
                uçtan uca yönetiyoruz.
              </p>
            </div>
            <Button asChild variant="outline">
              <a href={site.phoneHref}>
                Proje Danışmanı
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <MotionDiv key={service.title} {...fadeUp}>
                <Card className="h-full border-border/60">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                        <service.icon className="h-5 w-5 text-accent" />
                      </span>
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {service.description}
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="makine-parki" className="section-padding">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <MotionDiv {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Makine Parkı
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Projeye göre optimize edilmiş fleet
              </h2>
              <p className="mt-4 text-muted-foreground">
                Farklı tonaj ve kapasitedeki ekipmanlarımızı proje gereksinimlerine
                göre yapılandırıyor, saha verimliliğini yükseltiyoruz.
              </p>
              <div className="mt-6 grid gap-4">
                {equipment.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-border/60 bg-card px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 text-accent" />
                  </div>
                ))}
              </div>
            </MotionDiv>
            <MotionDiv {...fadeUp}>
              <div className="rounded-3xl border border-border/60 bg-card p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      label: "Kısa dönem kiralama",
                      value: "3-30 gün",
                    },
                    {
                      label: "Uzun dönem kiralama",
                      value: "3-24 ay",
                    },
                    {
                      label: "Operatör desteği",
                      value: "Seçilebilir",
                    },
                    {
                      label: "Anlık takip",
                      value: "IoT entegrasyonu",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/60 bg-background px-4 py-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      24 saat içinde sevkiyat
                    </p>
                    <p className="text-xs text-muted-foreground">
                      İstanbul, Kocaeli, Bursa ve çevresi
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a href={site.phoneHref}>Hemen Ara</a>
                  </Button>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {sectors.map((sector) => (
              <MotionDiv key={sector.title} {...fadeUp}>
                <Card className="h-full border-border/60">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <sector.icon className="h-5 w-5 text-primary" />
                      </span>
                      <CardTitle>{sector.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {sector.description}
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="yedek-parca" className="section-padding">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6">
          <MotionDiv {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Yedek Parça & Servis
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Operasyonunuzu kesintisiz tutan servis ağı
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mobil servis araçlarımız ve parça stoklarımız ile kritik arızalara
              hızlı müdahale ediyoruz. Planlı bakım programlarıyla iş kaybını
              azaltıyoruz.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "7/24 servis hattı",
                "OEM ve orijinal parça seçenekleri",
                "Saha teknisyenleri ve gezici atölye",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv {...fadeUp}>
            <div className="rounded-3xl border border-border/60 bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Servis Performansı
              </p>
              <div className="mt-5 space-y-4">
                {[
                  {
                    label: "Ortalama müdahale süresi",
                    value: "2.4 saat",
                  },
                  {
                    label: "Yerinde çözüm oranı",
                    value: "%86",
                  },
                  {
                    label: "Stokta parça çeşidi",
                    value: "4.200+",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-border/60 pb-3"
                  >
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <MotionDiv {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                İkinci El Satış
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Ekspertiz raporlu ikinci el makineler
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tüm ikinci el makinelerimiz detaylı ekspertizden geçer,
                performans raporu ve bakım kayıtlarıyla teslim edilir.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={site.phoneHref}>Stok Listesi Al</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#iletisim">Satış Danışmanı</Link>
                </Button>
              </div>
            </MotionDiv>
            <MotionDiv {...fadeUp}>
              <div className="grid gap-4 rounded-3xl border border-border/60 bg-card p-6">
                {[
                  "Bakım geçmişi şeffaf rapor",
                  "Yerinde ekspertiz ve test sürüşü",
                  "Finansman ve takas seçenekleri",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background px-4 py-4 text-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section id="iletisim" className="section-padding">
        <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <MotionDiv {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                İletişim
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Projenize özel teklif alın
              </h2>
              <p className="mt-3 text-muted-foreground">
                İhtiyaçlarınızı yazın, ekiplerimiz en doğru makine ve servis
                planını paylaşsın.
              </p>
              <div className="mt-6 grid gap-4">
                {contactCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card px-4 py-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <card.icon className="h-5 w-5 text-accent" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {card.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-4 text-sm text-muted-foreground">
                <p className="text-foreground">{site.workingHours}</p>
                <p className="mt-1">{site.address}</p>
              </div>
            </MotionDiv>
            <MotionDiv {...fadeUp}>
              <Card className="border-border/60">
                <CardHeader>
                  <CardTitle>İletişim Formu</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      
    </main>
  );
}
