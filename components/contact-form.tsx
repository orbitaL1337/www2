'use client';

import { FormEvent, useState } from 'react';

type ContactType = 'brakujacy_wniosek' | 'brakujace_pismo' | 'brakujace_odwolanie' | 'inne';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  requestType: ContactType;
  message: string;
  missingDocumentName: string;
  contactConsent: boolean;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  requestType: 'brakujacy_wniosek',
  message: '',
  missingDocumentName: '',
  contactConsent: false
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

  const validate = () => {
    const nextErrors: Errors = {};

    if (!values.name.trim()) nextErrors.name = 'Podaj imię.';
    if (!values.email.trim()) {
      nextErrors.email = 'Podaj adres e-mail.';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      nextErrors.email = 'Podaj poprawny adres e-mail.';
    }
    if (!values.subject.trim()) nextErrors.subject = 'Podaj temat zgłoszenia.';
    if (!values.message.trim()) {
      nextErrors.message = 'Opisz czego potrzebujesz.';
    } else if (values.message.trim().length < 20) {
      nextErrors.message = 'Opis powinien mieć co najmniej 20 znaków.';
    }
    if (!values.contactConsent) nextErrors.contactConsent = 'Zaznacz zgodę na kontakt zwrotny.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(null);
    setStatusType(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Wysyłka nie powiodła się.');
      }

      setStatusMessage('Dziękujemy! Zgłoszenie zostało przyjęte. Odpowiemy najszybciej jak to możliwe.');
      setStatusType('success');
      setValues(initialValues);
    } catch {
      const fallbackMail = `mailto:kontakt@lexdraft.local?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
        `Imię: ${values.name}\nEmail: ${values.email}\nRodzaj: ${values.requestType}\nPoszukiwany dokument: ${values.missingDocumentName || '-'}\n\nWiadomość:\n${values.message}`
      )}`;

      setStatusMessage('Nie udało się wysłać formularza automatycznie. Otwórz zgłoszenie przez e-mail.');
      setStatusType('error');
      window.location.href = fallbackMail;
    } finally {
      setIsSubmitting(false);
    }
  };

  const onChange = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <h1 className="text-2xl font-semibold tracking-tight">Zgłoś brakujący dokument</h1>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Nie znalazłeś potrzebnego wzoru? Wyślij zgłoszenie – dodamy brakujący dokument lub wrócimy z informacją.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Imię" error={errors.name}>
          <input value={values.name} onChange={(e) => onChange('name', e.target.value)} className="input" />
        </Field>
        <Field label="Adres e-mail" error={errors.email}>
          <input type="email" value={values.email} onChange={(e) => onChange('email', e.target.value)} className="input" />
        </Field>
      </div>

      <Field label="Temat" error={errors.subject}>
        <input value={values.subject} onChange={(e) => onChange('subject', e.target.value)} className="input" />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Rodzaj zgłoszenia" error={errors.requestType}>
          <select value={values.requestType} onChange={(e) => onChange('requestType', e.target.value as ContactType)} className="input">
            <option value="brakujacy_wniosek">Brakujący wniosek</option>
            <option value="brakujace_pismo">Brakujące pismo</option>
            <option value="brakujace_odwolanie">Brakujące odwołanie</option>
            <option value="inne">Inne</option>
          </select>
        </Field>
        <Field label="Nazwa poszukiwanego dokumentu (opcjonalnie)" error={errors.missingDocumentName}>
          <input value={values.missingDocumentName} onChange={(e) => onChange('missingDocumentName', e.target.value)} className="input" />
        </Field>
      </div>

      <Field label="Opis wiadomości" error={errors.message}>
        <textarea rows={5} value={values.message} onChange={(e) => onChange('message', e.target.value)} className="input" />
      </Field>

      <label className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
        <input
          type="checkbox"
          checked={values.contactConsent}
          onChange={(e) => onChange('contactConsent', e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300"
        />
        Wyrażam zgodę na kontakt zwrotny w sprawie zgłoszenia.
      </label>
      {errors.contactConsent && <p className="text-xs text-rose-600">{errors.contactConsent}</p>}

      {statusMessage && (
        <p
          className={`rounded-lg px-4 py-3 text-sm ${
            statusType === 'success'
              ? 'border border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300'
              : 'border border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300'
          }`}
        >
          {statusMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900"
      >
        {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
      </button>

      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
        Uwaga: Serwis nie udziela porad prawnych. Formularz służy wyłącznie do zgłoszeń formalnych i pytań dotyczących dostępności wzorów dokumentów.
      </p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-rose-600">{error}</span>}
    </label>
  );
}
