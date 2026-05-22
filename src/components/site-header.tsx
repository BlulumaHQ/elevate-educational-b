import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-horizontal-transparent.png";

const nav = [
  { to: "/", label: "首頁", en: "Home" },
  { to: "/about", label: "關於我們", en: "About" },
  { to: "/study-in-vancouver", label: "溫哥華留學", en: "Study in Vancouver" },
  { to: "/services", label: "服務內容", en: "Services" },
  { to: "/courses", label: "課程介紹", en: "Courses" },
  { to: "/contact", label: "聯絡我們", en: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "中文">("EN");

  const LangSwitcher = ({ className = "" }: { className?: string }) => (
    <div
      className={`inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-navy/70 ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("EN")}
        className={`px-1.5 transition-colors hover:text-navy ${lang === "EN" ? "text-navy font-medium" : ""}`}
        aria-pressed={lang === "EN"}
      >
        EN
      </button>
      <span className="text-navy/30">|</span>
      <button
        type="button"
        onClick={() => setLang("中文")}
        className={`px-1.5 transition-colors hover:text-navy ${lang === "中文" ? "text-navy font-medium" : ""}`}
        aria-pressed={lang === "中文"}
      >
        中文
      </button>
    </div>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-navy/10">
      <div className="container-wide flex items-center justify-between gap-6 py-0">
        <Link to="/" className="flex items-center shrink-0 text-navy -my-2">
          <img
            src={logo}
            alt="頤珈國際教育 Elevate International Education"
            className="h-24 md:h-28 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[12px] tracking-[0.22em] uppercase text-navy/80">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline transition-colors hover:text-navy"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.en}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <LangSwitcher />
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase border border-navy text-navy hover:bg-navy hover:text-ivory transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <LangSwitcher />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-navy"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/10 bg-ivory/95 backdrop-blur-md">
          <div className="container-wide py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base text-navy/85 hover:text-navy"
              >
                {item.label} <span className="text-xs text-warm-gray ml-2 tracking-wider uppercase">{item.en}</span>
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-xs tracking-[0.22em] uppercase bg-navy text-ivory"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
