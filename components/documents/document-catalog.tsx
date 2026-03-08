'use client';

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
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title, 'pl');
      }

      if (sortBy === 'date') {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }

      return b.popularity - a.popularity;
    });
  }, [query, category, sortBy]);

  return (
    <section className="space-y-6" aria-labelledby="documents-title">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <h1 id="documents-title" className="text-2xl font-semibold tracking-tight">
          Katalog dokumentów
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Wyszukuj gotowe wzory pism i pobieraj je natychmiast.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <label className="md:col-span-2">
            <span className="mb-1 block text-sm font-medium">Szukaj po tytule, kategorii, tagach i typie</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Np. odwołanie, nakaz zapłaty, urząd..."
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"
            />
          </label>

          <label>
            <span className="mb-1 block text-sm font-medium">Kategoria</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value as 'all' | DocumentCategory)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"
            >
              <option value="all">Wszystkie</option>
              {Object.entries(categoryLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-1 block text-sm font-medium">Sortowanie</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortKey)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"
            >
              <option value="popularity">Po popularności</option>
              <option value="date">Po dacie aktualizacji</option>
              <option value="alphabetical">Alfabetycznie</option>
            </select>
          </label>
        </div>
      </div>

      {filteredDocuments.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredDocuments.map((document) => (
            <DocumentCard key={document.id} document={document} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
          Brak wyników dla podanych kryteriów. Zmień frazę wyszukiwania lub filtr kategorii.
        </div>
      )}
    </section>
  );
}
