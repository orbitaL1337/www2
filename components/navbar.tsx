import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Główna nawigacja">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          LexDraft
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/documents"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Katalog dokumentów
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            Kontakt
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
