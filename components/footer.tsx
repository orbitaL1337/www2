import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-gradient-to-b from-white to-slate-100 py-12 dark:border-slate-800 dark:from-slate-950 dark:to-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6">
        <section>
          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">LexDraft • Usługa pism i wniosków</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-400">
            Pomagamy przygotować treści formalne i organizujemy proces dokumentowy. Dodatkowo udostępniamy katalog gotowych wzorów do samodzielnego użycia.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="badge-soft">Szybki kontakt</span>
            <span className="badge-soft">Wsparcie formalne</span>
            <span className="badge-soft">Katalog wzorów</span>
          </div>
        </section>

        <section className="sm:justify-self-end">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-slate-100">Nawigacja</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><Link href="/" className="hover:text-slate-900 dark:hover:text-slate-100">Strona główna</Link></li>
            <li><Link href="/#oferta" className="hover:text-slate-900 dark:hover:text-slate-100">Oferta</Link></li>
            <li><Link href="/documents" className="hover:text-slate-900 dark:hover:text-slate-100">Katalog dokumentów</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100">Kontakt</Link></li>
          </ul>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">E-mail: kontakt@lexdraft.local</p>
        </section>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl px-4 sm:px-6">
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          Serwis nie świadczy porad prawnych i nie zastępuje kancelarii ani profesjonalnej pomocy prawnej (adwokata lub radcy prawnego).
          Wsparcie dotyczy formalności, organizacji procesu dokumentowego i redakcji treści.
        </p>
      </div>
    </footer>
  );
}
