import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, GraduationCap, ShieldCheck, Home, Compass, HeartHandshake, Plane,
  Globe, BookOpen, MapPin, Building2, School, Briefcase, Library, Award,
} from "lucide-react";
import heroSlide1 from "@/assets/hero-students-group.webp";
import heroSlide2 from "@/assets/hero-students-walking.webp";
import skyline from "@/assets/vancouver-skyline.jpg";
import foundersImg from "@/assets/parent-consultation.webp";
import campusHeritage from "@/assets/student-presentation.webp";
import classroomMentor from "@/assets/teacher-presenting.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Elevate International Education | Vancouver Study Abroad Consultants" },
      {
        name: "description",
        content:
          "Boutique Vancouver-based education consultancy. 30 years of local Canadian experience guiding international families through private school applications, student visas, homestay, and long-term care.",
      },
      { property: "og:title", content: "Elevate International Education | Vancouver Study Abroad" },
      {
        property: "og:description",
        content:
          "30 years of Vancouver expertise, helping international families navigate study abroad in Canada with confidence.",
      },
      { property: "og:image", content: heroSlide1 },
      { property: "og:url", content: "/en" },
    ],
    links: [
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    img: heroSlide1,
    eyebrow: "Vancouver · British Columbia",
    title: ["See the Future,", "Start with Confidence"],
    subtitle:
      "30 years of local Canadian experience helping students settle securely into Vancouver's education and lifestyle.",
    primary: { label: "Book a Free Consultation", to: "/en/consultation" },
    secondary: { label: "Learn More", to: "/en/about" },
  },
  {
    img: heroSlide2,
    eyebrow: "Boutique Education Consulting",
    title: ["More Than Study Abroad —", "A Foundation for Life"],
    subtitle:
      "From school applications and homestay to settling into Canadian life, we provide truly long-term partnership.",
    primary: { label: "Explore Services", to: "/en/services" },
    secondary: { label: "Book Consultation", to: "/en/consultation" },
  },
];

const services = [
  { icon: School, no: "01", title: "Precise School Applications", body: "Tailored application strategies for Canada's top public and private schools, aligned with each child's profile and family goals." },
  { icon: ShieldCheck, no: "02", title: "Full Student Visa Support", body: "Experienced consultants guide every step — from document prep to interview coaching — for a smooth, secure process." },
  { icon: Home, no: "03", title: "Vetted Homestay Placements", body: "We personally visit and evaluate each home to match your child with a truly warm, trustworthy Canadian family." },
  { icon: Compass, no: "04", title: "Settling In Locally", body: "Phone, banking, transit, healthcare, and daily life support — a one-stop landing in Vancouver." },
  { icon: HeartHandshake, no: "05", title: "Long-Term Companionship", body: "We're your eyes and hands in Canada — regular updates, real-time communication, lasting partnership." },
  { icon: Plane, no: "06", title: "Cultural & Academic Pathways", body: "Secondary, university, and career planning — supporting every key milestone in your child's journey." },
];

const stats = [
  { value: "30+", label: "Years", sub: "Vancouver Local Experience" },
  { value: "200+", label: "Families", sub: "Trusted Across Asia" },
  { value: "40+", label: "Partner Schools", sub: "Private & Public BC" },
];

const floatingIcons = [
  { Icon: GraduationCap, className: "top-[14%] left-[8%]", delay: "0s", size: 56 },
  { Icon: Globe, className: "top-[22%] right-[12%]", delay: "1s", size: 48 },
  { Icon: BookOpen, className: "bottom-[28%] left-[14%]", delay: "2s", size: 44 },
  { Icon: MapPin, className: "bottom-[18%] right-[20%]", delay: "1.5s", size: 40 },
  { Icon: Building2, className: "bottom-[22%] left-[5%]", delay: "0.5s", size: 52 },
  { Icon: Library, className: "bottom-[10%] left-[38%]", delay: "2.5s", size: 44 },
];

function HomePage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-navy-deep">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={s.img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-top ${i === active ? "kenburns" : ""}`}
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        ))}

        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {floatingIcons.map(({ Icon, className, delay, size }, i) => (
            <div
              key={i}
              className={`absolute ${className} float-slow text-ivory/15`}
              style={{ animationDelay: delay }}
            >
              <Icon size={size} strokeWidth={1} />
            </div>
          ))}
        </div>

        <div aria-hidden className="absolute inset-0 bp-grid opacity-[0.07] pointer-events-none" />

        <div className="absolute top-0 inset-x-0 z-10 pt-28 md:pt-32">
          <div className="container-wide flex items-center justify-between text-ivory/70 text-[11px] tracking-[0.32em] uppercase">
            <span className="hidden md:inline">Elevate International Education</span>
            <span>est. 1995 · Vancouver, BC</span>
          </div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container-wide w-full">
            <div className="max-w-3xl text-ivory">
              <div key={active} className="fade-up">
                <p className="eyebrow text-gold mb-6 flex items-center gap-4">
                  <span className="gold-bar" />
                  {slides[active].eyebrow}
                </p>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.04] text-balance">
                  {slides[active].title[0]}
                  <br />
                  {slides[active].title[1]}
                </h1>
                <p className="mt-8 max-w-xl text-base md:text-lg text-ivory/80 leading-[1.9] font-light">
                  {slides[active].subtitle}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link to={slides[active].primary.to} className="btn-primary">
                    {slides[active].primary.label} <ArrowRight size={15} />
                  </Link>
                  <Link to={slides[active].secondary.to} className="btn-ghost">
                    {slides[active].secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10 pb-10 md:pb-12">
          <div className="container-wide flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`slide-dot ${i === active ? "active" : ""}`}
                />
              ))}
              <span className="ml-4 text-ivory/60 text-xs tracking-[0.3em] font-light">
                0{active + 1} / 0{slides.length}
              </span>
            </div>

            <div className="hidden md:grid grid-cols-3 bg-ivory/[0.06] backdrop-blur-md border border-ivory/15 px-8 py-6 max-w-2xl">
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className={`text-ivory px-5 ${i !== stats.length - 1 ? "border-r border-ivory/15" : ""}`}
                >
                  <div className="font-display text-3xl lg:text-4xl text-gold leading-none">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[10px] tracking-[0.28em] uppercase text-ivory/85">{s.label}</div>
                  <div className="mt-1 text-[11px] text-ivory/55 leading-snug">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-ivory border-y border-navy/10">
        <div className="container-wide py-8 flex flex-wrap items-center justify-between gap-6 text-navy/70 text-[11px] tracking-[0.32em] uppercase">
          <span>Trusted by families across Taiwan · Hong Kong · Mainland China</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Award size={14} strokeWidth={1.5} /> ICEF Accredited</span>
            <span className="hidden md:flex items-center gap-2"><Briefcase size={14} strokeWidth={1.5} /> Licensed BC Consultants</span>
            <span className="flex items-center gap-2"><MapPin size={14} strokeWidth={1.5} /> Vancouver Office</span>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-40 bg-ivory overflow-hidden">
        <div aria-hidden className="absolute inset-0 bp-grid-fine opacity-40" />
        <div aria-hidden className="absolute top-1/2 -right-32 w-[420px] h-[420px] dot-field opacity-30 rounded-full" />

        <div className="container-wide relative grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> Our Philosophy</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.1] text-balance">
              Boutique<br />International<br />Education,<br />Crafted Personally.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-7 text-foreground/75 leading-[1.95] text-[15px] md:text-[16px]">
            <p>
              Elevate International Education is a boutique consulting brand rooted in Vancouver.
              We don't process applications in bulk — we partner deeply with each international family
              to shape a 10-year education blueprint for their child.
            </p>
            <p>
              From strategic admissions to Canada's top private schools, full visa support, and carefully
              matched homestay placements, to every detail of campus, life, and cultural adjustment after
              arrival — 30 years of local experience and authentic care make us the long-term partner
              parents trust.
            </p>
            <div className="pt-4 flex items-center gap-5">
              <span className="hairline w-16" />
              <Link to="/en/about" className="text-navy text-sm tracking-[0.2em] uppercase link-underline">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-navy text-ivory overflow-hidden">
        <div aria-hidden className="absolute inset-0 bp-grid opacity-[0.06]" />
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[520px] lg:min-h-[760px]">
            <img src={foundersImg} alt="Elevate founders in Vancouver" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/40" />
            <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-gold/70" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-gold/70" />
          </div>

          <div className="px-6 md:px-16 lg:px-24 py-20 lg:py-32 flex items-center">
            <div className="max-w-xl">
              <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> Meet the Founders</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-balance">
                30 Years in Canada,<br />A Lifetime Commitment to Education.
              </h2>
              <div className="mt-9 space-y-5 text-ivory/75 leading-[1.95] text-[15px]">
                <p>
                  Our founders moved to Canada in 1995 and have called Vancouver home for over 30 years.
                  From their own student years to raising children through the Canadian education system,
                  they truly understand the worries, hopes, and challenges of international families at every stage.
                </p>
                <p>
                  We're not just consultants — we're family for your child in Canada,
                  and the local partner parents trust most.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-ivory/15">
                {[
                  { y: "1995", t: "Moved to Vancouver" },
                  { y: "2005", t: "Founded the consultancy" },
                  { y: "2025", t: "200+ families served" },
                ].map((m) => (
                  <div key={m.y}>
                    <div className="font-display text-2xl text-gold">{m.y}</div>
                    <div className="mt-2 text-[12px] text-ivory/65 tracking-wide leading-snug">{m.t}</div>
                  </div>
                ))}
              </div>

              <Link to="/en/about" className="mt-12 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold link-underline">
                More About Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-40 bg-ivory-deep overflow-hidden">
        <div aria-hidden className="absolute inset-0 bp-grid-fine opacity-50" />
        <div aria-hidden className="absolute -top-32 -left-32 w-[460px] h-[460px] dot-field opacity-25 rounded-full" />

        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> What We Do</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.08] text-balance">
                From the first application,<br />to graduation day.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 text-foreground/70 leading-[1.95] text-[15px]">
              With the spirit of boutique consulting, we offer six core services —
              professional partnership at every critical stage of your child's Canadian education.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-navy/10 bg-ivory">
            {services.map((s) => (
              <div
                key={s.no}
                className="group relative p-10 md:p-12 border-r border-b border-navy/10 transition-colors duration-500 hover:bg-navy hover:text-ivory"
              >
                <div className="flex items-start justify-between mb-10">
                  <s.icon size={44} strokeWidth={1} className="text-navy group-hover:text-gold transition-colors duration-500" />
                  <span className="font-display text-sm tracking-[0.2em] text-navy/40 group-hover:text-ivory/50 transition-colors">
                    {s.no}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-[26px] leading-tight text-navy group-hover:text-ivory transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.9] text-foreground/65 group-hover:text-ivory/75 transition-colors duration-500">
                  {s.body}
                </p>
                <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-navy/50 group-hover:text-gold transition-colors">
                  Learn More <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/en/services" className="btn-primary !bg-navy">
              All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-40 bg-ivory overflow-hidden">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative h-[520px] md:h-[640px]">
            <div className="absolute top-0 left-0 w-[68%] h-[78%] img-zoom shadow-2xl">
              <img src={campusHeritage} alt="Heritage Canadian campus" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-0 right-0 w-[52%] h-[58%] img-zoom shadow-2xl border-8 border-ivory">
              <img src={classroomMentor} alt="Classroom mentorship in Vancouver" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute top-8 right-12 w-px h-32 bg-gold/60" />
            <div className="absolute top-8 right-12 w-32 h-px bg-gold/60" />
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> Why Vancouver</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.08] text-balance">
              The World's Most Livable City,<br />World-Class Education.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/75 leading-[1.95] text-[15px]">
              <p>
                Vancouver is home to one of North America's most complete international education ecosystems —
                world-class public school boards, heritage private schools, certified homestay networks,
                and a diverse, safe, nature-rich urban environment.
              </p>
            </div>

            <ul className="mt-10 space-y-5">
              {[
                { Icon: School, t: "BC Government-accredited top private and public schools" },
                { Icon: Globe, t: "Among the world's top 3 most livable and safest cities" },
                { Icon: GraduationCap, t: "A premier gateway to leading North American universities" },
              ].map(({ Icon, t }) => (
                <li key={t} className="flex items-start gap-5 pt-5 border-t border-navy/10">
                  <Icon size={28} strokeWidth={1.2} className="text-navy shrink-0 mt-0.5" />
                  <span className="text-navy text-[15px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            <Link to="/en/study-in-vancouver" className="mt-10 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-navy link-underline">
              Discover Vancouver <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-28 md:py-36 bg-beige/40 overflow-hidden"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial max-w-4xl text-center">
          <p className="eyebrow mb-8 flex items-center justify-center gap-4">
            <span className="gold-bar" /> Family Voices <span className="gold-bar" />
          </p>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.4rem] text-navy leading-[1.45] italic text-balance">
            "Sending our child abroad for the first time, our greatest fear was the unknown.
            Elevate gave us peace of mind — they truly care for our child as their own."
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-5 text-sm tracking-[0.22em] uppercase text-navy/65">
            <span className="hairline w-12" />
            High School Parent · Taipei
            <span className="hairline w-12" />
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy-deep">
        <img src={skyline} alt="Vancouver skyline at blue hour" className="absolute inset-0 w-full h-full object-cover opacity-55" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/75 to-navy-deep/90" />
        <div aria-hidden className="absolute inset-0 bp-grid opacity-[0.08]" />

        <div className="relative container-wide py-24 md:py-36 text-ivory">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> Begin Your Journey</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
              Take the first confident step<br />into your child's international future.
            </h2>
            <p className="mt-8 max-w-xl text-ivory/75 text-[15px] md:text-base leading-[1.95]">
              Book a free consultation to speak with our advisors about your child's strengths, your family's hopes,
              and the Canadian study pathway that fits best.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/en/consultation" className="btn-primary !bg-ivory !text-navy !border-ivory hover:!bg-gold hover:!border-gold">
                Book Consultation <ArrowRight size={15} />
              </Link>
              <Link to="/en/contact" className="btn-ghost">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
