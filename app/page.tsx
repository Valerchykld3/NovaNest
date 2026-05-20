import Image from "next/image";
import { WaitlistForm } from "@/app/waitlist-form";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-24 sm:py-32 flex flex-col items-center text-center">
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36 mb-8 rounded-full border border-zinc-200 bg-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-purple/20 to-accent-blue/20 blur-2xl opacity-0 dark:opacity-100 -z-10 transition-opacity"></div>
          <Image src="/logo.png" alt="NovaNest AI Logo" fill className="rounded-full object-cover p-1" />
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">NovaNest AI</h1>
        <p className="max-w-2xl text-lg sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-10">
          The Future of Academic Research is Here.
        </p>
        
        <a href="#waitlist" className="inline-flex h-12 items-center justify-center rounded-md bg-accent-purple px-8 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-accent-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50">
          Get Early Access
        </a>
      </section>

      {/* Features Placeholder */}
      <section id="features" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/20 border-y border-zinc-200/50 dark:border-zinc-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Features</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Content coming soon...</p>
        </div>
      </section>

      {/* Productivity Tools Placeholder */}
      <section id="productivity" className="py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Productivity Tools</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Content coming soon...</p>
        </div>
      </section>

      {/* AI Assistant Explanation Placeholder */}
      <section id="ai-assistant" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/20 border-y border-zinc-200/50 dark:border-zinc-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How our AI Works</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Content coming soon...</p>
        </div>
      </section>

      {/* Pricing Placeholder */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Pricing</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Content coming soon...</p>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section id="faq" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900/20 border-y border-zinc-200/50 dark:border-zinc-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">FAQ</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Content coming soon...</p>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-24 sm:py-32 flex flex-col items-center text-center container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Ready to transform your research?</h2>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Join the waitlist today to get early access to NovaNest AI.
        </p>
        
        <WaitlistForm />
      </section>
    </>
  );
}
