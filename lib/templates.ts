export type DocumentType = 'wniosek' | 'pismo_sadowe' | 'odwolanie';

export type GeneratorForm = {
  documentType: DocumentType;
  title: string;
  fullName: string;
  address: string;
  institution: string;
  caseNumber: string;
  city: string;
  date: string;
  mainContent: string;
  justification: string;
  attachments: string;
};

const signatures = {
  wniosek: 'Wnioskodawca',
  pismo_sadowe: 'Strona / Pełnomocnik',
  odwolanie: 'Odwołujący'
};

export function generateDocumentContent(values: GeneratorForm): string {
  const baseHeader = `${values.city}, dnia ${values.date || '....................'}\n\n${values.fullName}\n${values.address}\n\nDo:\n${values.institution}${values.caseNumber ? `\nSygn. akt: ${values.caseNumber}` : ''}`;

  const commonBody = `${values.title}\n\n${values.mainContent}\n\nUzasadnienie:\n${values.justification}\n\nZałączniki:\n${values.attachments || 'Brak'}\n\nZ poważaniem,\n\n........................................\n${signatures[values.documentType]}`;

  if (values.documentType === 'wniosek') {
    return `${baseHeader}\n\nW N I O S E K\n\nNa podstawie przedstawionego stanu faktycznego zwracam się z uprzejmą prośbą o pozytywne rozpoznanie niniejszego wniosku.\n\n${commonBody}`;
  }

  if (values.documentType === 'pismo_sadowe') {
    return `${baseHeader}\n\nP I S M O   S Ą D O W E\n\nDziałając we własnym imieniu, wnoszę niniejsze pismo procesowe i wnoszę o uwzględnienie wskazanych żądań.\n\n${commonBody}`;
  }

  return `${baseHeader}\n\nO D W O Ł A N I E\n\nDziałając w ustawowym terminie, wnoszę odwołanie od rozstrzygnięcia i proszę o ponowne rozpatrzenie sprawy.\n\n${commonBody}`;
}
