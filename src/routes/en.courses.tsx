import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Users, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/summer-program.webp";
import classroomImg from "@/assets/esl-course.webp";
import schoolImg from "@/assets/school.webp";
import campusHeritage from "@/assets/secondary-school.webp";
import streetImg from "@/assets/university-pathway.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/en/courses")({
  head: () => ({
    meta: [
      { title: "Courses | Elevate International Education" },
      {
        name: "description",
        content:
          "Short-term study programs, summer camps, ESL, secondary school, and university pathway programs in Vancouver, Canada — for students aged 10–18.",
      },
      { property: "og:title", content: "Courses | Elevate International Education" },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/en/courses" },
    ],
    links: [
      { rel: "canonical", href: "/en/courses" },
      { rel: "alternate", hrefLang: "en", href: "/en/courses" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/courses" },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  {
    tag: "Summer Program",
    title: "Vancouver Summer Study Camp",
    age: "Ages 10 – 18",
    duration: "4 weeks",
    season: "July – August",
    location: "Greater Vancouver",
    img: heroImg,
    blurb: "English-focused with Canadian cultural experiences, outdoor exploration, and campus life — building international perspective in a relaxed environment.",
    highlights: [
      "Daily ESL classes (small groups of 8–10)",
      "Stanley Park, Granville Island, Whistler excursions",
      "Homestay family experience",
      "Weekly video updates for parents",
    ],
  },
  {
    tag: "ESL Intensive",
    title: "ESL Intensive Program",
    age: "Ages 12 – 18",
    duration: "8 – 24 weeks",
    season: "Year-round",
    location: "Greater Vancouver",
    img: classroomImg,
    blurb: "Designed for students planning long-term study at Canadian public or private secondary schools — academic English, writing, and speaking.",
    highlights: [
      "Leveled classes (Beginner – Advanced)",
      "Academic writing, reading, presentations",
      "Math/Science English prep for Canadian secondary school",
      "Monthly one-on-one progress reviews",
    ],
  },
  {
    tag: "Junior School",
    title: "Canadian Elementary Pathway",
    age: "Ages 10 – 12",
    duration: "1 academic year",
    season: "September / January intake",
    location: "Greater Vancouver",
    img: schoolImg,
    blurb: "Pathway support for senior elementary students entering BC public or private schools, including applications, tutoring, and parent updates.",
    highlights: [
      "BC public / private elementary application support",
      "1-on-1 after-school bilingual tutoring",
      "Carefully matched homestay placement",
      "Custodianship service",
    ],
  },
  {
    tag: "Secondary School",
    title: "Long-Term Secondary School Plan",
    age: "Ages 13 – 17",
    duration: "1 – 4 years",
    season: "September / February intake",
    location: "Greater Vancouver",
    img: campusHeritage,
    blurb: "From school assessment, application, and visa to on-the-ground care — supporting students through Canadian secondary school and into university.",
    highlights: [
      "Top BC public/private secondary school applications (40+ partner schools)",
      "Course selection and credit planning",
      "Monthly parent reports + term grade reviews",
      "University planning (UBC / SFU / U of T)",
    ],
  },
  {
    tag: "University Pathway",
    title: "University Pathway & Admissions",
    age: "Ages 16 – 18",
    duration: "1 – 2 years",
    season: "Fall / Spring",
    location: "Greater Vancouver",
    img: streetImg,
    blurb: "For late-secondary students or graduates — a community college + university transfer pathway balancing cost and prestige.",
    highlights: [
      "College + University Transfer planning",
      "IELTS / Duolingo English exam prep",
      "Personal Statement coaching",
      "Scholarships and housing resources",
    ],
  },
];

function CoursesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-navy text-ivory overflow-hidden">
        <div className="absolute inset-0 bp-grid opacity-[0.08]" aria-hidden="true" />
        <div className="container-editorial relative">
          <p className="text-[11px] tracking-[0.3em] text-gold uppercase mb-5">Courses</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-balance max-w-3xl">
            Study programs tailored
            <br />
            for ages 10 to 18
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-ivory/75 leading-relaxed">
            From short-term summer programs and ESL to long-term secondary and university pathways — we help international families find the right fit for each stage.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 bg-background"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial space-y-20 md:space-y-28">
          {courses.map((c, i) => (
            <article key={c.title} className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative">
                  <img src={c.img} alt={c.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-ivory/95 backdrop-blur px-4 py-2 text-[10px] tracking-[0.28em] uppercase text-navy">
                    {c.tag}
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">{c.title}</h2>
                <p className="mt-5 text-base text-foreground/80 leading-[1.95]">{c.blurb}</p>

                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <Meta Icon={Users} label="Age" value={c.age} />
                  <Meta Icon={Clock} label="Duration" value={c.duration} />
                  <Meta Icon={Calendar} label="Intake" value={c.season} />
                  <Meta Icon={MapPin} label="Location" value={c.location} />
                </dl>

                <ul className="mt-7 space-y-2.5">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                      <CheckCircle2 size={16} className="mt-0.5 text-wood shrink-0" strokeWidth={1.6} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/en/consultation"
                  className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-navy border-b border-navy/40 pb-1 hover:border-navy transition-colors"
                >
                  Enquire <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial text-center">
          <p className="text-[11px] tracking-[0.3em] text-gold uppercase mb-5">Not Sure Where to Start?</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Let's find the right
            <br />
            program for your child together
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-ivory/75">
            Every child is different. Book a free consultation — we'll recommend programs based on age, English level, and your family's goals.
          </p>
          <Link
            to="/en/consultation"
            className="inline-flex items-center gap-2 mt-10 bg-ivory text-navy px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-colors"
          >
            Book a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

function Meta({ Icon, label, value }: { Icon: typeof Clock; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={16} strokeWidth={1.5} className="mt-0.5 text-wood shrink-0" />
      <div>
        <dt className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{label}</dt>
        <dd className="mt-1 text-foreground">{value}</dd>
      </div>
    </div>
  );
}
