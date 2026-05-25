import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Users, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/vancouver-street.webp";
import classroomImg from "@/assets/classroom-mentor.webp";
import schoolImg from "@/assets/school.webp";
import homestayImg from "@/assets/homestay.webp";
import campusHeritage from "@/assets/hero-students-group.webp";
import streetImg from "@/assets/hero-students-walking.webp";
import waveBg from "@/assets/wave-bg.jpg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "課程介紹 Courses | 頤珈國際教育" },
      {
        name: "description",
        content:
          "頤珈國際教育提供加拿大溫哥華短期遊學、暑期營、ESL 英語強化、長期中學留學及大學銜接課程，適合 10–18 歲華人學生。",
      },
      { property: "og:title", content: "課程介紹 Courses | 頤珈國際教育" },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

const courses = [
  {
    tag: "Summer Program",
    title: "溫哥華暑期遊學營",
    age: "10 – 18 歲",
    duration: "4 週",
    season: "7 – 8 月",
    location: "大溫哥華區域",
    img: heroImg,
    blurb: "以英語為主軸，融入加拿大文化體驗、戶外探索與校園生活，幫助孩子在輕鬆環境中建立國際視野。",
    highlights: [
      "每日 ESL 英語課程（小班制 8–10 人）",
      "Stanley Park、Granville Island、Whistler 戶外探索",
      "Homestay 寄宿家庭體驗",
      "每週家長視訊回報",
    ],
  },
  {
    tag: "ESL Intensive",
    title: "ESL 英語強化課程",
    age: "12 – 18 歲",
    duration: "8 – 24 週",
    season: "全年開課",
    location: "大溫哥華區域",
    img: classroomImg,
    blurb: "為計畫長期就讀加拿大公私立中學的孩子設計，銜接學科英語、學術寫作與口語表達。",
    highlights: [
      "依程度分班（Beginner – Advanced）",
      "學術寫作、閱讀理解、口語簡報",
      "加拿大中學課程預備（Math / Science 英語）",
      "每月個別學習進度面談",
    ],
  },
  {
    tag: "Junior School",
    title: "加拿大小學銜接課程",
    age: "10 – 12 歲",
    duration: "1 學年",
    season: "9 月 / 1 月入學",
    location: "大溫哥華區域",
    img: schoolImg,
    blurb: "為國小高年級孩子規劃 BC 省公立或私立小學銜接，包含申請、課輔、家長定期回報。",
    highlights: [
      "BC 公立 / 私立小學申請輔導",
      "課後一對一中英學習支援",
      "嚴選寄宿家庭媒合",
      "監護人服務（Custodianship）",
    ],
  },
  {
    tag: "Secondary School",
    title: "中學長期留學方案",
    age: "13 – 17 歲",
    duration: "1 – 4 年",
    season: "9 月 / 2 月入學",
    location: "大溫哥華區域",
    img: campusHeritage,
    blurb: "從學校評估、申請、簽證到落地照護的完整方案，協助孩子順利完成加拿大中學學業並銜接大學。",
    highlights: [
      "Top BC 公私立中學申請（40+ 合作學校）",
      "選課與學分規劃",
      "家長月報 + 學期成績檢視",
      "升大學規劃（UBC / SFU / U of T）",
    ],
  },
  {
    tag: "University Pathway",
    title: "大學銜接與升學規劃",
    age: "16 – 18 歲",
    duration: "1 – 2 年",
    season: "Fall / Spring",
    location: "大溫哥華區域",
    img: streetImg,
    blurb: "為高中後段或畢業生規劃加拿大社區學院 + 大學轉學雙軌路徑，兼顧成本與名校機會。",
    highlights: [
      "College + University Transfer 規劃",
      "IELTS / Duolingo 英語備考",
      "個人陳述（Personal Statement）輔導",
      "獎學金與住宿資源",
    ],
  },
];

function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 bg-navy text-ivory overflow-hidden">
        <div className="absolute inset-0 bp-grid opacity-[0.08]" aria-hidden="true" />
        <div className="container-editorial relative">
          <p className="text-[11px] tracking-[0.3em] text-gold uppercase mb-5">Courses</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-balance max-w-3xl">
            為 10 – 18 歲孩子
            <br />
            量身打造的留學課程
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-ivory/75 leading-relaxed">
            從短期暑期遊學、英語強化，到中學長期留學與大學銜接， 我們協助華人家庭找到最適合孩子當下階段的課程方案。
          </p>
        </div>
      </section>

      {/* Course Cards */}
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
                  <Meta Icon={Users} label="適合年齡" value={c.age} />
                  <Meta Icon={Clock} label="課程長度" value={c.duration} />
                  <Meta Icon={Calendar} label="開課時間" value={c.season} />
                  <Meta Icon={MapPin} label="上課地點" value={c.location} />
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
                  to="/consultation"
                  className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-navy border-b border-navy/40 pb-1 hover:border-navy transition-colors"
                >
                  Enquire <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-navy text-ivory">
        <div className="container-editorial text-center">
          <p className="text-[11px] tracking-[0.3em] text-gold uppercase mb-5">Not Sure Where to Start?</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            讓我們一起為孩子
            <br />
            選擇最合適的課程
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-ivory/75">
            每個孩子都不一樣。預約一次免費諮詢，我們會根據孩子的年齡、英語程度與家庭目標，提供量身建議。
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 mt-10 bg-ivory text-navy px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-colors"
          >
            預約免費諮詢 <ArrowRight size={16} />
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
