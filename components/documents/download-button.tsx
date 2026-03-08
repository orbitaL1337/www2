'use client';

import { useState } from 'react';

type DownloadButtonProps = {
  slug: string;
  title: string;
  className?: string;
};

export function DownloadButton({ slug, title, className }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/download/${slug}`);
      if (!response.ok) {
        throw new Error('Nie udało się pobrać pliku.');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${slug}.txt`;
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isLoading}
      className={className}
      aria-label={`Pobierz dokument: ${title}`}
    >
      {isLoading ? 'Pobieranie...' : 'Pobierz'}
    </button>
  );
}
