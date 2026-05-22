import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, ShieldCheck, Home, MapPin, HeartPulse, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-vancouver.jpg";
import foundersImg from "@/assets/founders.jpg";
import campusImg from "@/assets/students-campus.jpg";
import homestayImg from "@/assets/homestay.jpg";
import sunsetImg from "@/assets/vancouver-sunset.jpg";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "頤珈國際教育 Elevate International Education | Vancouver 留學顧問" },
      {
        name: "description",
        content:
          "30 年加拿大在地經驗，陪伴孩子安心融入溫哥華生活與教育環境，從留學申請到海外生活，成為孩子在異鄉最堅實的後盾。",
      },
      { property: "og:title", content: "頤珈國際教育 | Vancouver 留學顧問" },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const whyVancouver = [
  { title: "安全宜居的國際城市", body: "世界級生活品質與多元文化環境，讓學生更容易安心適應海外生活。" },
  { title: "優質教育資源", body: "擁有加拿大頂尖中學與大學資源，提供學生更多升學機會。" },
  { title: "自然與城市平衡", body: "山海環繞的生活環境，培養孩子更健康與平衡的成長方式。" },
  { title: "完善社區支援", body: "成熟華人社區與國際環境，讓學生與家長更安心。" },
];

const services = [
  { icon: GraduationCap, label: "學業啟航", title: "學校精準申請", body: "根據學生背景與特質，量身規劃升學方向，協助完成理想學校申請。" },
  { icon: ShieldCheck, label: "通關無憂", title: "簽證全程協助辦理", body: "專業協助學生簽證與文件準備，讓出國流程更順利安心。" },
  { icon: Home, label: "溫馨落腳", title: "寄宿家庭媒合", body: "嚴格篩選安全友善的寄宿家庭，讓孩子快速融入當地生活。" },
  { icon: MapPin, label: "在地安頓", title: "生活支援服務", body: "協助手機門號、銀行開戶、交通與生活適應。" },
  { icon: HeartPulse, label: "健康防護", title: "加拿大醫療保險協助", body: "協助學生建立完善海外醫療保障。" },
  { icon: Sparkles, label: "文化融入", title: "長期在地陪伴", body: "幫助學生融入加拿大文化、建立自信與獨立能力。" },
];

const timeline = [
  { n: "01", t: "免費諮詢與規劃" },
  { n: "02", t: "學校與課程申請" },
  { n: "03", t: "簽證與文件準備" },
  { n: "04", t: "安排住宿與接機" },
  { n: "05", t: "抵達加拿大生活支援" },
  { n: "06", t: "長期陪伴與成長" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Vancouver skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/40 to-navy-deep/80" />
        <div className="relative container-editorial pt-32 pb-20 md:pb-32 text-cream w-full">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8 fade-up">
              <p className="text-[11px] tracking-[0.35em] text-cream/80 uppercase mb-6">
                Vancouver International Education Support
              </p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-balance">
                看見未來，<br />從安心出發
              </h1>
              <p className="mt-8 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed">
                30 年加拿大在地經驗，陪伴孩子安心融入溫哥華生活與教育環境，從留學申請到海外生活，成為孩子在異鄉最堅實的後盾。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 bg-cream text-navy px-7 py-3.5 text-sm tracking-wide hover:bg-cream/90 transition-colors"
                >
                  預約免費諮詢 <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-cream/40 text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-cream/10 transition-colors"
                >
                  了解更多
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-4 fade-up">
              {[
                { n: "30+", t: "Years in Canada" },
                { n: "100%", t: "Personalized Support" },
                { n: "Vancouver", t: "Local Expertise" },
              ].map((s) => (
                <div
                  key={s.t}
                  className="border border-cream/20 backdrop-blur-sm bg-cream/5 p-5 md:p-6"
                >
                  <p className="font-serif text-2xl md:text-3xl text-cream">{s.n}</p>
                  <p className="text-[11px] tracking-[0.2em] text-cream/70 mt-2 uppercase">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-24 md:py-40 bg-background">
        <div className="container-editorial grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5 relative">
            <img
              src={foundersImg}
              alt="Founders Maggie & Katrina"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block w-32 h-32 bg-wood-soft -z-10" />
          </div>
          <div className="md:col-span-7">
            <SectionHeading
              eyebrow="Our Founders"
              title="關於創辦人 Maggie & Katrina"
            />
            <div className="mt-8 space-y-5 text-[15px] md:text-base text-foreground/80 leading-[1.9] max-w-xl">
              <p>在加拿大這片土地上，創辦人 Maggie 與 Katrina 已經深耕、生活了超過 30 個年頭。</p>
              <p>我們經歷過獨自一人、背起行囊的「小留學生」時光，也走過在溫哥華成家立業、生兒育女的人生階段。</p>
              <p>因為親自走過，我們比任何人都更熟悉大溫哥華的每一寸土地、當地的文化肌理與豐富的社區資源。</p>
              <p>我們不只是顧問，更是孩子在異鄉最堅實的後盾。</p>
            </div>
            <div className="mt-10 pt-6 border-t border-border max-w-xl">
              <p className="font-serif text-2xl text-primary">Maggie &amp; Katrina</p>
              <p className="text-xs tracking-[0.2em] text-wood uppercase mt-2">
                Founders of Elevate International Education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VANCOUVER */}
      <section className="py-24 md:py-40 bg-secondary/40 relative overflow-hidden">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Why Vancouver"
            title="為什麼選擇溫哥華留學？"
            description="一座被山海環抱的城市，提供國際學生世界級的教育、安全的生活，與成熟而友善的社區。"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVancouver.map((c, i) => (
              <div
                key={c.title}
                className="group bg-card border border-border p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
              >
                <p className="font-serif text-xl text-wood mb-4">0{i + 1}</p>
                <h3 className="font-serif text-xl md:text-2xl text-primary leading-snug">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-20">
            <img
              src={campusImg}
              alt="International students on a Vancouver campus"
              className="w-full aspect-[21/9] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-40 bg-background">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Our Services"
              title="溫哥華留學全方位支援"
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-primary link-underline shrink-0"
            >
              查看完整服務 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-8 md:p-10 group">
                <s.icon size={28} className="text-wood mb-6" strokeWidth={1.4} />
                <p className="text-[11px] tracking-[0.25em] uppercase text-wood mb-2">{s.label}</p>
                <h3 className="font-serif text-2xl text-primary leading-snug">{s.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-40 bg-wood-soft/40">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Student Journey"
            title="陪伴孩子安心走過每一步"
            align="center"
          />
          <div className="mt-20 grid md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-6 relative">
            {timeline.map((t, i) => (
              <div key={t.n} className="relative">
                <div className="flex md:flex-col items-start gap-4 md:gap-5">
                  <p className="font-serif text-4xl md:text-5xl text-wood/80">{t.n}</p>
                  <div className="flex-1">
                    <p className="text-xs tracking-[0.2em] uppercase text-wood">Step {i + 1}</p>
                    <p className="mt-2 font-serif text-lg md:text-xl text-primary leading-snug">
                      {t.t}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOMESTAY EDITORIAL */}
      <section className="py-24 md:py-40 bg-background">
        <div className="container-editorial grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <SectionHeading
              eyebrow="Homestay"
              title="像家一樣的第二個家"
              description="我們親自篩選每一個寄宿家庭，確保孩子在加拿大有溫暖、安全、文化友善的生活環境。"
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-8 text-sm text-primary link-underline"
            >
              認識寄宿家庭服務 <ArrowRight size={16} />
            </Link>
          </div>
          <img
            src={homestayImg}
            alt="Vancouver homestay family dinner"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img
          src={sunsetImg}
          alt="Vancouver sunset"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative container-editorial py-24 md:py-32 text-cream text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-balance leading-[1.1]">
            讓孩子安心踏出未來的第一步
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-cream/85 leading-relaxed">
            從留學申請到海外生活，頤珈國際教育陪伴孩子穩健成長。
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 mt-10 bg-cream text-navy px-8 py-4 text-sm tracking-wide hover:bg-cream/90 transition-colors"
          >
            立即預約諮詢 <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
