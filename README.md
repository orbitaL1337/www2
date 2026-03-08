# LexDraft – Usługa pisania pism i katalog wzorów

Nowoczesny projekt legal-tech w Next.js, który łączy:
- usługę wsparcia formalnego i redakcyjnego przy pismach/wnioskach,
- katalog gotowych wzorów dokumentów,
- szybki kontakt i zgłaszanie brakujących dokumentów.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Lokalna baza danych w kodzie (`lib/data/documents.ts`)
- Brak logowania, brak bazy zewnętrznej, brak API zewnętrznych

## Najważniejsze funkcje
- Landing page w stylu premium SaaS / legal-tech z ofertą biznesową
- Sekcje: oferta, proces współpracy, statystyki, zaufanie, FAQ (accordion)
- Katalog dokumentów z wyszukiwarką, filtrami i sortowaniem
- Strona szczegółów dokumentu (zastosowanie, wymagane dane, podgląd)
- Pobieranie dokumentu jako plik `.txt`
- Formularz kontaktowy do zapytań ofertowych i brakujących wzorów
- Czytelna informacja formalna: brak porad prawnych
- Dark/light mode z zapisem preferencji w `localStorage`

## Struktura projektu
- `app/page.tsx` – biznesowy landing + sekcje marketingowe
- `app/documents/page.tsx` – katalog dokumentów
- `app/documents/[slug]/page.tsx` – szczegóły dokumentu
- `app/download/[slug]/route.ts` – endpoint pobierania pliku `.txt`
- `app/contact/page.tsx` – formularz zapytań
- `app/api/contact/route.ts` – lekki endpoint do obsługi formularza
- `lib/data/documents.ts` – lokalne dane i modele dokumentów
- `components/documents/*` – komponenty katalogu, kart i pobierania
- `components/faq-accordion.tsx` – interaktywny FAQ accordion

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

## Uwaga prawna
Serwis nie świadczy porad prawnych i nie zastępuje profesjonalnej pomocy prawnej (adwokata/radcy prawnego). Wsparcie dotyczy formalności, organizacji i redakcji treści dokumentów.
