import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import logoIcon from "@/assets/logo-icon-only.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/study-in-vancouver", label: "Study in Vancouver" },
  { to: "/services", label: "Services" },
  { to: "/courses", label: "Courses" },
  { to: "/consultation", label: "Consultation" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="container-wide pt-24 pb-12">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={logoIcon}
                alt=""
                aria-hidden="true"
                className="h-20 w-20 md:h-24 md:w-24 object-contain shrink-0"
              />
              <div className="leading-tight">
                <p className="font-serif text-2xl md:text-3xl text-ivory">頤珈國際教育</p>
                <p className="mt-1 text-[11px] tracking-[0.28em] uppercase text-gold">
                  Elevate International Education
                </p>
              </div>
            </div>
            <p className="text-sm text-ivory/65 max-w-sm leading-[1.95]">
              Boutique International Education Consulting,
              proudly based in Vancouver, BC. <br />
              30 年加拿大在地經驗，陪伴孩子安心成長。
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              Book a Consultation <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Sitemap */}
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

          {/* Contact */}
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
