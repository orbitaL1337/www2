import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Główna nawigacja">
        <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" aria-hidden />
          LexDraft
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/#oferta" className="btn-secondary px-4 py-2 text-sm">
            Oferta
          </Link>
          <Link href="/documents" className="btn-secondary px-4 py-2 text-sm">
            Wzory
          </Link>
          <Link href="/contact" className="btn-primary px-4 py-2 text-sm">
            Kontakt
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
