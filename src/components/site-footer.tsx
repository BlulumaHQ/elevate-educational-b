import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/study-in-vancouver", label: "Study in Vancouver" },
  { to: "/services", label: "Services" },
  { to: "/consultation", label: "Consultation" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream mt-24">
      <div className="container-editorial py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div>
            <p className="font-serif text-2xl md:text-3xl tracking-wide">頤珈國際教育</p>
            <p className="text-xs tracking-[0.25em] text-cream/70 mt-2">
              ELEVATE INTERNATIONAL EDUCATION
            </p>
          </div>
          <p className="text-sm text-cream/70 max-w-sm leading-relaxed">
            Your Trusted Education Partner in Vancouver. <br />
            30 年加拿大在地經驗，陪伴孩子安心成長。
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-cream/50 mb-4">SITEMAP</p>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-cream/80 hover:text-cream transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-cream/50 mb-4">CONTACT</p>
          <ul className="space-y-2.5 text-sm text-cream/80">
            <li>Email: hello@elevate-edu.ca</li>
            <li>Phone: +1 (604) 000-0000</li>
            <li>WhatsApp: +1 (604) 000-0000</li>
            <li>WeChat: ElevateEdu</li>
            <li className="pt-1 text-cream/60">Vancouver, BC, Canada</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-editorial py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© 2026 Elevate International Education. All rights reserved.</p>
          <p>
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-cream link-underline"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
