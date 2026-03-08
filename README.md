# LexDraft – Katalog gotowych dokumentów

Nowoczesna aplikacja webowa w Next.js do:
- wyszukiwania wzorów dokumentów,
- przeglądania ich szczegółów,
- pobierania gotowych plików `.txt`.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Lokalna baza danych w kodzie (`lib/data/documents.ts`)
- Brak logowania, brak bazy zewnętrznej, brak API zewnętrznych

## Najważniejsze funkcje
- Landing page z wyszukiwarką i CTA
- Katalog dokumentów z filtrami i sortowaniem
- Wyszukiwanie po tytule, kategorii, typie i tagach
- Strona szczegółów dokumentu (zastosowanie, grupa docelowa, wymagane dane)
- Pobieranie dokumentu jako plik `.txt`
- Dark/light mode z zapisem preferencji w `localStorage`

## Struktura projektu
- `app/page.tsx` – landing + szybkie wyszukiwanie
- `app/documents/page.tsx` – katalog dokumentów
- `app/documents/[slug]/page.tsx` – szczegóły dokumentu
- `app/download/[slug]/route.ts` – endpoint pobierania pliku `.txt`
- `lib/data/documents.ts` – lokalne dane i modele dokumentów
- `components/documents/*` – komponenty katalogu, kart i pobierania

## Uruchomienie lokalnie
1. `npm install`
2. `npm run dev`
3. Otwórz `http://localhost:3000`

## Build produkcyjny
1. `npm run build`
2. `npm run start`

## Deployment na Vercelu
1. Wypchnij repozytorium na GitHub/GitLab/Bitbucket.
2. W Vercel kliknij **New Project**.
3. Wybierz repozytorium i **Deploy**.
4. Brak dodatkowych ENV-ów — działa od razu.

## Przykładowe dokumenty
- Wniosek o wydanie odpisu
- Odwołanie od decyzji administracyjnej
- Wniosek o uzasadnienie wyroku
- Wezwanie do zapłaty
- Sprzeciw od nakazu zapłaty
