export type DocumentCategory = 'wnioski' | 'odwolania' | 'pisma_sadowe' | 'urzedowe';

export type DocumentItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: DocumentCategory;
  type: string;
  tags: string[];
  popularity: number;
  updatedAt: string;
  usage: string;
  audience: string;
  requiredData: string[];
  content: string;
  format: 'txt';
};

export const documents: DocumentItem[] = [
  {
    id: 'doc-001',
    slug: 'wniosek-o-wydanie-odpisu',
    title: 'Wniosek o wydanie odpisu dokumentu',
    description: 'Wzór wniosku o wydanie urzędowego odpisu z akt sprawy lub rejestru.',
    category: 'wnioski',
    type: 'Wniosek',
    tags: ['odpis', 'urzad', 'akta'],
    popularity: 95,
    updatedAt: '2026-02-20',
    usage: 'Do uzyskania oficjalnego odpisu dokumentu z urzędu lub sądu.',
    audience: 'Osoba fizyczna, przedsiębiorca, pełnomocnik.',
    requiredData: ['Dane wnioskodawcy', 'Nazwa instytucji', 'Wskazanie dokumentu', 'Uzasadnienie wniosku'],
    content: `Wniosek o wydanie odpisu\n\nJa, niżej podpisany/a, zwracam się z uprzejmą prośbą o wydanie odpisu dokumentu wskazanego w niniejszym wniosku.\n\nDane wnioskodawcy:\n[Imię i nazwisko]\n[Adres]\n\nInstytucja:\n[Nazwa urzędu / sądu]\n\nWnoszę o wydanie odpisu:\n[Dokument / sygnatura]\n\nUzasadnienie:\n[Treść uzasadnienia]\n\nZałączniki:\n[Lista załączników]\n\n[Data i miejscowość]\n[Podpis]`,
    format: 'txt'
  },
  {
    id: 'doc-002',
    slug: 'odwolanie-od-decyzji-administracyjnej',
    title: 'Odwołanie od decyzji administracyjnej',
    description: 'Formalny wzór odwołania od decyzji organu administracji publicznej.',
    category: 'odwolania',
    type: 'Odwołanie',
    tags: ['decyzja', 'administracja', 'termin'],
    popularity: 88,
    updatedAt: '2026-02-12',
    usage: 'Gdy chcesz zakwestionować decyzję administracyjną w ustawowym terminie.',
    audience: 'Strona postępowania administracyjnego.',
    requiredData: ['Numer decyzji', 'Data doręczenia', 'Zakres zaskarżenia', 'Wnioski odwoławcze'],
    content: `Odwołanie od decyzji administracyjnej\n\nDziałając na podstawie Kodeksu postępowania administracyjnego, wnoszę odwołanie od decyzji nr [numer], doręczonej dnia [data].\n\nZakres odwołania:\n[Całość / część decyzji]\n\nZarzuty:\n[Opis naruszeń lub błędów]\n\nWnioski:\n[Uchylenie / zmiana decyzji]\n\nUzasadnienie:\n[Treść uzasadnienia]\n\n[Data i miejscowość]\n[Podpis]`,
    format: 'txt'
  },
  {
    id: 'doc-003',
    slug: 'wniosek-o-uzasadnienie-wyroku',
    title: 'Wniosek o uzasadnienie wyroku',
    description: 'Wzór do złożenia po ogłoszeniu wyroku w celu otrzymania uzasadnienia.',
    category: 'pisma_sadowe',
    type: 'Pismo sądowe',
    tags: ['wyrok', 'uzasadnienie', 'sad'],
    popularity: 80,
    updatedAt: '2026-01-28',
    usage: 'Po ogłoszeniu wyroku, aby uzyskać pisemne uzasadnienie rozstrzygnięcia.',
    audience: 'Strona postępowania sądowego lub pełnomocnik.',
    requiredData: ['Sygnatura akt', 'Data wyroku', 'Sąd i wydział', 'Dane strony'],
    content: `Wniosek o uzasadnienie wyroku\n\nWnoszę o sporządzenie i doręczenie uzasadnienia wyroku wydanego w sprawie o sygn. akt [sygnatura].\n\nSąd:\n[Nazwa sądu i wydziału]\n\nData wyroku:\n[Data]\n\nDane strony:\n[Imię i nazwisko / nazwa]\n\n[Data i miejscowość]\n[Podpis]`,
    format: 'txt'
  },
  {
    id: 'doc-004',
    slug: 'wezwanie-do-zaplaty',
    title: 'Wezwanie do zapłaty',
    description: 'Przedsądowe wezwanie do dobrowolnej zapłaty należności.',
    category: 'urzedowe',
    type: 'Pismo urzędowe',
    tags: ['platnosc', 'dlug', 'przedsadowe'],
    popularity: 92,
    updatedAt: '2026-02-25',
    usage: 'Przed skierowaniem sprawy do sądu o zapłatę.',
    audience: 'Wierzyciel będący osobą fizyczną lub firmą.',
    requiredData: ['Dane wierzyciela i dłużnika', 'Kwota', 'Termin płatności', 'Podstawa roszczenia'],
    content: `Wezwanie do zapłaty\n\nNiniejszym wzywam do zapłaty kwoty [kwota] zł w terminie [liczba] dni od dnia doręczenia niniejszego pisma.\n\nPodstawa roszczenia:\n[Opis]\n\nNumer rachunku bankowego:\n[NRB]\n\nBrak zapłaty w wyznaczonym terminie spowoduje skierowanie sprawy na drogę postępowania sądowego.\n\n[Data i miejscowość]\n[Podpis]`,
    format: 'txt'
  },
  {
    id: 'doc-005',
    slug: 'sprzeciw-od-nakazu-zaplaty',
    title: 'Sprzeciw od nakazu zapłaty',
    description: 'Wzór sprzeciwu od nakazu zapłaty wydanego w postępowaniu upominawczym.',
    category: 'pisma_sadowe',
    type: 'Pismo sądowe',
    tags: ['nakaz zaplaty', 'sprzeciw', 'pozew'],
    popularity: 77,
    updatedAt: '2026-02-05',
    usage: 'Gdy otrzymasz nakaz zapłaty i chcesz zakwestionować roszczenie.',
    audience: 'Pozwany / pełnomocnik pozwanego.',
    requiredData: ['Sygnatura', 'Zakres zaskarżenia', 'Zarzuty', 'Wnioski dowodowe'],
    content: `Sprzeciw od nakazu zapłaty\n\nDziałając w ustawowym terminie, składam sprzeciw od nakazu zapłaty wydanego w sprawie o sygn. akt [sygnatura].\n\nZaskarżam nakaz w całości / części.\n\nZarzuty:\n[Opis zarzutów]\n\nWnioski dowodowe:\n[Dowody]\n\nWnoszę o oddalenie powództwa oraz zasądzenie kosztów postępowania.\n\n[Data i miejscowość]\n[Podpis]`,
    format: 'txt'
  }
];

export const categoryLabels: Record<DocumentCategory, string> = {
  wnioski: 'Wnioski',
  odwolania: 'Odwołania',
  pisma_sadowe: 'Pisma sądowe',
  urzedowe: 'Urzędowe'
};

export function getDocumentBySlug(slug: string) {
  return documents.find((doc) => doc.slug === slug);
}
