"use client";

import * as React from "react";

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-black dark:text-zinc-50 group-hover:text-accent-purple transition-colors">
          {question}
        </h3>
        <svg
          className={`w-6 h-6 shrink-0 text-accent-purple transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-black dark:text-zinc-400 pb-4">{answer}</p>
        </div>
      </div>
    </div>
  );
}