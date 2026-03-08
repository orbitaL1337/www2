import { DocumentCatalog } from '@/components/documents/document-catalog';

export const metadata = {
  title: 'Katalog dokumentów | LexDraft',
  description: 'Wyszukiwarka i katalog gotowych wzorów wniosków, pism sądowych i odwołań.'
};

export default function DocumentsPage({ searchParams }: { searchParams: { q?: string } }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Katalog dokumentów</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-400">
          Wyszukuj wzory formalne po tytule, kategorii i słowach kluczowych. Przeglądaj szczegóły i pobieraj dokumenty w przejrzystym, profesjonalnym interfejsie.
        </p>
      </section>
      <DocumentCatalog initialQuery={searchParams.q ?? ''} />
    </main>
  );
}
