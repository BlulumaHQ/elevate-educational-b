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

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Elevate International Education" },
      { name: "description", content: "Reach Elevate International Education by email or phone. Based in Vancouver, Canada." },
      { property: "og:title", content: "Contact | Elevate International Education" },
      { property: "og:url", content: "/en/contact" },
    ],
    links: [
      { rel: "canonical", href: "/en/contact" },
      { rel: "alternate", hrefLang: "en", href: "/en/contact" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/contact" },
    ],
  }),
  component: ContactPage,
});

const items = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: MapPin, label: "Vancouver Office", value: "Vancouver, British Columbia, Canada" },
];

function ContactPage() {
  return (
    <>
      <section
        className="pt-40 pb-20 md:pt-52 md:pb-24 bg-secondary/40"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">Contact</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-3xl">
            Get in touch anytime
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you're in Asia or Canada, we'd love to hear your story and help plan your child's study abroad journey.
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
                to="/en/consultation"
                className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-navy-deep transition-colors"
              >
                Book a Free Consultation →
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
              <p className="font-serif text-primary text-xl mb-3">Want to chat further?</p>
              <p>
                Email us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-2 hover:text-wood">
                  {EMAIL}
                </a>{" "}
                or call{" "}
                <a href={`tel:${PHONE_TEL}`} className="text-primary underline underline-offset-2 hover:text-wood">
                  {PHONE_DISPLAY}
                </a>
                . We'll get back to you right away and help schedule your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
