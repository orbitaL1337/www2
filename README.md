# LexDraft – Generator polskich pism

Lekka, szybka aplikacja webowa w Next.js (App Router) do tworzenia i drukowania:
- wniosków,
- pism sądowych,
- odwołań.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Bez backendu, bez logowania, bez bazy danych i bez zewnętrznych API

## Funkcje
- Landing page (hero, korzyści, CTA)
- Generator dokumentów z walidacją formularza
- Wbudowane szablony dokumentów po polsku
- Edycja wygenerowanej treści
- Podgląd dokumentu A4
- Druk/PDF przez `window.print()` i `@media print`
- Dark/light mode z zapisem preferencji w `localStorage`

## Uruchomienie lokalnie
1. `npm install`
2. `npm run dev`
3. Otwórz `http://localhost:3000`

## Build produkcyjny
1. `npm run build`
2. `npm run start`

## Deployment na Vercelu
1. Wypchnij repozytorium na GitHub/GitLab/Bitbucket.
2. Zaloguj się do Vercel i wybierz **New Project**.
3. Wskaż repozytorium i kliknij **Deploy**.
4. Bez dodatkowych zmiennych środowiskowych – aplikacja działa „out of the box”.

## Architektura (skrót)
- Cała logika generowania dokumentu jest po stronie klienta (`components/document-generator.tsx`, `lib/templates.ts`).
- Brak zewnętrznych usług i trwałej bazy: dane formularza są trzymane w stanie komponentu.
- Styl wydruku i PDF realizowany przez CSS (`@media print`) i funkcję `window.print()`.
