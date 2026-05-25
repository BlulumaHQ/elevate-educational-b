import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import campusImg from "@/assets/study-vancouver-hero.webp";
import streetImg from "@/assets/students-classroom-group.webp";
import schoolImg from "@/assets/school.webp";
import homestayImg from "@/assets/students-campus-walk.webp";
import waveBg from "@/assets/wave-bg.jpg";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/en/study-in-vancouver")({
  head: () => ({
    meta: [
      { title: "Study in Vancouver | Elevate International Education" },
      {
        name: "description",
        content: "Learn about Vancouver's education system, public and private schools, international student life, homestay, transit, and climate — and plan your study abroad with confidence.",
      },
      { property: "og:title", content: "Study in Vancouver | Elevate International Education" },
      { property: "og:image", content: campusImg },
      { property: "og:url", content: "/en/study-in-vancouver" },
    ],
    links: [
      { rel: "canonical", href: "/en/study-in-vancouver" },
      { rel: "alternate", hrefLang: "en", href: "/en/study-in-vancouver" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/study-in-vancouver" },
    ],
  }),
  component: StudyPage,
});

const overview = [
  { t: "Education System", b: "BC is known for high-quality education with rich options across public, private, and international schools — balancing academics and activities." },
  { t: "Public vs Private", b: "Public schools offer full IB/AP programs and clubs; private schools provide small classes and comprehensive university counseling." },
  { t: "International Student Life", b: "A diverse, welcoming city with a mature international student community — children build friend circles quickly." },
  { t: "Safety & Lifestyle", b: "One of the world's most livable cities, with safe neighborhoods, excellent healthcare, and strong public transit." },
  { t: "Homestay Families", b: "Carefully selected Canadian families provide housing, meals, and daily care — supporting cultural integration." },
  { t: "Transportation", b: "SkyTrain, buses, and SeaBus form a complete network — students get to and from school safely and easily." },
  { t: "Climate", b: "Mild rainy winters and pleasant summers — four distinct seasons without harsh extremes." },
  { t: "Community & Culture", b: "A mature Chinese community and inclusive international culture — families and students feel at home." },
];

const faqs = [
  {
    q: "What age can my child start studying in Vancouver?",
    a: "We support students from senior elementary through high school and university — matching age-appropriate schools and accommodations.",
  },
  { q: "Does a parent need to accompany the child?", a: "Minors studying without a parent need a qualified custodian. We provide legal custodianship services and arrange homestay placements." },
  { q: "How do I choose between public and private?", a: "We evaluate the best fit based on personality, language level, university goals, and budget." },
  { q: "How long does the visa take?", a: "Typically 4–12 weeks depending on season and complexity. We help prepare documents and track progress." },
  { q: "What if my child's English isn't strong enough?", a: "That's okay. Vancouver has excellent ESL and language pathways, and we can arrange short-term language school as a soft landing." },
];

function StudyPage() {
  return (
    <>
      <section className="relative pt-32 pb-0 md:pt-40">
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">Study in Vancouver</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-4xl">
            A city where learning and living go hand in hand
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Vancouver combines world-class education with West Coast nature — one of the most trusted cities for international families.
          </p>
        </div>
        <img
          src={campusImg}
          alt="Vancouver campus"
          className="w-full mt-16 aspect-[21/9] object-cover"
          loading="lazy"
        />
      </section>

      <section
        className="py-24 md:py-32 bg-background"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial">
          <SectionHeading eyebrow="Overview" title="About Studying in Vancouver" />
          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-10">
            {overview.map((o, i) => (
              <div key={o.t} className="border-t border-border pt-6">
                <p className="font-serif text-xl text-wood">0{i + 1}</p>
                <h3 className="font-serif text-2xl text-primary mt-2">{o.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">{o.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40">
        <div className="container-editorial grid md:grid-cols-3 gap-6">
          <img src={schoolImg} alt="Vancouver school" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          <img src={streetImg} alt="Classroom group" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          <img src={homestayImg} alt="Students on campus" className="w-full aspect-[4/5] object-cover" loading="lazy" />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Parent Questions" />
          </div>
          <div className="md:col-span-8">
            {faqs.map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border last:border-b">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-serif text-lg md:text-xl text-primary">{q}</span>
        <ChevronDown
          size={20}
          className={`text-wood transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}
