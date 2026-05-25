import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import foundersImg from "@/assets/parent-consultation.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/en/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Elevate International Education" },
      { name: "description", content: "Book a free consultation with Elevate International Education. Let's understand your child's needs and design the right Canadian study pathway together." },
      { property: "og:title", content: "Book a Consultation | Elevate International Education" },
      { property: "og:url", content: "/en/consultation" },
    ],
    links: [
      { rel: "canonical", href: "/en/consultation" },
      { rel: "alternate", hrefLang: "en", href: "/en/consultation" },
      { rel: "alternate", hrefLang: "zh-Hant", href: "/consultation" },
    ],
  }),
  component: ConsultationPage,
});

function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="pt-32 pb-24 md:pt-44 md:pb-32 bg-background"
      style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container-editorial grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-7">
          <p className="text-[11px] tracking-[0.3em] text-wood uppercase mb-5">Consultation</p>
          <h1 className="font-serif text-4xl md:text-6xl text-primary leading-[1.1] text-balance">
            Book a Free Study Abroad Consultation
          </h1>
          <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
            Let's understand your child's needs and design the right Canadian study pathway together.
          </p>

          {submitted ? (
            <div className="mt-12 border border-border bg-secondary/40 p-10">
              <p className="font-serif text-2xl text-primary">Thank you for your request ✦</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We've received your enquiry and will be in touch by Email or phone within 1–2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-12 grid sm:grid-cols-2 gap-x-6 gap-y-6">
              <Field label="Student Name" name="student" required />
              <Field label="Parent Name" name="parent" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Student Age" name="age" type="number" />
              <Field label="Program of Interest" name="program" placeholder="e.g. Secondary / University / Language" />
              <Select label="Preferred School Type" name="schoolType" options={["Public Secondary", "Private Secondary", "University", "Language School", "Other"]} />
              <Select label="Estimated Start" name="timeline" options={["Within 3 months", "Within 6 months", "Within 1 year", "Still planning"]} />
              <div className="sm:col-span-2">
                <Field label="Additional notes" name="notes" textarea />
              </div>
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 text-sm tracking-wide hover:bg-navy-deep transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="md:col-span-5">
          <div className="sticky top-28 space-y-6">
            <img src={foundersImg} alt="Founders" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="border-t border-border pt-6">
              <p className="font-serif text-xl text-primary">Maggie & Katrina</p>
              <p className="text-xs tracking-[0.2em] text-wood uppercase mt-2">Founders, Vancouver</p>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                Every study abroad journey deserves to be handled with care. 30 years of local experience make us the partner families trust.
              </p>
            </div>
            <div className="bg-secondary/40 border border-border p-6 text-sm leading-relaxed text-foreground/80">
              <p className="font-serif text-primary text-lg mb-2">Vancouver Local Support</p>
              <p>Our team is based in Vancouver and offers flexible consulting hours across Asia and Canada time zones.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean }) {
  const cls = "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.2em] uppercase text-wood">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} rows={3} placeholder={placeholder} required={required} className={cls + " resize-none"} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.2em] uppercase text-wood">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm text-foreground"
      >
        <option value="" disabled>Please select</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
