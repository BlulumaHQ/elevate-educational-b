import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";
import logoFull from "@/assets/elevate-logo-footer.png";
import lineQrImg from "@/assets/line-qr.png";

const EMAIL = "info@elevateeducation.ca";
const PHONE_DISPLAY = "778-982-3667";
const PHONE_TEL = "+17789823667";
const FB_URL = "https://www.facebook.com/ElevateEducation2026/";
const IG_URL = "https://www.instagram.com/elevateeducation2026/";
const LINE_QR = lineQrImg;

const navZh = [
  { to: "/", label: "首頁" },
  { to: "/about", label: "關於我們" },
  { to: "/study-in-vancouver", label: "溫哥華留學" },
  { to: "/services", label: "服務內容" },
  { to: "/courses", label: "課程介紹" },
  { to: "/consultation", label: "預約諮詢" },
  { to: "/contact", label: "聯絡我們" },
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
                  精品國際教育顧問品牌，根植於加拿大 Vancouver。<br />
                  30 年在地經驗，陪伴國際家庭安心成長。
                </>
              )}
            </p>
            <Link
              to={consultPath}
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              {isEn ? "Book a Consultation" : "預約免費諮詢"} <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-6 text-ivory/55">{isEn ? "Navigation" : "網站導覽"}</p>
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
            <p className="eyebrow mb-6 text-ivory/55">{isEn ? "Contact" : "聯絡資訊"}</p>
            <ul className="space-y-4 text-sm text-ivory/80">
              <li className="flex items-start gap-3">
                <Mail size={16} strokeWidth={1.5} className="mt-0.5 text-gold shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} strokeWidth={1.5} className="mt-0.5 text-gold shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="mt-0.5 text-gold shrink-0" />
                {isEn ? "Vancouver, British Columbia, Canada" : "加拿大 Vancouver, British Columbia"}
              </li>
            </ul>

            <div className="mt-8">
              <p className="eyebrow mb-4 text-ivory/55">{isEn ? "Follow" : "追蹤我們"}</p>
              <div className="flex items-center gap-4">
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 grid place-items-center border border-ivory/15 text-ivory/70 hover:text-gold hover:border-gold/60 transition-colors"
                >
                  <Facebook size={16} strokeWidth={1.5} />
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 grid place-items-center border border-ivory/15 text-ivory/70 hover:text-gold hover:border-gold/60 transition-colors"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
                <div className="flex items-center gap-3 ml-2">
                  <img
                    src={LINE_QR}
                    alt={isEn ? "Line QR code" : "Line QR Code"}
                    className="w-16 h-16 bg-ivory p-1"
                    loading="lazy"
                  />
                  <span className="text-[10px] tracking-[0.22em] uppercase text-ivory/55">
                    {isEn ? "Add us on Line" : "加入 Line 好友"}
                  </span>
                </div>
              </div>
            </div>
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
