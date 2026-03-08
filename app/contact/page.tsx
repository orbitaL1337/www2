import { ContactForm } from '@/components/contact-form';

export const metadata = {
  title: 'Kontakt i zgłoszenia brakujących dokumentów | LexDraft',
  description:
    'Zgłoś brakujący wniosek, pismo lub odwołanie. Formularz kontaktowy do spraw formalnych i dostępności wzorów dokumentów.'
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <section className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Kontakt i zgłoszenia</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
          Brakuje Ci konkretnego wzoru? Wyślij zgłoszenie. Odpowiadamy na zapytania dotyczące dostępności dokumentów i rozwoju katalogu.
        </p>
      </section>
      <ContactForm />
    </main>
  );
}
