import { getDocumentBySlug } from '@/lib/data/documents';

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const document = getDocumentBySlug(params.slug);

  if (!document) {
    return new Response('Nie znaleziono dokumentu.', { status: 404 });
  }

  return new Response(document.content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `attachment; filename="${document.slug}.txt"`
    }
  });
}
