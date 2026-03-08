import { ContactForm } from '@/components/contact-form';

export const metadata = {
  title: 'Kontakt i zgłoszenia brakujących dokumentów | LexDraft',
  description:
    'Zgłoś brakujący wniosek, pismo lub odwołanie. Formularz kontaktowy do spraw formalnych i dostępności wzorów dokumentów.'
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <ContactForm />
    </main>
  );
}
