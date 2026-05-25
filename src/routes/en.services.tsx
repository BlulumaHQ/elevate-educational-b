import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, FileCheck, Plane, Home as HomeIcon, HeartHandshake, Sparkles } from "lucide-react";
import schoolImg from "@/assets/precise-school-application.webp";
import homestayImg from "@/assets/homestay.webp";
import campusImg from "@/assets/office-mentorship.webp";
import medicalImg from "@/assets/medical-insurance.webp";
import airportImg from "@/assets/airport-pickup.webp";
import settlingImg from "@/assets/settling-in.webp";
import consultImg from "@/assets/parent-consultation.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/en/services")({
  head: () => ({
    meta: [
      { title: "Services | Elevate International Education" },
      {
        name: "description",
        content: "Comprehensive Vancouver study abroad support — school applications, student visa, homestay, airport pickup, medical insurance, and settling in.",
      },
      { property: "og:title", content: "Services | Elevate International Education" },
      { property: "og:image", content: schoolImg },
      { property: "og:url", content: "/en/services" },
    ],
    links: [
      { rel: "canonical", href: "/en/services" },
      { rel: "alternate", hrefLang: "en", href: "/en/services" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/services" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    num: "01",
    t: "Precise School Applications",
    img: schoolImg,
    b: "From school research and application materials to interview coaching and enrollment — a tailored plan for the best-fit school.",
    steps: ["Background assessment & school research", "Documents & portfolio prep", "Submission & interview coaching", "Enrollment & course selection"],
  },
  {
    num: "02",
    t: "Student Visa Support",
    img: campusImg,
    b: "Full assistance with student visas, long-term residency, and related documentation for a smooth, confident process.",
    steps: ["Eligibility assessment", "Document checklist & forms", "Submission & tracking", "Post-arrival support"],
  },
  {
    num: "03",
    t: "Homestay Placement",
    img: homestayImg,
    b: "Personally vetted Canadian homestay families — warm, friendly, and culturally welcoming, with regular check-ins.",
    steps: ["Family background review", "Personality & dietary matching", "Regular care follow-ups", "Real-time issue resolution"],
  },
  {
    num: "04",
    t: "Airport Pickup & Settling In",
    img: airportImg,
    b: "Personal pickup by a consultant or trusted driver, plus first-day move-in assistance and a city orientation.",
    steps: ["Flight tracking", "Personal pickup", "Move-in assistance", "City orientation"],
  },
  {
    num: "05",
    t: "Medical Insurance",
    img: medicalImg,
    b: "Help with BC MSP registration and private insurance for complete overseas medical coverage.",
    steps: ["BC MSP application", "Private insurance options", "Medical appointment support", "Emergency contact line"],
  },
  {
    num: "06",
    t: "Daily Life Setup",
    img: settlingImg,
    b: "Mobile plans, banking, transit cards, and household essentials — helping students settle quickly into Canadian life.",
    steps: ["Mobile plan activation", "Bank account opening", "Transit card & routes", "Household essentials"],
  },
  {
    num: "07",
    t: "Parent Consulting",
    img: consultImg,
    b: "Regular updates and real-time communication, so you always know how your child is doing — academically and personally.",
    steps: ["Academic & life updates", "Emergency contact line", "Parent–child consulting"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-secondary/40">
        <div className="container-editorial">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">Services</p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary leading-[1.1] text-balance max-w-3xl">
            End-to-end support, from planning to arrival
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            We provide one-stop premium consulting — every detail of academics and daily life, thoughtfully arranged.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 bg-background border-y border-navy/10"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-4">Our Process</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Six Steps to a Confident Arrival</h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">From your first consultation to your child's smooth landing, we walk every step with you.</p>
          </div>

          <ol className="grid gap-y-12 md:grid-cols-6 md:gap-x-2 relative">
            {[
              { Icon: Search, n: "01", t: "Free Consultation", d: "Understand the child's background and family goals" },
              { Icon: FileCheck, n: "02", t: "Plan & Strategy", d: "Tailored school and program pathway" },
              { Icon: HomeIcon, n: "03", t: "Applications", d: "School applications & homestay matching" },
              { Icon: Plane, n: "04", t: "Visa & Pre-Departure", d: "Visa, insurance, and pre-departure briefing" },
              { Icon: HeartHandshake, n: "05", t: "Arrival & Setup", d: "Pickup, banking, and city orientation" },
              { Icon: Sparkles, n: "06", t: "Long-Term Care", d: "Regular updates and emergency support" },
            ].map((s, i, arr) => (
              <li
                key={s.n}
                className="relative flex md:flex-col items-start md:items-center text-center gap-5 md:gap-4"
              >
                <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border border-navy/20 bg-ivory flex items-center justify-center text-navy">
                  <s.Icon size={26} strokeWidth={1.4} />
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight size={18} className="hidden md:block absolute top-9 -right-3 text-wood/60" />
                )}
                <div className="md:mt-2">
                  <p className="text-[11px] tracking-[0.28em] text-wood uppercase">{s.n}</p>
                  <p className="font-serif text-xl md:text-2xl text-primary mt-2">{s.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[14rem]">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background">
        {services.map((s, i) => (
          <div key={s.num} className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}>
            <div className="container-editorial grid md:grid-cols-12 gap-10 md:gap-16 items-center">
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={s.img} alt={s.t} className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </div>
              <div className="md:col-span-6">
                <p className="font-serif text-3xl text-wood/80">{s.num}</p>
                <h2 className="font-serif text-3xl md:text-5xl text-primary mt-3 leading-tight">{s.t}</h2>
                <p className="mt-5 text-base text-foreground/80 leading-[1.9] max-w-lg">{s.b}</p>
                <ul className="mt-8 space-y-3 max-w-md">
                  {s.steps.map((step, idx) => (
                    <li key={step} className="flex items-baseline gap-4 text-sm text-foreground/80">
                      <span className="font-serif text-wood text-base">0{idx + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 md:py-32 bg-navy text-cream">
        <div className="container-editorial text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">Want to know which plan fits your child best?</h2>
          <p className="mt-5 max-w-xl mx-auto text-cream/80">Book a free consultation so we can learn about you and your child.</p>
          <Link
            to="/en/consultation"
            className="inline-flex items-center gap-2 mt-10 bg-cream text-navy px-8 py-4 text-sm tracking-wide hover:bg-cream/90 transition-colors"
          >
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
