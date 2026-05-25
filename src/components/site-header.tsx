import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-horizontal-transparent.png";

const navZh = [
  { to: "/", label: "首頁", en: "Home" },
  { to: "/about", label: "關於我們", en: "About" },
  { to: "/study-in-vancouver", label: "溫哥華留學", en: "Study in Vancouver" },
  { to: "/services", label: "服務內容", en: "Services" },
  { to: "/courses", label: "課程介紹", en: "Courses" },
  { to: "/contact", label: "聯絡我們", en: "Contact" },
] as const;

const navEn = [
  { to: "/en", label: "Home" },
  { to: "/en/about", label: "About" },
  { to: "/en/study-in-vancouver", label: "Study in Vancouver" },
  { to: "/en/services", label: "Services" },
  { to: "/en/courses", label: "Courses" },
  { to: "/en/contact", label: "Contact" },
] as const;

// Map between locale equivalents for the language switcher
const pathPairs: Array<[string, string]> = [
  ["/", "/en"],
  ["/about", "/en/about"],
  ["/study-in-vancouver", "/en/study-in-vancouver"],
  ["/services", "/en/services"],
  ["/courses", "/en/courses"],
  ["/contact", "/en/contact"],
  ["/consultation", "/en/consultation"],
];

function toEn(path: string): string {
  if (path.startsWith("/en")) return path;
  const found = pathPairs.find(([zh]) => zh === path);
  return found ? found[1] : "/en";
}
function toZh(path: string): string {
  if (!path.startsWith("/en")) return path;
  const found = pathPairs.find(([, en]) => en === path);
  return found ? found[0] : "/";
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const nav = isEn ? navEn : navZh;
  const consultPath = isEn ? "/en/consultation" : "/consultation";
  const consultLabel = isEn ? "Book Consultation" : "Book Consultation";

  const LangSwitcher = ({ className = "" }: { className?: string }) => (
    <div
      className={`inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-navy/70 ${className}`}
    >
      <Link
        to={toEn(pathname) as string}
        className={`px-1.5 transition-colors hover:text-navy ${isEn ? "text-navy font-medium" : ""}`}
        aria-current={isEn ? "page" : undefined}
      >
        EN
      </Link>
      <span className="text-navy/30">|</span>
      <Link
        to={toZh(pathname) as string}
        className={`px-1.5 transition-colors hover:text-navy ${!isEn ? "text-navy font-medium" : ""}`}
        aria-current={!isEn ? "page" : undefined}
      >
        中文
      </Link>
    </div>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-navy/10">
      <div className="container-wide flex items-center justify-between gap-6 py-0">
        <Link to={isEn ? "/en" : "/"} className="flex items-center shrink-0 text-navy -my-2">
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
              activeOptions={{ exact: item.to === "/" || item.to === "/en" }}
            >
              {isEn ? (item as { label: string }).label : (item as { en: string }).en}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <LangSwitcher />
          <Link
            to={consultPath}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase border border-navy text-navy hover:bg-navy hover:text-ivory transition-colors"
          >
            {consultLabel}
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
                {isEn ? (
                  (item as { label: string }).label
                ) : (
                  <>
                    {(item as { label: string }).label}{" "}
                    <span className="text-xs text-warm-gray ml-2 tracking-wider uppercase">
                      {(item as { en: string }).en}
                    </span>
                  </>
                )}
              </Link>
            ))}
            <Link
              to={consultPath}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-xs tracking-[0.22em] uppercase bg-navy text-ivory"
            >
              {consultLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
