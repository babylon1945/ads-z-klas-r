"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" placeholder="Ad Soyad" required />
        <Input name="company" placeholder="Firma (opsiyonel)" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="phone" placeholder="Telefon" required />
        <Input name="email" type="email" placeholder="E-posta" required />
      </div>
      <Textarea
        name="message"
        placeholder="İhtiyaçlarınızı ve proje detaylarını yazın"
        rows={4}
        required
      />
      <Button type="submit" className="w-full">
        Teklif Talebi Gönder
      </Button>
    </form>
  );
}
