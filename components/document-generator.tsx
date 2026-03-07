'use client';

import { useMemo, useState } from 'react';
import { DocumentType, GeneratorForm, generateDocumentContent } from '@/lib/templates';

type Errors = Partial<Record<keyof GeneratorForm, string>>;

const initialValues: GeneratorForm = {
  documentType: 'wniosek',
  title: '',
  fullName: '',
  address: '',
  institution: '',
  caseNumber: '',
  city: '',
  date: new Date().toISOString().split('T')[0],
  mainContent: '',
  justification: '',
  attachments: ''
};

const typeLabel: Record<DocumentType, string> = {
  wniosek: 'Wniosek',
  pismo_sadowe: 'Pismo sądowe',
  odwolanie: 'Odwołanie'
};

export function DocumentGenerator() {
  const [values, setValues] = useState<GeneratorForm>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const hasDocument = useMemo(() => generatedContent.trim().length > 0, [generatedContent]);

  const validate = () => {
    const nextErrors: Errors = {};
    const required: Array<keyof GeneratorForm> = [
      'title',
      'fullName',
      'address',
      'institution',
      'city',
      'date',
      'mainContent',
      'justification'
    ];

    required.forEach((field) => {
      if (!values[field].trim()) {
        nextErrors[field] = 'To pole jest wymagane.';
      }
    });

    if (values.mainContent.trim().length < 30) {
      nextErrors.mainContent = 'Treść główna powinna mieć co najmniej 30 znaków.';
    }

    if (values.justification.trim().length < 30) {
      nextErrors.justification = 'Uzasadnienie powinno mieć co najmniej 30 znaków.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onGenerate = () => {
    if (!validate()) {
      return;
    }

    setIsGenerating(true);
    window.setTimeout(() => {
      setGeneratedContent(generateDocumentContent(values));
      localStorage.setItem('document-draft', JSON.stringify(values));
      setIsGenerating(false);
    }, 200);
  };

  const onChange = <K extends keyof GeneratorForm>(key: K, value: GeneratorForm[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <main className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
      <section className="no-print rounded-3xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-8" aria-labelledby="generator-title">
        <h1 id="generator-title" className="text-2xl font-semibold tracking-tight">
          Generator dokumentu
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Wypełnij formularz, wygeneruj treść i dopracuj dokument przed wydrukiem.</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label="Typ dokumentu" error={errors.documentType}>
            <select
              value={values.documentType}
              onChange={(e) => onChange('documentType', e.target.value as DocumentType)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"
            >
              {Object.entries(typeLabel).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </Field>

          <Input label="Tytuł" value={values.title} onChange={(v) => onChange('title', v)} error={errors.title} />
          <Input label="Imię i nazwisko" value={values.fullName} onChange={(v) => onChange('fullName', v)} error={errors.fullName} />
          <Input label="Adres" value={values.address} onChange={(v) => onChange('address', v)} error={errors.address} />
          <Input label="Nazwa sądu / urzędu / instytucji" value={values.institution} onChange={(v) => onChange('institution', v)} error={errors.institution} />
          <Input label="Sygnatura sprawy" value={values.caseNumber} onChange={(v) => onChange('caseNumber', v)} error={errors.caseNumber} />

          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Miejscowość" value={values.city} onChange={(v) => onChange('city', v)} error={errors.city} />
            <Input label="Data" type="date" value={values.date} onChange={(v) => onChange('date', v)} error={errors.date} />
          </div>

          <TextArea label="Treść główna" value={values.mainContent} onChange={(v) => onChange('mainContent', v)} error={errors.mainContent} />
          <TextArea label="Uzasadnienie" value={values.justification} onChange={(v) => onChange('justification', v)} error={errors.justification} />
          <TextArea label="Załączniki" value={values.attachments} onChange={(v) => onChange('attachments', v)} error={errors.attachments} />

          <button
            type="button"
            onClick={onGenerate}
            disabled={isGenerating}
            className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            {isGenerating ? 'Generowanie...' : 'Generuj pismo'}
          </button>
        </form>
      </section>

      <section aria-live="polite" className="space-y-4">
        <div className="no-print flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold">Podgląd dokumentu</h2>
          <div className="flex gap-2">
            <button type="button" onClick={() => window.print()} disabled={!hasDocument} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800">
              Drukuj
            </button>
            <button type="button" onClick={() => window.print()} disabled={!hasDocument} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50">
              Pobierz jako PDF
            </button>
          </div>
        </div>

        <article className="print-sheet min-h-[297mm] w-full rounded-2xl border border-slate-200 bg-white p-8 text-[15px] leading-7 text-slate-900 shadow-card dark:border-slate-800 dark:bg-white">
          {hasDocument ? (
            <textarea
              aria-label="Edytor wygenerowanego dokumentu"
              value={generatedContent}
              onChange={(e) => setGeneratedContent(e.target.value)}
              className="no-print mb-4 min-h-52 w-full rounded-xl border border-slate-300 p-3 text-sm"
            />
          ) : (
            <div className="no-print flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
              Po wygenerowaniu dokumentu tutaj zobaczysz podgląd gotowego pisma A4.
            </div>
          )}

          <pre className="whitespace-pre-wrap font-serif text-[15px] leading-7">{generatedContent || 'Brak wygenerowanego dokumentu.'}</pre>
        </article>
      </section>
    </main>
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

function Input({ label, value, onChange, error, type = 'text' }: { label: string; value: string; onChange: (value: string) => void; error?: string; type?: string }) {
  return (
    <Field label={label} error={error}>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm transition focus:border-slate-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950"
      />
    </Field>
  );
}

function TextArea({ label, value, onChange, error }: { label: string; value: string; onChange: (value: string) => void; error?: string }) {
  return (
    <Field label={label} error={error}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm transition focus:border-slate-500 focus:outline-none dark:border-slate-700 dark:bg-slate-950"
      />
    </Field>
  );
}
