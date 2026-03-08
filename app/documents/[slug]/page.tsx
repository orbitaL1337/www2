import { notFound } from 'next/navigation';
import { getDocumentBySlug, categoryLabels } from '@/lib/data/documents';
import { DownloadButton } from '@/components/documents/download-button';

type DocumentDetailsPageProps = {
  params: { slug: string };
};

export function generateMetadata({ params }: DocumentDetailsPageProps) {
  const document = getDocumentBySlug(params.slug);

  if (!document) {
    return {
      title: 'Dokument nie znaleziony | LexDraft'
    };
  }

  return {
    title: `${document.title} | LexDraft`,
    description: document.description
  };
}

export default function DocumentDetailsPage({ params }: DocumentDetailsPageProps) {
  const document = getDocumentBySlug(params.slug);

  if (!document) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {categoryLabels[document.category]} • {document.type}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{document.title}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{document.description}</p>

        <dl className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-slate-700 dark:text-slate-300">Zastosowanie</dt>
            <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">{document.usage}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-slate-700 dark:text-slate-300">Kto może użyć</dt>
            <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">{document.audience}</dd>
          </div>
        </dl>

        <section className="mt-8">
          <h2 className="text-lg font-semibold">Wymagane dane</h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {document.requiredData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
          <h2 className="text-lg font-semibold">Podgląd treści wzoru</h2>
          <pre className="mt-3 whitespace-pre-wrap font-serif text-sm leading-6 text-slate-700 dark:text-slate-300">{document.content}</pre>
        </section>

        <div className="mt-8">
          <DownloadButton
            slug={document.slug}
            title={document.title}
            className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
          />
        </div>
      </article>
    </main>
  );
}
