import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70 py-8 dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-semibold text-slate-800 dark:text-slate-200">LexDraft</p>
          <div className="flex gap-4 text-slate-600 dark:text-slate-400">
            <Link href="/documents" className="hover:text-slate-900 dark:hover:text-slate-100">
              Katalog dokumentów
            </Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100">
              Kontakt
            </Link>
          </div>
        </div>

        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          Serwis nie świadczy porad prawnych i nie zastępuje profesjonalnej pomocy prawnej (adwokata lub radcy prawnego).
          Udostępniane treści mają charakter informacyjny i formalny, a nie doradczy.
        </p>
      </div>
    </footer>
  );
}
