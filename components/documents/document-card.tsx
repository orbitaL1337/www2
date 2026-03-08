import Link from 'next/link';
import { DocumentItem, categoryLabels } from '@/lib/data/documents';
import { DownloadButton } from './download-button';

export function DocumentCard({ document }: { document: DocumentItem }) {
  return (
    <article className="surface-card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-card">
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="badge-soft">{categoryLabels[document.category]}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">Popularność: {document.popularity}</span>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{document.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{document.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {document.tags.map((tag) => (
          <li key={tag} className="badge-soft text-[11px] font-medium">#{tag}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        <DownloadButton slug={document.slug} title={document.title} className="btn-primary" />
        <Link href={`/documents/${document.slug}`} className="btn-secondary">
          Zobacz szczegóły
        </Link>
      </div>
    </article>
  );
}
