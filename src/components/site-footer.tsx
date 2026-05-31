import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import logoFull from "@/assets/elevate-logo-footer.png";

const navZh = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/study-in-vancouver", label: "Study in Vancouver" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/consultation", label: "Consultation" },
  { to: "/contact", label: "Contact" },
] as const;

const navEn = [
  { to: "/en", label: "Home" },
  { to: "/en/about", label: "About" },
  { to: "/en/study-in-vancouver", label: "Study in Vancouver" },
  { to: "/en/services", label: "Services" },
  { to: "/en/courses", label: "Courses" },
  { to: "/en/consultation", label: "Consultation" },
  { to: "/en/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const nav = isEn ? navEn : navZh;
  const consultPath = isEn ? "/en/consultation" : "/consultation";

  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="container-wide pt-24 pb-12">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <img
              src={logoFull}
              alt={isEn ? "Elevate International Education" : "頤珈國際教育 Elevate International Education"}
              className="h-24 md:h-28 w-auto object-contain"
            />
            <p className="text-sm text-ivory/65 max-w-sm leading-[1.95]">
              {isEn ? (
                <>
                  Boutique International Education Consulting,
                  proudly based in Vancouver, BC. <br />
                  30 years of local Canadian experience guiding international families.
                </>
              ) : (
                <>
                  Boutique International Education Consulting,
                  proudly based in Vancouver, BC. <br />
                  30 年加拿大在地經驗，陪伴孩子安心成長。
                </>
              )}
            </p>
            <Link
              to={consultPath}
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              Book a Consultation <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-6 text-ivory/55">Navigation</p>
            <ul className="space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-ivory/80 hover:text-gold transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-6 text-ivory/55">Contact</p>
            <ul className="space-y-4 text-sm text-ivory/80">
              <li className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 text-gold shrink-0" />
                hello@elevate-edu.ca
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 text-gold shrink-0" />
                +1 (604) 000-0000
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 text-gold shrink-0" />
                Vancouver, British Columbia, Canada
              </li>
              <li className="pt-3 text-ivory/55 text-xs tracking-[0.22em] uppercase">
                WeChat · ElevateEdu &nbsp;·&nbsp; WhatsApp +1 604 000 0000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© 2026 Elevate International Education. All rights reserved.</p>
          <p className="text-[9px] tracking-[0.22em] uppercase text-ivory/30">
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/40 hover:text-gold transition-colors"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
