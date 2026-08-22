"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, PhoneCall } from "lucide-react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log error to monitoring if available
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800 font-sans antialiased">
      {/* Top Brand Bar */}
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0f2b1d] text-amber-400 flex items-center justify-center font-serif font-black text-xl shadow-xs">
              RS
            </div>
            <div>
              <span className="text-base font-black text-[#0f2b1d] tracking-tight block uppercase">
                Roy Sons
              </span>
              <span className="text-[10px] font-bold text-amber-700 tracking-widest block uppercase -mt-1">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          <Link
            href="/contact"
            className="text-xs font-bold text-[#0f2b1d] hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
          >
            <PhoneCall size={14} className="text-amber-600" />
            <span>Support Desk</span>
          </Link>
        </div>
      </header>

      {/* Main Error Content */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="w-20 h-20 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center font-black text-3xl mx-auto mb-6 shadow-inner">
            !
          </div>

          <span className="text-xs font-black uppercase tracking-widest text-rose-600 block mb-2">
            System Notice
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#0f2b1d] mb-4">
            Something unexpected occurred
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8">
            An error prevented this section from rendering properly. Please try reloading the view or return to the main dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0f2b1d] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-950 transition-all shadow-md cursor-pointer"
            >
              <RefreshCw size={15} />
              <span>Retry Action</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all border border-slate-200"
            >
              <Home size={15} className="text-[#0f2b1d]" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-4 text-center">
        <p className="text-xs text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Roy Sons Pvt. Ltd. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
