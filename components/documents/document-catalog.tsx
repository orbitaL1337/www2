'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { documents, categoryLabels, DocumentCategory } from '@/lib/data/documents';
import { DocumentCard } from './document-card';

type SortKey = 'alphabetical' | 'popularity' | 'date';

type DocumentCatalogProps = {
  initialQuery?: string;
};

export function DocumentCatalog({ initialQuery = '' }: DocumentCatalogProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<'all' | DocumentCategory>('all');
  const [sortBy, setSortBy] = useState<SortKey>('popularity');

  const filteredDocuments = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = documents.filter((document) => {
      const matchesCategory = category === 'all' || document.category === category;
      const matchesQuery =
        !normalizedQuery ||
        document.title.toLowerCase().includes(normalizedQuery) ||
        document.category.toLowerCase().includes(normalizedQuery) ||
        document.type.toLowerCase().includes(normalizedQuery) ||
        document.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });

    return result.sort((a, b) => {
      if (sortBy === 'alphabetical') return a.title.localeCompare(b.title, 'pl');
      if (sortBy === 'date') return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      return b.popularity - a.popularity;
    });
  }, [query, category, sortBy]);

  return (
    <section className="space-y-6" aria-labelledby="documents-title">
      <div className="surface-card p-5 sm:p-6">
        <h2 id="documents-title" className="text-2xl font-semibold tracking-tight">Wyszukiwarka dokumentów</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Filtruj katalog i znajdź właściwy wzór w kilka chwil.</p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-medium">Szukaj po tytule, kategorii, tagach i typie</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Np. odwołanie, nakaz zapłaty, urząd..."
              className="input"
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-medium">Kategoria</span>
            <select value={category} onChange={(event) => setCategory(event.target.value as 'all' | DocumentCategory)} className="input">
              <option value="all">Wszystkie</option>
              {Object.entries(categoryLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-sm font-medium">Sortowanie</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortKey)} className="input">
              <option value="popularity">Po popularności</option>
              <option value="date">Po dacie aktualizacji</option>
              <option value="alphabetical">Alfabetycznie</option>
            </select>
          </label>
        </div>
      </div>

      {filteredDocuments.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredDocuments.map((document) => (
            <DocumentCard key={document.id} document={document} />
          ))}
        </div>
      ) : (
        <div className="surface-card border-dashed p-10 text-center text-slate-500 dark:text-slate-400">
          <p className="text-base font-medium text-slate-700 dark:text-slate-200">Brak wyników dla podanych kryteriów.</p>
          <p className="mt-2 text-sm">Nie znalazłeś potrzebnego wniosku lub pisma? Zgłoś brakujący dokument.</p>
          <Link href="/contact" className="btn-primary mt-5">
            Zgłoś brakujący dokument
          </Link>
        </div>
      )}
    </section>
  );
}
