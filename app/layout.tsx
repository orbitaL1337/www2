import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'LexDraft – Usługa pism i wniosków',
  description: 'Nowoczesna usługa wsparcia formalnego i katalog wzorów dokumentów dla osób oraz firm.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
