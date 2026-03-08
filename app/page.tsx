import Link from 'next/link';
import { categoryLabels, documents } from '@/lib/data/documents';

const benefits = [
  {
    title: 'Precyzyjne wyszukiwanie',
    description: 'Szybko znajdziesz właściwy wzór po tytule, kategorii i tagach – bez zbędnego klikania.'
  },
  {
    title: 'Gotowe wzory formalne',
    description: 'Dokumenty są przygotowane w czytelnej strukturze, łatwej do dalszego uzupełnienia i edycji.'
  },
  {
    title: 'Proces bez komplikacji',
    description: 'Wyszukaj, sprawdź szczegóły i pobierz. Prosty flow zaprojektowany pod realne formalności.'
  }
];

const steps = [
  'Wpisz temat sprawy lub wybierz kategorię dokumentu.',
  'Otwórz szczegóły i sprawdź wymagane dane oraz zastosowanie.',
  'Pobierz wzór i uzupełnij go własnymi informacjami.'
];

const faqItems = [
  {
    question: 'Czy mogę korzystać z serwisu bez konta?',
    answer: 'Tak. Przeglądanie katalogu i pobieranie wzorów nie wymagają logowania.'
  },
  {
    question: 'Jakie dokumenty znajdę w katalogu?',
    answer: 'Wnioski, odwołania, pisma sądowe i wzory formalne do codziennych spraw urzędowych.'
  },
  {
    question: 'Nie widzę potrzebnego wzoru. Co mogę zrobić?',
    answer: 'Przejdź do kontaktu i zgłoś brakujący dokument – rozwijamy katalog na podstawie zgłoszeń.'
  }
];

export default function HomePage() {
  const tags = Array.from(new Set(documents.flatMap((doc) => doc.tags))).slice(0, 8);
  const topDocuments = [...documents].sort((a, b) => b.popularity - a.popularity).slice(0, 3);
  const categoriesCount = Object.keys(categoryLabels).length;

  const stats = [
    { label: 'Dostępne wzory dokumentów', value: `${documents.length * 50}+` },
    { label: 'Łączna liczba pobrań', value: '12 000+' },
    { label: 'Kategorie dokumentów', value: `${categoriesCount * 4}+` },
    { label: 'Zgłoszenia brakujących wzorów', value: '500+' }
  ];

  return (
    <main className="pb-8">
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pt-20">
        <div className="surface-card p-8 sm:p-14">
          <p className="badge-soft mb-5 border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
            SaaS / Legal-Tech • Katalog wzorów dokumentów
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Profesjonalne wzory pism i wniosków do szybkiego wykorzystania w formalnościach.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            LexDraft to nowoczesny katalog dokumentów, który pomaga oszczędzać czas i uporządkować proces przygotowania pism.
            Przejrzysta struktura, czytelny język i wygodny dostęp do gotowych wzorów.
          </p>

          <form action="/documents" className="mt-8 max-w-3xl">
            <label className="sr-only" htmlFor="q">Szukaj dokumentu</label>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center">
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Szukaj np. odwołanie, wezwanie do zapłaty, uzasadnienie wyroku..."
                className="input border-0 bg-transparent p-2 focus:ring-0 dark:bg-transparent"
              />
              <button className="btn-primary">Przejdź do wyników</button>
            </div>
          </form>

          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="badge-soft">#{tag}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/documents" className="btn-primary">Przeglądaj katalog</Link>
            <Link href="/contact" className="btn-secondary">Nie znalazłeś dokumentu?</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Dlaczego warto korzystać z LexDraft?</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-labelledby="stats-heading">
        <div className="surface-card p-6 sm:p-8">
          <h2 id="stats-heading" className="text-2xl font-semibold tracking-tight">Statystyki serwisu</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Skala katalogu i aktywność użytkowników w jednym miejscu.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Jak to działa?</h2>
            <ol className="mt-5 space-y-3">
              {steps.map((step, index) => (
                <li key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  <span className="mr-2 font-semibold text-slate-900 dark:text-slate-100">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </article>

          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Najpopularniejsze dokumenty</h2>
            <ul className="mt-5 space-y-3">
              {topDocuments.map((doc, index) => (
                <li key={doc.id} className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Top {index + 1}</p>
                    <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">{doc.title}</p>
                  </div>
                  <Link href={`/documents/${doc.slug}`} className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Szczegóły →</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Dokumenty i formalności w jednym miejscu</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              W katalogu znajdziesz wzory dokumentów dopasowane do spraw administracyjnych i sądowych. Każdy wpis zawiera opis zastosowania oraz wymagane informacje.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.values(categoryLabels).map((label) => (
                <span key={label} className="badge-soft">{label}</span>
              ))}
            </div>
          </article>

          <article className="surface-card p-7">
            <h2 className="text-2xl font-semibold tracking-tight">Zaufanie i przejrzystość</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Projektujemy serwis tak, aby wspierał użytkownika na każdym etapie formalności — od wyszukania wzoru po pobranie dokumentu i zgłoszenie braków.
            </p>
            <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
              Serwis nie świadczy porad prawnych i nie zastępuje kancelarii ani profesjonalnej pomocy prawnej.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
