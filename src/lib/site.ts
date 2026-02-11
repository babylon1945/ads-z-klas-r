import {
  Bolt,
  Building2,
  CheckCircle2,
  Factory,
  HardHat,
  PhoneCall,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export const site = {
  name: "Wolfs Grup",
  shortName: "WG",
  description:
    "İş makinesi kiralama, ikinci el satış, servis/bakım ve yedek parça çözümlerinde kurumsal çözüm ortağı.",
  phone: "0538 052 88 82",
  phoneHref: "tel:+905380528882",
  emailHref: "mailto:info@wolfsgrup.com",
  address: "Meşrutiyet Mahallesi Konur Sokak 59/9",
  workingHours: "Hafta içi 08:30 - 18:30 | Cumartesi 09:00 - 14:00",
};

export const nav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Makine Parkı", href: "#makine-parki" },
  { label: "Yedek Parça", href: "#yedek-parca" },
  { label: "İletişim", href: "#iletisim" },
];

export const services = [
  {
    title: "İş Makinesi Kiralama",
    description:
      "Kısa ve uzun dönem kiralama seçenekleri, sahaya hızlı sevk ve operatörlü paketler.",
    icon: Truck,
  },
  {
    title: "İkinci El Satış",
    description:
      "Ekspertiz raporlu, bakımı yapılmış ikinci el iş makineleri ve finansman desteği.",
    icon: CheckCircle2,
  },
  {
    title: "Servis & Bakım",
    description:
      "Saha servis ekipleri, planlı bakım ve arıza tespitinde hızlı çözüm.",
    icon: Wrench,
  },
  {
    title: "Yedek Parça",
    description:
      "Orijinal ve OEM seçenekleri, stoktan hızlı teslimat ve garanti.",
    icon: Bolt,
  },
];

export const sectors = [
  {
    title: "Altyapı Projeleri",
    description: "Kanal, yol ve köprü projeleri için ağır sınıf çözümler.",
    icon: Building2,
  },
  {
    title: "Madencilik",
    description: "Zorlu sahalara uygun dayanıklı makine parkı.",
    icon: Factory,
  },
  {
    title: "Şantiye Operasyonları",
    description: "Günlük operasyonu hızlandıran kompakt iş makineleri.",
    icon: HardHat,
  },
];

export const stats = [
  { label: "Aktif Kiralama Makinesi", value: "320+" },
  { label: "Hizmet Verilen İl", value: "27" },
  { label: "Yıllık Servis Müdahalesi", value: "1.450" },
  { label: "Müşteri Memnuniyeti", value: "%98" },
];

export const equipment = [
  {
    title: "Ekskavatörler",
    detail: "20-55 ton arası, farklı kepçe seçenekleri.",
  },
  {
    title: "Lastikli Yükleyiciler",
    detail: "Hızlı yükleme, düşük yakıt tüketimi.",
  },
  {
    title: "Dozer & Greyder",
    detail: "Zemin hazırlık ve tesviye işleri için.",
  },
  {
    title: "Vinç & Forklift",
    detail: "Şantiye içi lojistik ve ağır kaldırma çözümleri.",
  },
];

export const team = [
  {
    name: "Ece Demir",
    role: "Genel Müdür",
    focus: "Operasyon ve kalite yönetimi",
  },
  {
    name: "Serhat Koç",
    role: "Satış Direktörü",
    focus: "Kiralama ve ikinci el satış",
  },
  {
    name: "Zeynep Kaya",
    role: "Servis Müdürü",
    focus: "Bakım, yedek parça ve saha ekipleri",
  },
  {
    name: "Mert Aydın",
    role: "Finans ve Sözleşmeler",
    focus: "Sözleşme ve finansman çözümleri",
  },
];

export const faqs = [
  {
    question: "Kiralama süreci nasıl ilerliyor?",
    answer:
      "İhtiyaç analizi sonrası uygun makine listesi ve teklif sunulur. Sözleşme onayıyla birlikte sevkiyat ve saha kurulumu yapılır.",
  },
  {
    question: "Operatörlü kiralama yapıyor musunuz?",
    answer:
      "Evet. İhtiyaca göre operatörlü, yakıt ve bakım dahil paketler sunuyoruz.",
  },
  {
    question: "İkinci el makinelerde garanti sunuyor musunuz?",
    answer:
      "Ekspertiz raporlu makinelerde belirli bileşenler için 6-12 ay garanti sunuyoruz.",
  },
  {
    question: "Yedek parça tedarik süresi nedir?",
    answer:
      "Stoklu parçalarda aynı gün kargo, özel siparişlerde 3-10 iş günü aralığı.",
  },
];

export const certifications = [
  "ISO 9001 Kalite Yönetimi",
  "ISO 14001 Çevre Yönetimi",
  "OHSAS 18001 İş Sağlığı",
];

export const contactCards = [
  {
    title: "Hızlı Teklif",
    description: "Operasyon tipinize uygun kiralama teklifi alın.",
    icon: PhoneCall,
  },
  {
    title: "Servis Talebi",
    description: "Saha müdahalesi için hızlı randevu oluşturun.",
    icon: ShieldCheck,
  },
  {
    title: "Yedek Parça",
    description: "Doğru parçayı hızlıca tedarik edin.",
    icon: Bolt,
  },
];
