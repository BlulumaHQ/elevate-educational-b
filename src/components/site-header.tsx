import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const nav = [
  { to: "/", label: "首頁", en: "Home" },
  { to: "/about", label: "關於我們", en: "About" },
  { to: "/study-in-vancouver", label: "溫哥華留學", en: "Study in Vancouver" },
  { to: "/services", label: "服務內容", en: "Services" },
  { to: "/consultation", label: "預約諮詢", en: "Consultation" },
  { to: "/contact", label: "聯絡我們", en: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLight = scrolled;
  const textColor = onLight ? "text-navy" : "text-ivory";
  const subColor = onLight ? "text-navy/75" : "text-ivory/85";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        onLight
          ? "bg-ivory/85 backdrop-blur-md border-b border-navy/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-6">
        <Link to="/" className={`flex items-center gap-3 shrink-0 ${textColor}`}>
          <img src={logo} alt="頤珈國際教育" className={`h-10 w-auto md:h-11 object-contain ${onLight ? "" : "brightness-0 invert"}`} />
          <div className="hidden sm:block leading-tight">
            <div className={`font-serif text-base md:text-lg ${textColor}`}>頤珈國際教育</div>
            <div className={`text-[9px] tracking-[0.28em] uppercase ${subColor}`}>Elevate Education</div>
          </div>
        </Link>

        <nav className={`hidden lg:flex items-center gap-9 text-[12px] tracking-[0.22em] uppercase ${subColor}`}>
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`link-underline transition-colors hover:${onLight ? "text-navy" : "text-ivory"}`}
              activeProps={{ className: onLight ? "text-navy" : "text-ivory" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.en}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/consultation"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase border transition-colors ${
              onLight
                ? "border-navy text-navy hover:bg-navy hover:text-ivory"
                : "border-ivory text-ivory hover:bg-ivory hover:text-navy"
            }`}
          >
            Book Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 ${textColor}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
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
