import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'LexDraft – Generator pism',
  description: 'Nowoczesny generator polskich pism urzędowych i sądowych bez backendu.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
