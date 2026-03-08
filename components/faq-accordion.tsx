'use client';

import { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="surface-card rounded-2xl p-0">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.question}</span>
                <span className="text-slate-500 dark:text-slate-400">{isOpen ? '−' : '+'}</span>
              </button>
            </h3>
            {isOpen && <p className="px-5 pb-5 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.answer}</p>}
          </article>
        );
      })}
    </div>
  );
}
