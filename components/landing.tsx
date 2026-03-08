import Link from 'next/link';

const items = ['Wniosek', 'Pismo sądowe', 'Odwołanie'];
const benefits = [
  'Szybkie tworzenie formalnych dokumentów po polsku',
  'Podgląd A4 i gotowość do druku/PDF bez dodatkowych narzędzi',
  'Brak logowania, brak bazy danych, pełna lokalność działania'
];

export function Landing() {
  return (
    <main>
      <section className="no-print mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-100 p-8 shadow-card dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-14">
          <p className="mb-4 inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
            Legal-Tech • Bez backendu
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Twórz polskie pisma urzędowe i sądowe w kilka minut.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Prosty formularz, gotowy szablon, edycja treści i natychmiastowy druk/PDF z poziomu przeglądarki.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/generator" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white">
              Utwórz pismo
            </Link>
            <a href="#rodzaje" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900">
              Zobacz rodzaje dokumentów
            </a>
          </div>
        </div>
      </section>

      <section id="rodzaje" className="no-print mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Rodzaje dokumentów</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Profesjonalny szablon gotowy do personalizacji i wydruku.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="no-print mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Korzyści</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              {benefit}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
