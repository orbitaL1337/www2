import Link from 'next/link';
import { FaqAccordion } from '@/components/faq-accordion';
import { categoryLabels, documents } from '@/lib/data/documents';

const benefits = [
  {
    title: 'Inteligentne wyszukiwanie wzorów',
    description: 'Szybko odnajdujesz właściwe pismo po tytule, kategorii i tagach. Bez chaosu i bez zgadywania.'
  },
  {
    title: 'Jasna struktura formalności',
    description: 'Każdy dokument ma opis zastosowania, wymagane dane oraz podgląd treści, który ułatwia podjęcie decyzji.'
  },
  {
    title: 'Gotowość do działania od razu',
    description: 'Pobierasz gotowy wzór i uzupełniasz go swoimi danymi. Prosto, szybko i bez zbędnych kroków.'
  }
];

const steps = [
  {
    title: 'Wyszukaj dokument',
    description: 'Wpisz temat sprawy albo użyj filtrów, aby zawęzić katalog do najbardziej trafnych wyników.'
  },
  {
    title: 'Sprawdź szczegóły',
    description: 'Przeczytaj opis zastosowania, wymagane dane i podgląd wzoru przed pobraniem dokumentu.'
  },
  {
    title: 'Pobierz i uzupełnij',
    description: 'Pobierz dokument jednym kliknięciem i dostosuj treść do własnej sytuacji formalnej.'
  }
];

const trustPillars = [
  'Spójna prezentacja dokumentów i kategorii',
  'Przejrzysty proces od wyszukania do pobrania',
  'Rozwój katalogu oparty o potrzeby użytkowników',
  'Nowoczesny, dostępny interfejs mobile i desktop'
];

const faqItems = [
  {
    question: 'Czy potrzebuję konta, żeby pobrać dokument?',
    answer: 'Nie. Katalog dokumentów i pobieranie wzorów są dostępne bez logowania i bez rejestracji.'
  },
  {
    question: 'Czy serwis udziela porad prawnych?',
    answer:
      'Nie. LexDraft udostępnia materiały formalne i organizacyjne. W sprawach wymagających interpretacji prawa skonsultuj się z profesjonalnym pełnomocnikiem.'
  },
  {
    question: 'Co zrobić, jeśli nie ma dokumentu, którego potrzebuję?',
    answer: 'Przejdź do formularza kontaktowego i zgłoś brakujący wzór. To najskuteczniejsza droga do rozwoju katalogu.'
  },
  {
    question: 'Czy dokumenty można edytować po pobraniu?',
    answer: 'Tak. Pliki są pobierane w formacie tekstowym i możesz je swobodnie edytować zgodnie z potrzebą.'
  }
];

export default function HomePage() {
  const tags = Array.from(new Set(documents.flatMap((doc) => doc.tags))).slice(0, 8);
  const topDocuments = [...documents].sort((a, b) => b.popularity - a.popularity).slice(0, 3);
  const categoriesCount = Object.keys(categoryLabels).length;

  const stats = [
    { label: 'Wzory dokumentów', value: `${documents.length * 50}+` },
    { label: 'Pobrań rocznie', value: '12 000+' },
    { label: 'Kategorie formalności', value: `${categoriesCount * 4}+` },
    { label: 'Zgłoszenia użytkowników', value: '500+' }
  ];

  return (
    <main className="pb-12">
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20">
        <div className="surface-card relative overflow-hidden p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-indigo-500/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full bg-cyan-500/10 blur-2xl" aria-hidden />

          <p className="badge-soft mb-5 border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
            LexDraft • Premium Legal-Tech
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Profesjonalna platforma do wyszukiwania i pobierania wzorów pism oraz dokumentów formalnych.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Zaprojektowana jak nowoczesny produkt SaaS: przejrzysty katalog, szybkie wyszukiwanie, czytelne szczegóły i gotowe wzory do natychmiastowego użycia.
          </p>

          <form action="/documents" className="mt-8 max-w-3xl">
            <label className="sr-only" htmlFor="q">Szukaj dokumentu</label>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center">
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Szukaj np. odwołanie, wniosek o uzasadnienie, wezwanie do zapłaty..."
                className="input border-0 bg-transparent p-2 focus:ring-0 dark:bg-transparent"
              />
              <button className="btn-primary">Przejdź do katalogu</button>
            </div>
          </form>

          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="badge-soft">#{tag}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/documents" className="btn-primary">Przeglądaj dokumenty</Link>
            <Link href="/contact" className="btn-secondary">Zgłoś brakujący wzór</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6" aria-label="Korzyści">
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.title} className="surface-card p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-card">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-labelledby="stats-heading">
        <div className="surface-card p-6 sm:p-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 id="stats-heading" className="text-2xl font-semibold tracking-tight">Statystyki platformy</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Skala katalogu i aktywność użytkowników widoczna na pierwszy rzut oka.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <h2 className="text-2xl font-semibold tracking-tight">Jak działa LexDraft?</h2>
          <ol className="mt-5 space-y-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{index + 1}. {step.title}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
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
          <h2 className="text-2xl font-semibold tracking-tight">Dlaczego warto nam zaufać?</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            {trustPillars.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
            Serwis nie świadczy porad prawnych i nie zastępuje profesjonalnej pomocy prawnej. Materiały mają charakter informacyjny i formalny.
          </p>
        </article>

        <article className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Dokumenty i kategorie</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Katalog obejmuje wnioski, odwołania, pisma sądowe i dokumenty urzędowe. Każda kategoria została opisana i uporządkowana z myślą o szybkim odnajdywaniu właściwych wzorów.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {Object.values(categoryLabels).map((label) => (
              <span key={label} className="badge-soft">{label}</span>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/documents" className="btn-secondary">Zobacz pełny katalog</Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="surface-card p-7">
          <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Najczęściej zadawane pytania dotyczące działania platformy.</p>
          <div className="mt-5">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </main>
  );
}
