import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Kiralama, satış, servis ve yedek parça süreçlerine dair sıkça sorulan sorular.",
};

export default function FaqPage() {
  return (
    <main className="section-padding">
      <div className="mx-auto w-full max-w-[900px] px-4 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Kurumsal
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            Sıkça Sorulan Sorular
          </h1>
          <p className="mt-4 text-muted-foreground">
            Kiralama, ikinci el satış, servis ve yedek parça süreçleriyle ilgili
            en sık sorulan soruları yanıtladık.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
