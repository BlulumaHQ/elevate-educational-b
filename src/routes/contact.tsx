import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import waveBg from "@/assets/wave-bg.jpg";
import lineQrAsset from "@/assets/line-qr.png.asset.json";

const EMAIL = "info@elevateeducation.ca";
const PHONE_DISPLAY = "778-982-3667";
const PHONE_TEL = "+17789823667";
const FB_URL = "https://www.facebook.com/ElevateEducation2026/";
const IG_URL = "https://www.instagram.com/elevateeducation2026/";
const LINE_QR = lineQrAsset.url;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "聯絡我們 Contact | 頤珈國際教育" },
      { name: "description", content: "透過 Email 或電話與頤珈國際教育聯繫，我們位於加拿大溫哥華。" },
      { property: "og:title", content: "聯絡我們 | 頤珈國際教育" },
      { property: "og:url", content: "/contact" },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/contact" },
      { rel: "alternate", hrefLang: "en", href: "/en/contact" },
    ],
  }),
  component: ContactPage,
});

const items = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "電話", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: MapPin, label: "溫哥華辦公室", value: "加拿大 Vancouver, British Columbia" },
];

function ContactPage() {
  return (
    <>
      <section
        className="pt-40 pb-20 md:pt-52 md:pb-24 bg-secondary/40"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">聯絡我們</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-3xl">
            隨時與我們聯繫
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            無論您身在台灣或加拿大，我們都樂於聆聽您的故事，協助規劃孩子的留學旅程。
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-10">
            {items.map((i) => (
              <div key={i.label} className="border-t border-border pt-6">
                <div className="flex items-center gap-3 text-wood">
                  <i.icon size={18} strokeWidth={1.5} />
                  <span className="text-[11px] tracking-[0.25em] uppercase">{i.label}</span>
                </div>
                {i.href ? (
                  <a
                    href={i.href}
                    className="mt-3 block font-serif text-xl md:text-2xl text-primary hover:text-wood transition-colors break-all"
                  >
                    {i.value}
                  </a>
                ) : (
                  <p className="mt-3 font-serif text-xl md:text-2xl text-primary">{i.value}</p>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Link
                to="/consultation"
                className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-navy-deep transition-colors"
              >
                預約免費諮詢 →
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="Vancouver location"
                src="https://www.google.com/maps?q=Vancouver%2C+BC%2C+Canada&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-8 bg-wood-soft/40 p-8 text-sm leading-relaxed text-foreground/80">
              <p className="font-serif text-primary text-xl mb-3">想進一步聊聊？</p>
              <p>
                歡迎來信{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-2 hover:text-wood">
                  {EMAIL}
                </a>{" "}
                或致電{" "}
                <a href={`tel:${PHONE_TEL}`} className="text-primary underline underline-offset-2 hover:text-wood">
                  {PHONE_DISPLAY}
                </a>
                ，我們會在第一時間回覆，協助您安排諮詢時段。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
