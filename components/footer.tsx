import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white to-slate-100 py-12 dark:border-slate-800 dark:from-slate-950 dark:to-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6">
        <section>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">LexDraft • Legal-Tech</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
            Profesjonalny katalog wzorów pism i dokumentów do spraw urzędowych oraz sądowych. Szybkie wyszukiwanie, czytelne szczegóły i wygodne pobieranie.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="badge-soft">Bez logowania</span>
            <span className="badge-soft">Szybkie pobieranie</span>
            <span className="badge-soft">Nowoczesny UX</span>
          </div>
        </section>

        <section className="sm:justify-self-end">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Nawigacja</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100">Strona główna</Link></li>
            <li><Link href="/documents" className="hover:text-slate-900 dark:hover:text-slate-100">Katalog dokumentów</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100">Zgłoś brakujący dokument</Link></li>
          </ul>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">Kontakt: kontakt@lexdraft.local</p>
        </section>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6">
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          Serwis nie świadczy porad prawnych i nie zastępuje profesjonalnej pomocy prawnej (adwokata lub radcy prawnego). Materiały mają charakter informacyjny i formalny.
        </p>
      </div>
    </footer>
  );
}
