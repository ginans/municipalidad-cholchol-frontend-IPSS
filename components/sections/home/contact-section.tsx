"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ContactDraft = {
  name: string;
  email: string;
  message: string;
};

function validateContact(form: ContactDraft) {
  const errors: Partial<Record<keyof ContactDraft, string>> = {};

  if (!form.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  }

  if (!form.email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Ingresa un correo valido.";
  }

  if (!form.message.trim()) {
    errors.message = "El mensaje es obligatorio.";
  } else if (form.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<ContactDraft>({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<keyof ContactDraft, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const errors = useMemo(() => validateContact(form), [form]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length > 0) {
      toast.error("Revisa los campos antes de enviar.");
      return;
    }

    setForm({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
    toast.success("Mensaje enviado. Te contactaremos pronto.");
  };

  return (
    <section id="contacto" className="mt-12">
      <div className="rounded-3xl border border-border/70 bg-white/95 p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/cholchol/logos/logo-color.png"
            alt="Logo Municipalidad de Cholchol"
            width={64}
            height={64}
            className="h-12 w-12 object-contain"
          />
          <h2 className="font-serif text-2xl text-primary">
            Contacto municipal
          </h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Completa el formulario. Las validaciones se aplican en tiempo real.
        </p>

        <form className="mt-6 grid gap-4" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium">
              Nombre
            </label>
            <Input
              id="contact-name"
              value={form.name}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, name: event.target.value }))
              }
              onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
              aria-invalid={Boolean(touched.name && errors.name)}
            />
            {touched.name && errors.name ? (
              <p className="text-xs text-red-600">{errors.name}</p>
            ) : null}
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium">
              Correo electronico
            </label>
            <Input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, email: event.target.value }))
              }
              onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              aria-invalid={Boolean(touched.email && errors.email)}
            />
            {touched.email && errors.email ? (
              <p className="text-xs text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="contact-message" className="text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={form.message}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, message: event.target.value }))
              }
              onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
              className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              aria-invalid={Boolean(touched.message && errors.message)}
            />
            <p className="text-xs text-muted-foreground">
              {form.message.length} caracteres
            </p>
            {touched.message && errors.message ? (
              <p className="text-xs text-red-600">{errors.message}</p>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit">Enviar consulta</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
