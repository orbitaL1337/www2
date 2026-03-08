import Link from 'next/link';
import { DocumentItem, categoryLabels } from '@/lib/data/documents';
import { DownloadButton } from './download-button';

export function DocumentCard({ document }: { document: DocumentItem }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {categoryLabels[document.category]}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">Popularność: {document.popularity}</span>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{document.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{document.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {document.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-400">
            #{tag}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-2">
        <DownloadButton
          slug={document.slug}
          title={document.title}
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
        />
        <Link
          href={`/documents/${document.slug}`}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Zobacz szczegóły
        </Link>
      </div>
    </article>
  );
}
