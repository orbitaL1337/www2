import Link from 'next/link';
import { documents } from '@/lib/data/documents';

export default function HomePage() {
  const tags = Array.from(new Set(documents.flatMap((doc) => doc.tags))).slice(0, 8);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pt-24">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-100 p-8 shadow-card dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-14">
          <p className="mb-4 inline-flex rounded-full border border-indigo-300 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:border-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
            Legal-Tech • Katalog gotowych wzorów
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Znajdź i pobierz gotowe pisma urzędowe oraz sądowe.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Wyszukuj dokumenty po kategoriach i słowach kluczowych, sprawdzaj szczegóły i pobieraj wzory w kilka sekund.
          </p>

          <form action="/documents" className="mt-8 max-w-2xl">
            <label className="sr-only" htmlFor="q">
              Szukaj dokumentu
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Szukaj np. odwołanie, wezwanie, uzasadnienie..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-950"
              />
              <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900">
                Szukaj
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300">
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/documents" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900">
              Przejdź do katalogu dokumentów
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Dlaczego warto?</h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          <li className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            Szybkie wyszukiwanie po tytule, kategorii i tagach.
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            Szczegóły dokumentu z listą wymaganych danych.
          </li>
          <li className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            Bez rejestracji, bez zewnętrznych usług, gotowe do Vercela.
          </li>
        </ul>
      </section>
    </main>
  );
}
