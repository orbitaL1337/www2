import { DocumentCatalog } from '@/components/documents/document-catalog';

export const metadata = {
  title: 'Katalog dokumentów | LexDraft',
  description: 'Wyszukiwarka i katalog gotowych wzorów wniosków, pism sądowych i odwołań.'
};

export default function DocumentsPage({
  searchParams
}: {
  searchParams: { q?: string };
}) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <DocumentCatalog initialQuery={searchParams.q ?? ''} />
    </main>
  );
}
