import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, GraduationCap, ShieldCheck, Home, Compass, HeartHandshake, Plane,
  Globe, BookOpen, MapPin, Building2, School, Briefcase, Library, Award,
} from "lucide-react";
import heroSlide1 from "@/assets/hero-students-walking.webp";
import heroSlide2 from "@/assets/hero-students-group.webp";
import skyline from "@/assets/vancouver-skyline.jpg";
import foundersImg from "@/assets/parent-consultation.webp";
import campusHeritage from "@/assets/student-presentation.webp";
import homestayWarm from "@/assets/homestay.webp";
import classroomMentor from "@/assets/teacher-presenting.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "頤珈國際教育 Elevate International Education | Vancouver 留學顧問" },
      {
        name: "description",
        content:
          "頤珈國際教育｜30 年加拿大溫哥華在地經驗，提供加拿大私校申請、學生簽證、寄宿家庭與長期陪伴式留學服務，為國際家庭打造安心、信任、專業的留學旅程。",
      },
      { property: "og:title", content: "頤珈國際教育 | Vancouver 留學顧問" },
      {
        property: "og:description",
        content: "30 年加拿大在地經驗，陪伴孩子安心融入溫哥華教育與生活環境。",
      },
      { property: "og:image", content: heroSlide1 },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const slides = [
  {
    img: heroSlide1,
    eyebrow: "Vancouver · British Columbia",
    title: ["看見未來，", "從安心出發"],
    subtitle:
      "30 年加拿大在地經驗，陪伴孩子安心融入溫哥華教育與生活環境。",
    primary: { label: "預約免費諮詢", to: "/consultation" },
    secondary: { label: "了解更多", to: "/about" },
  },
  {
    img: heroSlide2,
    eyebrow: "Boutique Education Consulting",
    title: ["不只是留學，更是", "孩子未來的起點"],
    subtitle:
      "從學校申請、寄宿家庭，到加拿大生活支援，提供真正長期陪伴式留學服務。",
    primary: { label: "Explore Services", to: "/services" },
    secondary: { label: "Book Consultation", to: "/consultation" },
  },
];

const services = [
  { icon: School, no: "01", title: "私校精準申請", body: "依孩子的學術背景、性向與家庭目標，為加拿大頂尖公立與私立學校量身規劃申請策略。" },
  { icon: ShieldCheck, no: "02", title: "學生簽證全程協助", body: "經驗豐富的顧問團隊，從文件準備到面談模擬，確保簽證流程順利安全。" },
  { icon: Home, no: "03", title: "寄宿家庭嚴選", body: "親自走訪、實地評估，為孩子媒合一個真正溫暖、可信賴的加拿大第二個家。" },
  { icon: Compass, no: "04", title: "在地生活安頓", body: "從手機門號、銀行開戶、交通卡、醫療資源到生活適應，一站式安心抵達。" },
  { icon: HeartHandshake, no: "05", title: "長期陪伴式照護", body: "我們是家長在加拿大的眼睛與雙手，定期回報、即時溝通、長期同行。" },
  { icon: Plane, no: "06", title: "文化銜接與升學規劃", body: "中學、大學、職涯延伸 — 陪孩子走過每一個關鍵階段。" },
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
      {/* ════════════ HERO — FULL SCREEN PREMIUM SLIDER ════════════ */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-navy-deep">
        {/* slides */}
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
              className={`absolute inset-0 w-full h-full object-cover ${i === active ? "kenburns" : ""}`}
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>
        ))}

        {/* floating line icons */}
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

        {/* blueprint overlay */}
        <div aria-hidden className="absolute inset-0 bp-grid opacity-[0.07] pointer-events-none" />

        {/* TOP META BAR */}
        <div className="absolute top-0 inset-x-0 z-10 pt-28 md:pt-32">
          <div className="container-wide flex items-center justify-between text-ivory/70 text-[11px] tracking-[0.32em] uppercase">
            <span className="hidden md:inline">Elevate International Education</span>
            <span>est. 1995 · Vancouver, BC</span>
          </div>
        </div>

        {/* CONTENT */}
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

        {/* BOTTOM BAR — slide dots + floating stats */}
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

            {/* floating stats card */}
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

      {/* ════════════ INTRO MARQUEE / TRUST BAND ════════════ */}
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

      {/* ════════════ PHILOSOPHY / WELCOME ════════════ */}
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
              頤珈國際教育是一間扎根於溫哥華的精品國際教育顧問品牌。
              我們不做大量代辦，而是與每一個國際家庭，深度合作、量身規劃孩子未來十年的教育藍圖。
            </p>
            <p>
              從加拿大頂尖私校的申請策略、學生簽證的全程協助、嚴選寄宿家庭的長期媒合，
              到孩子抵達後在校園、生活與文化上的每一個細節 —
              我們以 30 年的在地經驗與真實照護，成為家長安心託付的長期夥伴。
            </p>
            <div className="pt-4 flex items-center gap-5">
              <span className="hairline w-16" />
              <Link to="/about" className="text-navy text-sm tracking-[0.2em] uppercase link-underline">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ FOUNDER / TRUST — EDITORIAL SPLIT ════════════ */}
      <section className="relative bg-navy text-ivory overflow-hidden">
        <div aria-hidden className="absolute inset-0 bp-grid opacity-[0.06]" />
        <div className="grid lg:grid-cols-2">
          {/* IMAGE SIDE */}
          <div className="relative min-h-[520px] lg:min-h-[760px]">
            <img src={foundersImg} alt="Elevate founders in Vancouver" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/40" />
            {/* gold corner */}
            <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-gold/70" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-gold/70" />
          </div>

          {/* COPY SIDE */}
          <div className="px-6 md:px-16 lg:px-24 py-20 lg:py-32 flex items-center">
            <div className="max-w-xl">
              <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> Meet the Founders</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-balance">
                30 年的加拿大，<br />一生的教育承諾。
              </h2>
              <div className="mt-9 space-y-5 text-ivory/75 leading-[1.95] text-[15px]">
                <p>
                  創辦人於 1995 年移居加拿大，深耕溫哥華超過 30 年。
                  從自身留學、定居、養育孩子完成加拿大教育的真實經驗出發，
                  我們真正理解國際家庭在每一個階段的擔心、期待與挑戰。
                </p>
                <p>
                  我們不是代辦，而是孩子在加拿大的家人；
                  也是家長最值得信賴的在地夥伴。
                </p>
              </div>

              {/* mini timeline */}
              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-ivory/15">
                {[
                  { y: "1995", t: "移居 Vancouver" },
                  { y: "2005", t: "創立教育顧問業務" },
                  { y: "2025", t: "服務 200+ 國際家庭" },
                ].map((m) => (
                  <div key={m.y}>
                    <div className="font-display text-2xl text-gold">{m.y}</div>
                    <div className="mt-2 text-[12px] text-ivory/65 tracking-wide leading-snug">{m.t}</div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="mt-12 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gold link-underline">
                More About Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES — PREMIUM LINE-ICON GRID ════════════ */}
      <section className="relative py-28 md:py-40 bg-ivory-deep overflow-hidden">
        <div aria-hidden className="absolute inset-0 bp-grid-fine opacity-50" />
        <div aria-hidden className="absolute -top-32 -left-32 w-[460px] h-[460px] dot-field opacity-25 rounded-full" />

        <div className="container-wide relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-20">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> What We Do</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.08] text-balance">
                從第一封申請信，<br />到孩子畢業的那一天。
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 text-foreground/70 leading-[1.95] text-[15px]">
              我們以精品顧問的精神，提供六大核心服務 —
              讓國際家庭在加拿大留學的每一個關鍵階段，都有人專業同行。
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
            <Link to="/services" className="btn-primary !bg-navy">
              All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════ WHY VANCOUVER — ASYMMETRIC EDITORIAL ════════════ */}
      <section className="relative py-28 md:py-40 bg-ivory overflow-hidden">
        <div className="container-wide grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* IMAGE STACK */}
          <div className="lg:col-span-7 relative h-[520px] md:h-[640px]">
            <div className="absolute top-0 left-0 w-[68%] h-[78%] img-zoom shadow-2xl">
              <img src={campusHeritage} alt="Heritage Canadian campus" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-0 right-0 w-[52%] h-[58%] img-zoom shadow-2xl border-8 border-ivory">
              <img src={classroomMentor} alt="Classroom mentorship in Vancouver" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* gold accent */}
            <div className="absolute top-8 right-12 w-px h-32 bg-gold/60" />
            <div className="absolute top-8 right-12 w-32 h-px bg-gold/60" />
          </div>

          {/* COPY */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> Why Vancouver</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.08] text-balance">
              全球最宜居城市，<br />全球最頂尖教育。
            </h2>
            <div className="mt-8 space-y-5 text-foreground/75 leading-[1.95] text-[15px]">
              <p>
                溫哥華擁有北美最完整的國際教育生態系 —
                世界級的公立教育局、歷史悠久的傳統私校、嚴格認證的寄宿家庭網絡，
                以及多元、安全、自然環繞的城市生活環境。
              </p>
            </div>

            <ul className="mt-10 space-y-5">
              {[
                { Icon: School, t: "BC 省政府認證頂尖私校與公校網絡" },
                { Icon: Globe, t: "全球前 3 名最宜居、最安全的國際城市" },
                { Icon: GraduationCap, t: "通往北美一流大學的最佳跳板" },
              ].map(({ Icon, t }) => (
                <li key={t} className="flex items-start gap-5 pt-5 border-t border-navy/10">
                  <Icon size={28} strokeWidth={1.2} className="text-navy shrink-0 mt-0.5" />
                  <span className="text-navy text-[15px] leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            <Link to="/study-in-vancouver" className="mt-10 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-navy link-underline">
              Discover Vancouver <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIAL — QUIET EDITORIAL ════════════ */}
      <section
        className="relative py-28 md:py-36 bg-beige/40 overflow-hidden"
        style={{ backgroundImage: `url(${waveBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container-editorial max-w-4xl text-center">
          <p className="eyebrow mb-8 flex items-center justify-center gap-4">
            <span className="gold-bar" /> Family Voices <span className="gold-bar" />
          </p>
          <blockquote className="font-display text-2xl md:text-3xl lg:text-[2.4rem] text-navy leading-[1.45] italic text-balance">
            “第一次把孩子送出國，最怕的是『不知道』。
            頤珈讓我們安心，因為他們真的把我的孩子當自己的孩子在照顧。”
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-5 text-sm tracking-[0.22em] uppercase text-navy/65">
            <span className="hairline w-12" />
            高中生家長 · 台北
            <span className="hairline w-12" />
          </div>
        </div>
      </section>

      {/* ════════════ CTA — VANCOUVER SKYLINE ════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-navy-deep">
        <img src={skyline} alt="Vancouver skyline at blue hour" className="absolute inset-0 w-full h-full object-cover opacity-55" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/75 to-navy-deep/90" />
        <div aria-hidden className="absolute inset-0 bp-grid opacity-[0.08]" />

        <div className="relative container-wide py-24 md:py-36 text-ivory">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6 flex items-center gap-4"><span className="gold-bar" /> Begin Your Journey</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-balance leading-[1.05]">
              讓孩子安心踏出<br />國際未來的第一步。
            </h2>
            <p className="mt-8 max-w-xl text-ivory/75 text-[15px] md:text-base leading-[1.95]">
              預約一次免費的諮詢會議，與我們的顧問深入聊聊孩子的特質、家庭的期待，
              以及最適合的加拿大留學路徑。
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/consultation" className="btn-primary !bg-ivory !text-navy !border-ivory hover:!bg-gold hover:!border-gold">
                Book Consultation <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
