import { ContactForm } from '@/components/contact-form';

export const metadata = {
  title: 'Kontakt i zapytania o przygotowanie pism | LexDraft',
  description:
    'Wyślij zapytanie o przygotowanie pisma, redakcję wniosku lub zgłoś brakujący wzór dokumentu. LexDraft wspiera formalności bez doradztwa prawnego.'
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <section className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Kontakt i zapytania ofertowe</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
          Potrzebujesz pomocy w przygotowaniu pisma lub uporządkowaniu dokumentu? Napisz do nas. Odpowiadamy w sprawach formalnych i organizacyjnych.
        </p>
      </section>
      <ContactForm />
    </main>
  );
}
