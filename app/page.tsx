import Image from "next/image";
import { WaitlistForm } from "@/app/waitlist-form";
import { FaqItem } from "@/app/faq-item";
import { FadeIn } from "@/app/fade-in";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-12 sm:py-16 flex flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center w-full">
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
        </FadeIn>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 bg-zinc-50/60 dark:bg-zinc-900/20 border-y border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-black dark:text-white">Unleash Your Academic Potential</h2>
              <p className="text-lg text-black dark:text-zinc-50">Everything you need to streamline your research, collaborate seamlessly, and achieve breakthroughs faster.</p>
            </div>
          </FadeIn>

          {/* Feature Block 1 */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
              <div className="flex flex-col gap-8 lg:px-10 xl:px-16">
                <div className="pl-4 border-l-2 border-accent-purple group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-purple transition-colors">AI Workspace</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-purple transition-colors">Centralized productivity powered by AI.</p>
                </div>
                <div className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-accent-purple group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-purple transition-colors">Smart Notes</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-purple transition-colors">Organize ideas instantly with semantic search.</p>
                </div>
                <div className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-accent-purple group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-purple transition-colors">Team Sync</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-purple transition-colors">Collaborate in real time across projects.</p>
                </div>
                <div className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-accent-purple group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-purple transition-colors">AI Automation</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-purple transition-colors">Automate repetitive workflows and tasks.</p>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800/50 flex items-center justify-center shadow-inner">
                <span className="text-zinc-500 font-medium">Image Placeholder 1</span>
              </div>
            </div>
          </FadeIn>

          {/* Feature Block 2 */}
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative h-[400px] w-full rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800/50 flex items-center justify-center shadow-inner">
                <span className="text-zinc-500 font-medium">Image Placeholder 2</span>
              </div>
              <div className="order-1 lg:order-2 flex flex-col gap-8 lg:px-10 xl:px-16">
                <div className="pl-4 border-l-2 border-accent-blue group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-blue transition-colors">Deep Research</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-blue transition-colors">Analyze and summarize academic papers in seconds.</p>
                </div>
                <div className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-accent-blue group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-blue transition-colors">Citation Magic</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-blue transition-colors">Generate accurate citations and bibliographies instantly.</p>
                </div>
                <div className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-accent-blue group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-blue transition-colors">Data Insights</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-blue transition-colors">Spot trends and extract insights from raw research data.</p>
                </div>
                <div className="pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 transition-colors hover:border-accent-blue group cursor-pointer">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-zinc-50 group-hover:text-accent-blue transition-colors">Seamless Export</h3>
                  <p className="text-lg text-black dark:text-zinc-100 group-hover:text-accent-blue transition-colors">Format and export your manuscript for any journal.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-black dark:text-white">Pricing</h2>
              <p className="text-lg text-black dark:text-zinc-50">Simple, transparent pricing for researchers and teams of all sizes.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Junior Plan */}
            <FadeIn delay={0} className="flex">
              <div className="group flex w-full flex-col p-8 rounded-2xl border border-zinc-200 bg-blue-50 dark:border-zinc-800 dark:bg-zinc-900/50 transition-all duration-300 hover:scale-105 hover:border-accent-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] text-left relative z-10 hover:z-20 cursor-default">
                <h3 className="text-4xl font-extrabold text-black dark:text-zinc-50 mb-2 group-hover:text-accent-purple transition-colors">Junior</h3>
                <p className="text-2xl font-medium text-black dark:text-zinc-400 mb-6">Free</p>
                <hr className="border-zinc-200 dark:border-zinc-800 mb-6 group-hover:border-accent-purple/30 transition-colors" />
                <ul className="flex flex-col gap-5 text-lg text-black dark:text-zinc-200">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Basic AI tools</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Limited workspace</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Community access</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Pro Plan */}
            <FadeIn delay={150} className="flex">
              <div className="group flex w-full flex-col p-8 rounded-2xl border border-zinc-200 bg-blue-50 dark:border-zinc-800 dark:bg-zinc-900/50 transition-all duration-300 hover:scale-105 hover:border-accent-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] text-left relative z-10 hover:z-20 cursor-default">
                <h3 className="text-4xl font-extrabold text-black dark:text-zinc-50 mb-2 group-hover:text-accent-purple transition-colors">Pro</h3>
                <p className="text-2xl font-medium text-black dark:text-zinc-400 mb-6">$15/month</p>
                <hr className="border-zinc-200 dark:border-zinc-800 mb-6 group-hover:border-accent-purple/30 transition-colors" />
                <ul className="flex flex-col gap-5 text-lg text-black dark:text-zinc-200">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Unlimited AI usage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Business Plan */}
            <FadeIn delay={300} className="flex">
              <div className="group flex w-full flex-col p-8 rounded-2xl border border-zinc-200 bg-blue-50 dark:border-zinc-800 dark:bg-zinc-900/50 transition-all duration-300 hover:scale-105 hover:border-accent-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] text-left relative z-10 hover:z-20 cursor-default">
                <h3 className="text-4xl font-extrabold text-black dark:text-zinc-50 mb-2 group-hover:text-accent-purple transition-colors">Business</h3>
                <p className="text-2xl font-medium text-black dark:text-zinc-400 mb-6">$40</p>
                <hr className="border-zinc-200 dark:border-zinc-800 mb-6 group-hover:border-accent-purple/30 transition-colors" />
                <ul className="flex flex-col gap-5 text-lg text-black dark:text-zinc-200">
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Team management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>API access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-purple shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-12 sm:py-16 flex flex-col items-center text-center container mx-auto px-4">
        <FadeIn className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Supercharge your academic workflow today.</h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Join the waitlist today to get early access to NovaNest AI.
          </p>
          
          <WaitlistForm />
        </FadeIn>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 bg-zinc-50 dark:bg-zinc-900/20 border-y border-zinc-200/50 dark:border-zinc-800/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-black dark:text-white">FAQ</h2>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="max-w-3xl mx-auto flex flex-col text-left">
              <FaqItem question="Is NovaNest available now?" answer="We’re currently in private beta." />
              <FaqItem question="Will there be a free version?" answer="Yes, a free plan will always be available." />
              <FaqItem question="Which platforms are supported?" answer="Web platform first, desktop apps later." />
              <FaqItem question="Is my data secure?" answer="All user data is encrypted and securely stored." />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
