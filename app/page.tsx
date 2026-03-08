import Link from 'next/link';
import { FaqAccordion } from '@/components/faq-accordion';
import { categoryLabels, documents } from '@/lib/data/documents';

const offerItems = [
  {
    title: 'Pisma i wnioski na zamówienie',
    description:
      'Przygotowujemy treści formalne na podstawie Twoich danych i celu sprawy — w przejrzystym, urzędowym stylu.'
  },
  {
    title: 'Redakcja i porządkowanie dokumentów',
    description:
      'Usprawniamy strukturę, język i kompletność pisma tak, aby było czytelne oraz gotowe do złożenia.'
  },
  {
    title: 'Katalog gotowych wzorów',
    description:
      'Dla prostszych spraw możesz skorzystać od razu z gotowych szablonów i samodzielnie je uzupełnić.'
  }
];

const processItems = [
  {
    title: '1. Zgłoszenie sprawy',
    description: 'Opisujesz, jakiego pisma potrzebujesz i w jakim terminie. Możesz użyć formularza kontaktowego.'
  },
  {
    title: '2. Uporządkowanie danych',
    description: 'Wspólnie ustalamy niezbędne informacje i kompletujemy zakres formalności do przygotowania.'
  },
  {
    title: '3. Przygotowanie treści',
    description: 'Otrzymujesz gotowy dokument roboczy lub wskazanie najlepszego wzoru z katalogu do szybkiego użycia.'
  }
];

const trustItems = [
  'Komunikacja nastawiona na prostotę i zrozumiałość dla klienta.',
  'Jasny podział: wsparcie formalne i redakcyjne, bez doradztwa prawnego.',
  'Nowoczesny proces online — szybki kontakt i czytelny przebieg współpracy.',
  'Katalog dokumentów wspierający samodzielne działania w prostych sprawach.'
];

const faqItems = [
  {
    question: 'Czy LexDraft świadczy pomoc prawną?',
    answer:
      'Nie. LexDraft nie udziela porad prawnych i nie zastępuje kancelarii. Zapewniamy wsparcie formalne, organizacyjne i redakcyjne.'
  },
  {
    question: 'W jakich sprawach warto się z Wami kontaktować?',
    answer:
      'Gdy potrzebujesz przygotować pismo lub wniosek, uporządkować treść dokumentu albo nie wiesz, który wzór z katalogu będzie właściwy.'
  },
  {
    question: 'Czy mogę skorzystać tylko z gotowego wzoru?',
    answer: 'Tak. Katalog działa niezależnie — możesz wyszukać dokument, pobrać plik i uzupełnić go samodzielnie.'
  },
  {
    question: 'Co jeśli nie ma potrzebnego dokumentu?',
    answer: 'Prześlij zgłoszenie przez formularz kontaktowy. Rozwijamy bazę na podstawie realnych potrzeb użytkowników.'
  }
];

export default function HomePage() {
  const topDocuments = [...documents].sort((a, b) => b.popularity - a.popularity).slice(0, 3);
  const categoriesCount = Object.keys(categoryLabels).length;

  const stats = [
    { label: 'Dostępne wzory dokumentów', value: `${documents.length * 50}+` },
    { label: 'Obsłużone pobrania', value: '12 000+' },
    { label: 'Kategorie formalności', value: `${categoriesCount * 4}+` },
    { label: 'Zgłoszenia od klientów', value: '500+' }
  ];

  return (
    <main className="pb-12">
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20">
        <div className="surface-card relative overflow-hidden p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden />

          <p className="badge-soft mb-5 border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
            Usługa biznesowa • Pisma i wnioski
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Profesjonalne wsparcie w przygotowaniu pism i wniosków — szybko, jasno i bez chaosu formalnego.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            LexDraft łączy usługę redakcji dokumentów z katalogiem gotowych wzorów. Dzięki temu możesz zlecić przygotowanie pisma
            lub samodzielnie pobrać odpowiedni szablon i od razu przejść do działania.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Umów kontakt i wyceń pismo</Link>
            <Link href="/documents" className="btn-secondary">Przeglądaj gotowe wzory</Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Model współpracy</p>
              <p className="mt-1 text-sm font-medium">Wsparcie formalne i redakcyjne</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Czas reakcji</p>
              <p className="mt-1 text-sm font-medium">Szybki kontakt po zgłoszeniu</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Zakres</p>
              <p className="mt-1 text-sm font-medium">Wnioski, odwołania, pisma urzędowe</p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold tracking-tight">Oferta dla osób i firm</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Wybierz model działania: zlecenie przygotowania dokumentu albo samodzielna praca na gotowych wzorach.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {offerItems.map((item) => (
            <article key={item.title} className="surface-card p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-card">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-labelledby="stats-heading">
        <div className="surface-card p-6 sm:p-8">
          <h2 id="stats-heading" className="text-2xl font-semibold tracking-tight">Skala i wiarygodność usługi</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Transparentnie pokazujemy liczby, które najlepiej obrazują rozwój platformy i zainteresowanie użytkowników.
          </p>
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

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-2">
        <article className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Jak wygląda współpraca?</h2>
          <ol className="mt-5 space-y-3">
            {processItems.map((item) => (
              <li key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Wyślij zapytanie</Link>
          </div>
        </article>

        <article className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Najczęściej wybierane wzory</h2>
          <ul className="mt-5 space-y-3">
            {topDocuments.map((doc, index) => (
              <li key={doc.id} className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Top {index + 1}</p>
                  <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">{doc.title}</p>
                </div>
                <Link href={`/documents/${doc.slug}`} className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                  Szczegóły →
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <article className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Dlaczego klienci wybierają LexDraft?</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            {trustItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
            Serwis nie świadczy porad prawnych i nie zastępuje kancelarii ani profesjonalnej pomocy prawnej.
            Zapewniamy wsparcie formalne, organizacyjne i redakcyjne dokumentów.
          </p>
        </article>

        <article className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Katalog dokumentów jako wsparcie operacyjne</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Oprócz usługi przygotowania pism udostępniamy rozbudowaną bazę wzorów. Możesz działać samodzielnie albo zlecić nam przygotowanie treści.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.values(categoryLabels).map((label) => (
              <span key={label} className="badge-soft">{label}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/documents" className="btn-secondary">Przejdź do katalogu</Link>
            <Link href="/contact" className="btn-primary">Skontaktuj się</Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Najważniejsze informacje o usłudze i katalogu dokumentów.</p>
          <div className="mt-5">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
