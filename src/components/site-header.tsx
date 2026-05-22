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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-editorial flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="頤珈國際教育" className="h-10 w-auto md:h-12 object-contain" />
          <span className="sr-only">頤珈國際教育 Elevate International Education</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide text-foreground/80">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/consultation"
            className="inline-flex items-center px-5 py-2.5 text-[13px] tracking-wide bg-primary text-primary-foreground hover:bg-navy-deep transition-colors"
          >
            預約諮詢 →
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container-editorial py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 hover:text-primary"
              >
                {item.label} <span className="text-xs text-muted-foreground ml-2">{item.en}</span>
              </Link>
            ))}
            <Link
              to="/consultation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm bg-primary text-primary-foreground"
            >
              預約免費諮詢
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
