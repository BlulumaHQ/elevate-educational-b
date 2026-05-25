import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import foundersImg from "@/assets/parent-consultation.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "預約諮詢 Consultation | 頤珈國際教育" },
      { name: "description", content: "預約頤珈國際教育免費留學諮詢。讓我們了解孩子的需求，一起規劃最適合的加拿大留學方向。" },
      { property: "og:title", content: "預約諮詢 | 頤珈國際教育" },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
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
            預約免費留學諮詢
          </h1>
          <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
            讓我們了解孩子的需求，一起規劃最適合的加拿大留學方向。
          </p>

          {submitted ? (
            <div className="mt-12 border border-border bg-secondary/40 p-10">
              <p className="font-serif text-2xl text-primary">感謝您的預約 ✦</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                我們已收到您的諮詢需求，將於 1–2 個工作天內透過 Email 或電話與您聯繫。
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-12 grid sm:grid-cols-2 gap-x-6 gap-y-6">
              <Field label="學生姓名" name="student" required />
              <Field label="家長姓名" name="parent" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="聯絡電話" name="phone" type="tel" required />
              <Field label="學生年齡" name="age" type="number" />
              <Field label="有興趣的課程" name="program" placeholder="例：中學 / 大學 / 語言學校" />
              <Select label="偏好學校類型" name="schoolType" options={["公立中學", "私立中學", "大學", "語言學校", "其他"]} />
              <Select label="預計出發時間" name="timeline" options={["3 個月內", "半年內", "一年內", "尚在規劃"]} />
              <div className="sm:col-span-2">
                <Field label="其他需求 / 備註" name="notes" textarea />
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
                我們相信每一段留學旅程，都值得被細心對待。30 年在地經驗，讓我們成為您最值得信賴的留學夥伴。
              </p>
            </div>
            <div className="bg-secondary/40 border border-border p-6 text-sm leading-relaxed text-foreground/80">
              <p className="font-serif text-primary text-lg mb-2">Vancouver Local Support</p>
              <p>顧問團隊長居溫哥華，提供台灣與加拿大兩地時段的彈性諮詢時間。</p>
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
        <option value="" disabled>請選擇</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
