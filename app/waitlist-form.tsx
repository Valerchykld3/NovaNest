"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Ініціалізуємо клієнт Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Зупиняємо перезавантаження сторінки
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      // Відправляємо пошту в таблицю waitlist
      const { error } = await supabase.from("waitlist").insert([{ email }]);

      if (error) {
        // Код 23505 в PostgreSQL означає порушення унікальності (пошта вже є)
        if (error.code === "23505") {
          setErrorMessage("This email is already on the waitlist!");
        } else {
          setErrorMessage(error.message);
        }
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-md p-4 mt-2 text-base text-emerald-800 rounded-md bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border dark:border-emerald-800/50">
        <span className="font-semibold">Thank you!</span> You've successfully joined the waitlist.
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 sm:flex-row">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={status === "loading"} required placeholder="your.email@example.com" className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-base text-zinc-900 placeholder:text-zinc-400 focus:border-accent-purple focus:outline-none focus:ring-2 focus:ring-accent-purple/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-accent-purple transition-colors disabled:opacity-50" />
        <button type="submit" disabled={status === "loading"} className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-accent-purple px-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-accent-purple/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap">
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
      {status === "error" && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{errorMessage}</p>}
    </div>
  );
}