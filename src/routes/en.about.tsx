import { createFileRoute } from "@tanstack/react-router";
import foundersImg from "@/assets/parent-consultation.webp";
import streetImg from "@/assets/vancouver-street.webp";
import waveBg from "@/assets/wave-bg.jpg";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About Us | Elevate International Education" },
      { name: "description", content: "Meet Maggie and Katrina, founders of Elevate International Education — 30 years of Vancouver expertise, caring for every student like family." },
      { property: "og:title", content: "About Us | Elevate International Education" },
      { property: "og:description", content: "Meet the founders and the story behind Elevate International Education." },
      { property: "og:image", content: foundersImg },
      { property: "og:url", content: "/en/about" },
    ],
    links: [
      { rel: "canonical", href: "/en/about" },
      { rel: "alternate", hrefLang: "en", href: "/en/about" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-secondary/40">
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">About Us</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-3xl">
            Caring like family for every child who comes to Canada
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Elevate International Education is a premium Vancouver-based consultancy. We're not just agents — we're family for your child in Canada.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img src={foundersImg} alt="Maggie & Katrina" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
          <div className="md:col-span-7 space-y-5 text-[15px] md:text-base leading-[1.9] text-foreground/80 max-w-xl">
            <SectionHeading eyebrow="Founders" title="Maggie & Katrina" />
            <p className="mt-6">We've lived and worked on Canadian soil for more than 30 years.</p>
            <p>We've experienced life as young international students arriving alone, and later built careers, families, and raised children here in Vancouver.</p>
            <p>Because we walked the path ourselves, we know Greater Vancouver — its neighborhoods, culture, and resources — better than almost anyone.</p>
            <p>We deeply understand how much environment shapes a child's character and potential. Today we channel those 30 years of local experience and educational passion into supporting more children studying in Canada.</p>
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 bg-wood-soft/40"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial grid md:grid-cols-3 gap-12">
          {[
            { t: "30 Years in Vancouver", b: "From international students to entrepreneurs and mothers — three decades rooted in this city." },
            { t: "Education First", b: "We believe environment shapes the child. We choose schools and communities that fit each family." },
            { t: "Long-Term Partnership", b: "From applications and visas to housing and daily life — comprehensive, ongoing support." },
          ].map((b) => (
            <div key={b.t}>
              <h3 className="font-serif text-2xl text-primary">{b.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-2 gap-12 items-center">
          <img src={streetImg} alt="Vancouver residential street" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div>
            <SectionHeading eyebrow="Philosophy" title="Education is more than getting into a school" />
            <p className="mt-6 text-base text-foreground/80 leading-[1.9] max-w-lg">
              Every child deserves to be truly seen and understood. From academic planning to everyday life, we bring family-like warmth — helping each student build confidence, independence, and belonging in a new country.
            </p>
            <blockquote className="mt-10 border-l-2 border-wood pl-6 font-serif text-2xl text-primary leading-snug max-w-lg">
              "We don't just help children leave home — we help them go further, with peace of mind."
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
