import Link from "next/link";
import { ArrowLeft, Home, Building2, PhoneCall } from "lucide-react";

export default function NotFound() {
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

      {/* Main 404 Content */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#0f2b1d] flex items-center justify-center font-black text-3xl mx-auto mb-6 shadow-inner">
            404
          </div>

          <span className="text-xs font-black uppercase tracking-widest text-amber-700 block mb-2">
            Page Not Found
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#0f2b1d] mb-4">
            Looking for something specific?
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8">
            The page you are trying to access might have been moved, renamed, or is temporarily unavailable. Let us help guide you back to our core business verticals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0f2b1d] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-950 transition-all shadow-md"
            >
              <Home size={15} />
              <span>Return Home</span>
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-all border border-slate-200"
            >
              <Building2 size={15} className="text-[#0f2b1d]" />
              <span>Explore Group</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#0f2b1d] text-xs font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all border border-slate-300 shadow-xs"
            >
              <ArrowLeft size={15} />
              <span>Contact Us</span>
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
